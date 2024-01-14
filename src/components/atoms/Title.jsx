import { cn } from '../../utils'

export const Title = ({ className, type, ...props }) => {
  const text = {
    h1: 'text-4xl',
    h2: 'text-xl font-semibold leading-none',
    h3: 'text-lg',
    h4: 'text-base',
    h5: 'text-sm',
    h6: 'text-xs'
  }

  const Tag = type in text ? type : 'h2'

  return (
    <Tag className={cn(text[type], className)} {...props}>{props.children}</Tag>
  )
}
