import { cn } from '../../utils/cn'

export const Input = ({ className, type, ...props }) => {
	return (
		<input
			type={type}
			className={cn(
				'flex h-9 w-full text-white bg-transparent  rounded-lg border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50',
				className
			)}
			{...props}
		/>
	)
}
