import { useSetData } from '../../hooks'
import { cn } from '../../utils'
import { reverseDataArr } from '../../utils/reverse-data-arr.utilie'
import { Title } from '../atoms'
import { SocialLinks } from '../molecules'
import { PostCard } from '../molecules/post-card'
import { ProfileInfo } from '../molecules/profile-info'

export const Preview = () => {
	const { profile, posts } = useSetData()

	const latestPost = reverseDataArr(posts)

	return (
		<section className={cn('aspect-[1/2.1]  relative   h-full pb-10  py-2 w-auto rounded-[60px] overflow-hidden')}>
			<img src="/phone.png" className="pointer-events-none absolute  top-0 z-50 h-full w-full object-cover" />

			<div className="overflow-y-auto py-16 pl-7 bg-white rounded-[60px] pr-5 flex flex-col gap-4 h-full w-full overflow-hidden">
				<ProfileInfo
					className={'[&>figure]:tablet:w-20 [&>figure]:tablet:h-20 [&>p]:text-sm [&>h1]:text-2xl gap-3'}
					avatar={profile?.avatar}
					name={profile?.name}
					description={profile?.description}
				/>

				<SocialLinks profileData={profile ?? {}} />

				<article className="grid gap-4">
					{posts.length > 0 && (
						<Title type="h2" className="">
							Latest Posts
						</Title>
					)}

					<div className="flex flex-col gap-4">
						{posts.length > 0 &&
							latestPost?.map((postItem, index) => (
								<PostCard
									key={index}
									link={postItem.link}
									post={postItem.post}
									postTitle={postItem.postTitle}
									imgPost={postItem.imgPost}
								/>
							))}
					</div>
				</article>
			</div>
		</section>
	)
}
