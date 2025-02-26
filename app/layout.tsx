import type { Metadata } from 'next'
import { Geist, Geist_Mono, Montserrat } from 'next/font/google'
import { ReactLenis, useLenis } from 'lenis/react'
import React from 'react'
import './globals.css'

const montserrat = Montserrat({
	variable: '--montserrat',
	subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
	title: 'Web-разработчик Вадим Белинович',
	description: 'Персональный сайт web-разработчика Вадима Белиновича'
}

export default function RootLayout(
	{ children }: Readonly<{ children: React.ReactNode }>
) {
	return (
		<html lang="ru">
		<body className={`${montserrat.variable} antialiased relative flex flex-col`}>
		<ReactLenis root>
			{children}
		</ReactLenis>
		</body>
		</html>
	)
}
