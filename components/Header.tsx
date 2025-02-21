import { Logo } from '@/components/ui/Logo'
import { Navigation } from '@/components/Navigation'
import { ColorMode } from '@/components/ColorMode'

export function Header() {
	return (
		<header className="container sticky left-0 right-0 top-0 z-50 w-full px-0 pt-4 mb-8">
			<div className="container">
				<nav
					className="flex w-full items-center justify-between rounded-full transition-colors">
					<Logo />
					<Navigation />
					<ColorMode />
				</nav>
			</div>
		</header>
	)
}