import { Input, Label, Textarea } from '../atoms'

export const PostForm = ({ handlePost, defaulValues }) => {
	return (
		<article className="grid col-span-3 gap-2">
			<div>
				<Label htmlFor="imgPost" text="Post image *" />
				<Input
					value={defaulValues?.imgPost ? defaulValues?.imgPost : ''}
					type="link"
					id="imgPost"
					placeholder="https://..."
					onChange={handlePost}
				/>
			</div>
			<div>
				<Label htmlFor="postTitle" text="Post title" />
				<Input
					value={defaulValues?.postTitle ? defaulValues?.postTitle : ''}
					type="link"
					id="postTitle"
					onChange={handlePost}
				/>
			</div>
			<div>
				<Label htmlFor="post" text="Post description" />
				<Textarea
					className={'max-h-[200px]'}
					value={defaulValues?.post ? defaulValues?.post : ''}
					type="text"
					id="post"
					onChange={handlePost}
				/>
			</div>
			<div>
				<Label htmlFor="link" text="Post external link" />
				<Input value={defaulValues?.link ? defaulValues?.link : ''} type="link" id="link" onChange={handlePost} />
			</div>
		</article>
	)
}
