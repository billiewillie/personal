export default function ButtonUp() {
	return (
		<button
			className="bg-backdrop fixed bottom-[84px] right-4 z-50 flex items-center justify-center rounded-full border border-bg-700 p-3 shadow backdrop-blur-md transition-all hover:bg-bg-700 active:scale-90 sm:bottom-4 invisible">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-arrow-up">
				<path d="m5 12 7-7 7 7" />
				<path d="M12 19V5" />
			</svg>
		</button>
	)
}