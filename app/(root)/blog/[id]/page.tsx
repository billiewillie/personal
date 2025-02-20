export default function Post(
	{ params }: Readonly<{ params: { id: string } }>
) {
	const { id } = params

	return (
		<h1>Post {id} page</h1>
	)
}
