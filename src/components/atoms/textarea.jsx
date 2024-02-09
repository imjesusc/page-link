import { cn } from '../../utils/cn'

export const Textarea = ({ className, ...props }) => {
	return (
		<textarea
			className={cn(
				'flex min-h-[100px] w-full rounded-lg border border-input bg-transparent text-white px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground  outline-none disabled:opacity-50',
				className
			)}
			{...props}
		/>
	)
}
