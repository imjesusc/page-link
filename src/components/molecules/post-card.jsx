import { Title } from '../atoms'

export const PostCard = ({ link, post, postTitle, imgPost }) => {
	return (
		<a href={link} aria-label={post} target="_blank" rel="noreferrer">
			<article className="flex flex-col bg-card hover:scale-[1.01] transition-all duration-500  gap-2 border-transparent rounded-xl shadow-medium p-4 overflow-hidden">
				<div className="flex flex-col gap-2">
					<Title type="h3" className={'font-sans font-semibold'}>
						{postTitle}
					</Title>
					<p className="text-pretty max-w-[700ch] text-sm font-sans text-muted-foreground text-start">{post}</p>
				</div>

				<figure className="w-full rounded-xl h-auto max-h-[600px] overflow-hidden">
					<img src={imgPost} className="w-full rounded-lg h-full " />
				</figure>
			</article>
		</a>
	)
}
