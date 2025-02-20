import Link from 'next/link'

export function Logo() {
	return (
		<Link
			className="font-clashDisplay text-2xl font-medium sm:text-xl"
			href="/public">
			ВБ
		</Link>
	)
}