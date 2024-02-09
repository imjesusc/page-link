import React from 'react'
import { cn } from '../../utils'

export const Separator = ({ type = 'vertical', className }) => {
	const types = {
		vertical: 'w-[1px] h-full bg-input',
		horizontal: 'w-full min-h-[1px] bg-input'
	}
	return <span className={cn(types[type], className)} />
}
