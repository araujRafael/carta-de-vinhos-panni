import { Container } from "@/components/Atom/Container";
import Card from "@/components/Molecules/Card";
import CarrouselComponent from "@/components/Organisms/CarrouselComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Avalia produtos',
  description: ''
}

export default async function Home() {

  // Home ***************************************************************
  return (
    <div className="!h-full !w-full">
      <Container className={`h-full w-full 
      flex flex-col items-center`}>
        <h1 className={`text-2xl mb-8`}>
          CARTA DE VINHOS PANNI
        </h1>
        <ul className={`w-full h-full flex flex-col gap-5`}>
          {
            Array.from({ length: 20 }).map(x => (
              <li className={`w-full h-min`}>
                <Card />
              </li>
            ))
          }
        </ul>
      </Container>
    </div>
  )
}
