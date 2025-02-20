import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import React from 'react'
import "../globals.css"

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Веб разработчик Вадим Белинович',
	description: 'Персональный сайт веб разработчика Вадима Белиновича'
}

export default function RootLayout(
	{ children }: Readonly<{ children: React.ReactNode }>
) {
	return (
		<html lang="en">
		<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
		{children}
		</body>
		</html>
	)
}
