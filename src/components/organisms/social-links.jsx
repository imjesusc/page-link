import { Icons } from '../ui/icons'
import { LinksField } from '../molecules/links-field'
import { Title } from '../atoms'

const icons = [
	{ id: 'linkedin', label: 'LinkedIn', icon: <Icons.linkedin /> },
	{ id: 'email', label: 'Email', icon: <Icons.mail /> },
	{ id: 'twitter', label: 'Twitter', icon: <Icons.twitter /> },
	{ id: 'instagram', label: 'Instagram', icon: <Icons.instagram /> },
	{ id: 'facebook', label: 'Facebook', icon: <Icons.facebook /> },
	{ id: 'github', label: 'Github', icon: <Icons.github /> }
]
export const SocialLinks = () => {
	return (
		<section className="grid gap-3 bg-[#44475a] p-4 rounded-lg">
			<Title type="h2" className={'text-accent'}>
				Social Links
			</Title>

			<div className="grid grid-cols-2 col-span-3 gap-4">
				{icons?.map(item => (
					<LinksField key={item.id} id={item.id} label={item.label} icon={item.icon} />
				))}
			</div>
		</section>
	)
}
