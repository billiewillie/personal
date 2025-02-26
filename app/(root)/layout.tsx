import { Header } from '@/components/Header'
import { ReactNode } from 'react'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'

export default function RootLayout(
	{ children }: Readonly<{ children: ReactNode }>
) {
	return (
		<>
			<Header />
			<main className="min-h-[100dvh]">
				{children}
			</main>
			<MobileNav />
			<Footer />
		</>
	)
}
