import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactLenis, useLenis } from 'lenis/react'
import React from 'react'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
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
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased relative flex flex-col`}>
		<ReactLenis root>
			{children}
		</ReactLenis>
		</body>
		</html>
	)
}
