import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { ColorMode } from '@/components/ColorMode'

export function Header() {
	return (
		<header className="container sticky left-0 right-0 top-0 z-50 w-full px-0 py-4">
			<nav
				className="max-screen flex w-full items-center justify-between gap-6 rounded-full px-6 py-1 transition-colors sm:pr-4">
				<Logo />
				<Navigation />
				<ColorMode />
			</nav>
		</header>
	)
}