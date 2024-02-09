import { PostColumns, SocialLinks } from '../components/molecules'
import { Title } from '../components/atoms'
import { cn, decodeData } from '../utils'
import { useEffect, useState } from 'react'
import { Icons } from '../components/ui/icons'
import { PostCard } from '../components/molecules/post-card'
import { ProfileInfo } from '../components/molecules/profile-info'
import { reverseDataArr } from '../utils/reverse-data-arr.utilie'
import { separateColumns } from '../utils/separate-col.utilitie'
import { useTheme } from '../hooks'

export const PageLink = () => {
	const getUrlData = () => {
		const { pathname } = window.location
		if (pathname === '/page-link/') {
			return {
				profile: {},
				posts: []
			}
		}
		const data = pathname.split('page-link/')[1]
		const [profileData, postData] = data.split('posts')
		const decodedProfileData = JSON.parse(decodeData(profileData))
		const decodedPostData = JSON.parse(decodeData(postData))

		return {
			profile: decodedProfileData,
			posts: decodedPostData
		}
	}

	const { profile, posts } = getUrlData()

	useEffect(() => {
		globalThis.document.title = profile.name
	}, [])

	const { theme, toggleTheme } = useTheme()

	return (
		<div className="min-h-screen w-screen px-4 py-16 dark:bg-[#282a36]">
			<span aria-label="Background backdrop." className="fixed top-0 -z-10 h-full w-full ">
				<span
					className={cn(
						'absolute bottom-auto left-auto  right-0 top-0 h-[500px] w-[500px] -translate-x-[30%]',
						' translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]'
					)}
				></span>
			</span>

			<main className="max-w-[850px] mx-auto flex flex-col gap-8">
				<button
					onClick={toggleTheme}
					id="theme-toggle"
					aria-label="Toggle Dark Mode"
					className="shadow-medium rounded-full p-2 absolute right-0 -top-1 z-50"
				>
					{theme === 'light' ? <Icons.moon /> : <Icons.sun className={'dark:text-white'} />}
				</button>

				<ProfileInfo avatar={profile?.avatar} name={profile?.name} description={profile?.description} />

				<SocialLinks profileData={profile} />

				<section className={cn('flex items-center flex-col gap-6')}>
					{posts.length > 0 && <Title type="h2">Latest Posts</Title>}

					{posts.length > 0 && <PostColumns posts={separateColumns(posts)} className={'hidden tablet:flex'} />}

					<div className="flex tablet:hidden flex-col gap-4">
						{posts.length > 0 &&
							reverseDataArr(posts)?.map((postItem, index) => (
								<PostCard
									key={index}
									link={postItem.link}
									post={postItem.post}
									postTitle={postItem.postTitle}
									imgPost={postItem.imgPost}
								/>
							))}
					</div>
				</section>
			</main>
		</div>
	)
}
