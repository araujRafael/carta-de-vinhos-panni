import { LogError, LogOutput } from "@/utils/chalks"

export interface InsideRecordAirtable<T> {
  id: string
  createdTime: string
  fields: T
}
export interface RecordAirtable<T> {
  records: InsideRecordAirtable<T>[] | null
}

type TableName = 'vinhos'
export async function getAirTableData<T = unknown>
  (tableName: TableName):
  Promise<InsideRecordAirtable<T>[] | undefined | null> {
  'use server'
  const baseId = process.env.AIRTABLE_BASE_ID!
  const tableIdOrName = tableName
  const token = process.env.AIRTABLE_SECRET_API_TOKEN!
  try {
    const data = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`
      , {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: 'force-cache',
        next: {
        }
      });
    const statusText = data.statusText
    if (!data.ok) LogError(statusText)
    const json: RecordAirtable<T> = await data.json()
    LogOutput(JSON.stringify(json.records?.[0].fields, null, 2))
    return json.records
  } catch (error) {
    LogError(error);
  }
}