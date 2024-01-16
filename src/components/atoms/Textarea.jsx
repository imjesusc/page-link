import { cn } from '../../utils/cn'

export const Textarea =
  ({ className, ...props }) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[100px] w-full rounded-lg border  bg-transparent px-3 py-1 text-sm outline-none resize-none ',
          className
        )}
        {...props}
      />
    )
  }
