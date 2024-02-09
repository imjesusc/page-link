import { Input, Label, Textarea } from '../atoms'
import { Title } from '../atoms'
import { useSetData } from '../../hooks/useSetData'

export const ProfileForm = () => {
	const { profile, handleProfileChange } = useSetData()

	return (
		<div className="grid gap-3 bg-[#44475a] p-4 rounded-lg">
			<Title type="h2" className={'text-accent'}>
				Profile
			</Title>
			<div className="grid col-span-3 gap-4">
				<div>
					<Label htmlFor="name" text="Names" />
					<Input value={profile?.name} id="name" onChange={handleProfileChange} />
				</div>

				<div>
					<Label htmlFor="description" text="Description" />
					<Textarea
						value={profile?.description}
						className="max-h-[200px]"
						id="description"
						name="description"
						onChange={handleProfileChange}
					/>
				</div>

				<div>
					<Label htmlFor="avatar" text="Avatar url" />
					<Input value={profile?.avatar} type="link" id="avatar" onChange={handleProfileChange} />
				</div>
			</div>
		</div>
	)
}
