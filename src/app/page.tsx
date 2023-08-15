import { VinhosField } from "@/@types/fields-airtable";
import { getAirTableData } from "@/actions/getTableWines";
import { Container } from "@/components/Atom/Container";
import Card from "@/components/Molecules/Card";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Carta de vinhos | Panni',
  description: 'os melhores vinhos da panni aqui'
}

export default async function Home() {
  const table = await getAirTableData<VinhosField>('vinhos')


  // Home ***************************************************************
  return (
    <div className="!h-full !w-full">
      <Container className={`h-full w-full 
      flex flex-col items-center`}>
        <h1 className={`text-2xl mb-8`}>
          CARTA DE VINHOS PANNI
        </h1>
        <ul className={`
          w-full h-full flex flex-col gap-5
        `}>
          {
            table?.map(({ fields, createdTime, id }, i) => (
              <li key={i.toString()} className={`w-full h-min`}>
                <Card key={id} id={id} data={fields} created={createdTime} />
              </li>
            ))
          }
        </ul>
      </Container>
    </div>
  )
}
