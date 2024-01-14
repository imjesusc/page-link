import React from 'react'
import { cn } from '../../utils'

export const Separator = ({ type = 'vertical', className }) => {
  const types = {
    vertical: 'w-[1px] h-full bg-gray-400',
    horizontal: 'w-full min-h-[1px] bg-gray-400'
  }
  return (
    <span className={cn(types[type], className)} />
  )
}
