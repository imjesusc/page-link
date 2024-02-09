import { PostForm } from '../molecules'
import { Title } from '../atoms'
import { useSetData } from '../../hooks'
import { Icons } from '../ui/icons'

export const PostSetForm = () => {
	const { posts, handlePostChange, addNewPostField, removePostField } = useSetData()
	return (
		<section className="grid gap-3 bg-[#44475a] p-4 rounded-lg">
			<Title type="h2" className={'text-accent'}>
				Posts
			</Title>

			<div className="grid col-span-3 gap-4">
				{posts.map((post, index) => (
					<div className="flex gap-2 bg-[#282a36] flex-col rounded-lg p-4" key={index}>
						<PostForm handlePost={event => handlePostChange(event, index)} defaulValues={post} />
						<button
							onClick={() => removePostField(index)}
							className="place-self-end py-1 px-2 border-input border rounded-lg bg-white"
						>
							Remove
						</button>
					</div>
				))}

				<button
					onClick={addNewPostField}
					className="flex gap-3 items-center px-3 py-2 rounded-lg justify-center bg-blue-500 text-white"
				>
					<Icons.more /> Add Post
				</button>
			</div>
		</section>
	)
}
