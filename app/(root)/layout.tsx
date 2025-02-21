import { Header } from '@/components/Header'
import { ReactNode } from 'react'
import Footer from '@/components/Footer'
import ButtonUp from '@/components/ui/ButtonUp'

export default function RootLayout(
	{ children }: Readonly<{ children: ReactNode }>
) {
	return (
		<>
			<Header />
			<main className="min-h-[100dvh]">
				{children}
			</main>
			<ButtonUp />
			<Footer />
		</>
	)
}
