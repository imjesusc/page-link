import { capilaze, cn } from '../../utils'
import { Icons } from '../ui/icons'

export const SocialLinks = ({ profileData, className }) => {
	const icons = {
		linkedin: <Icons.linkedin className={'w-5 h-5'} />,
		email: <Icons.mail className={'w-5 h-5'} />,
		twitter: <Icons.twitter className={'w-5 h-5'} />,
		instagram: <Icons.instagram className={'w-5 h-5'} />,
		facebook: <Icons.facebook className={'w-5 h-5'} />,
		github: <Icons.github className={'w-5 h-5'} />
	}

	const links = Object.entries(profileData)
	const filteredLinks = links
		.filter(([key, value]) => value && icons[key])
		.map(([key, value]) => ({ name: key, url: value, icon: icons[key] }))

	return (
		<ul
			className={cn(
				'flex items-center self-center justify-center gap-4 p-2 backdrop-blur-sm  rounded-xl w-max-content',
				className
			)}
			aria-label="Social Links"
		>
			{filteredLinks?.map(item => {
				return (
					item?.url && (
						<li key={item.name} aria-label={capilaze(item.name)}>
							<a
								href={item.name === 'email' ? `mailto:${item.url}` : item.url}
								title={capilaze(item.name)}
								className={cn(
									'block text-[#52525b]  bg-accent dark:bg-card/60 p-2 shadow-sm',
									'rounded-full border hover:scale-105 transition-transform duration-500'
								)}
								target="_blank"
								rel="noreferrer"
							>
								{item.icon && item.icon}
							</a>
						</li>
					)
				)
			})}
		</ul>
	)
}
