'use client'
import { Box } from "@chakra-ui/react"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { Container } from "./Container"
import Image from "next/image"

interface LayoutPageProps {
	children: ReactNode
}

export const LayoutPage: React.FC<LayoutPageProps> = ({
	children
}) => {
	const pathname = usePathname()
	const inPathname = (path: string) => pathname === path

	// Render
	return (
		<Box fontFamily={'body'} className={`
					min-h-screen h-screen w-full flex flex-col
			`}>
			<menu className={` !bg-black
							w-full min-h-[56px] h-[56px] px-2 bg-transparent
							md:min-h-[72px] md:h-[72px]
					`}>
				<Container className={`h-full`}>
					<ul className="w-full h-full flex justify-between items-center gap-10">
						<li>
							<Image
								src={'/images/logo.png'}
								alt="logo"
								width={40}
								height={40}
								className={`md:w-[56px] md:h-[56px]`}
							/>
						</li>
					</ul>
				</Container>

			</menu>
			<div className={` w-full min-h-[calc(100%-72px)] p-2 sm:p-12 overflow-y-auto`}>
				{children}
			</div>
		</Box>
	)
}