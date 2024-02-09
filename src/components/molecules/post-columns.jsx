import { cn } from '../../utils'
import { Title } from '../atoms'

export const PostColumns = ({ posts, className }) => {
	const [column1, column2] = posts

	return (
		<div className={cn('', className)}>
			{posts.length > 0 && (
				<div className="grid tablet:grid-cols-2 gap-4">
					{/* Columna 1 */}
					<div className="flex flex-col gap-4">
						{column1.map((postItem, index) => (
							<a
								key={index}
								href={postItem.link}
								aria-label={postItem.post}
								className=" hover:scale-[1.02] transition-all duration-500"
								target="_blank"
								rel="noreferrer"
							>
								<article className="flex flex-col bg-card dark:bg-accent gap-2 border-transparent rounded-xl shadow-medium p-4 overflow-hidden">
									<div className="flex flex-col gap-2">
										<Title type="h3" className={'font-sans font-semibold'}>
											{postItem.postTitle}
										</Title>
										<p className="text-pretty text-sm font-sans text-muted-foreground text-start">{postItem.post}</p>
									</div>

									<figure className="w-full rounded-xl h-48 overflow-hidden">
										<img src={postItem.imgPost} className="w-full rounded-lg h-full aspect-video object-cover" />
									</figure>
								</article>
							</a>
						))}
					</div>

					{/* Columna 2 */}
					<div className="flex flex-col gap-4">
						{column2.map((postItem, index) => (
							<a
								key={index}
								href={postItem.link}
								aria-label={postItem.post}
								className=" hover:scale-[1.02] transition-all duration-500"
								target="_blank"
								rel="noreferrer"
							>
								<article className="flex flex-col dark:bg-accent bg-card gap-2 border-transparent rounded-xl shadow-medium p-4 overflow-hidden">
									<div className="flex flex-col gap-2">
										<Title type="h3" className={'font-sans font-semibold'}>
											{postItem.postTitle}
										</Title>
										<p className="text-pretty text-sm font-sans text-muted-foreground text-start">{postItem.post}</p>
									</div>

									<figure className="w-full rounded-xl h-auto overflow-hidden">
										<img src={postItem.imgPost} className="w-full rounded-lg h-full aspect-video object-cover" />
									</figure>
								</article>
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
