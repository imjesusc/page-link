import { cn } from '../../utils'
import { PostCard } from './post-card'

export const PostColumns = ({ posts, className }) => {
	const [column1, column2] = posts

	return (
		<div className={cn('', className)}>
			{posts.length > 0 && (
				<div
					className={cn('grid grid-cols-1 gap-4', posts[0].length === 1 ? 'tablet:grid-cols-1' : 'tablet:grid-cols-2')}
				>
					{/* Columna 1 */}
					<div className="flex flex-col gap-4">
						{column1.map((postItem, index) => {
							const { link, post, postTitle, imgPost } = postItem
							return <PostCard key={index} link={link} post={post} postTitle={postTitle} imgPost={imgPost} />
						})}
					</div>

					{/* Columna 2 */}
					<div className="flex flex-col gap-4">
						{column2.map((postItem, index) => {
							const { link, post, postTitle, imgPost } = postItem
							return <PostCard key={index} link={link} post={post} postTitle={postTitle} imgPost={imgPost} />
						})}
					</div>
				</div>
			)}
		</div>
	)
}
