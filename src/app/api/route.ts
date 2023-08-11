import { NextResponse } from "next/server"

async function handle(req:Request){
  let txtBody = await req.text()
  let body = JSON.parse( txtBody )

  NextResponse.json({
    message:"Hello World"
  })
}
export {
  handle as GET , 
  handle as POST
}