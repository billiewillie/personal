import Link from 'next/link'

export default function Blog() {
	return (
		<>
			<h1>Blog page</h1>
			<ul className="mt-10">
				<li>
					<Link href="/app/(root)/blog/1">Post 1</Link>
				</li>
				<li>
					<Link href="/app/(root)/blog/2">Post 2</Link>
				</li>
			</ul>
		</>
	)
}
