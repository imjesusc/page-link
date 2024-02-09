import React from 'react'
import { Title } from '../atoms'
import { cn } from '../../utils'

export const ProfileInfo = ({ avatar, name, description, className }) => {
	return (
		<header className={cn('grid justify-items-center gap-4', className)}>
			{avatar && (
				<figure
					className={cn(
						'w-24  h-24 tablet:h-40 tablet:w-40 mb-3 rounded-full ring-4 ring-accent dark:ring-offset-[#282a36] ring-offset-4',
						' overflow-hidden shadow-xl mx-auto row-span-3'
					)}
				>
					<img src={avatar} className="w-full h-full  object-cover" />
				</figure>
			)}

			<Title type="h1" className={'font-bold font-sans text-3xl tablet:text-4xl'}>
				{name}
			</Title>
			<p className="text-base max-w-[60ch] tablet:text-lg text-pretty text-muted-foreground dark:text-white/50 font-sans text-center">
				{description}
			</p>
		</header>
	)
}
