import { cn } from '../../utils/cn'

export const Input =
  ({ className, type, ...props }) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border  bg-transparent px-3 py-1 text-sm resize-none outline-none',
          className
        )}
        {...props}
      />
    )
  }
