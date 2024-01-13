import { cn } from '../../utils/cn'

export const Label = ({ className, text, ...props }) => (
  <label
    className={cn('text-base', className)}
    {...props}
  >{text}
  </label>
)
