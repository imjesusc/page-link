import { useSetData } from '../../hooks'
import { Input, Label } from '../atoms'
import { Icons } from '../ui/icons'

export const LinksField = ({ id, label, icon }) => {
	const { profile, handleProfileChange, handleResetInput } = useSetData()

	return (
		<div className="group">
			<Label htmlFor={id} text={label} />
			<div className="flex border bg-transparent rounded-lg items-center overflow-hidden">
				<span className="min-w-10 p-2 grid place-items-center text-accent">{icon ?? icon}</span>
				<Input
					className="border-0 ring-0 p-1 rounded-none"
					value={profile[id]}
					id={id}
					onChange={handleProfileChange}
				/>
				{/* Reset input by id */}
				<button
					onClick={() => handleResetInput(id)}
					className="h-full p-2 rounded-r-xl opacity-0 group-hover:opacity-100 grid  duration-500 cursor-pointer w-10 place-items-center"
				>
					<Icons.close className={'text-white'} />
				</button>
			</div>
		</div>
	)
}
