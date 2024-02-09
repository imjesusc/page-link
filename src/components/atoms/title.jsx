import { cn } from '../../utils'

export const Title = ({ className, type, ...props }) => {
	const text = {
		h1: 'text-2xl dark:text-white font-semibold leading-none font-sans tracking-tight',
		h2: 'text-xl dark:text-muted-foreground font-semibold leading-none font-sans tracking-tight',
		h3: 'text-lg dark:text-white/90 font-medium leading-none font-sans tracking-tight',
		h4: 'text-base',
		h5: 'text-sm',
		h6: 'text-xs'
	}

	const Tag = type in text ? type : 'h2'

	return (
		<Tag className={cn(text[type], className)} {...props}>
			{props.children}
		</Tag>
	)
}
