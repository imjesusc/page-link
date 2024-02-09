import React from 'react'
import { PostSetForm, Preview, ProfileForm, SocialLinks } from '../components/organisms'
import { cn } from '../utils'
import { useNavigate } from 'react-router-dom'
import { Title } from '../components/atoms'
import { Icons } from '../components/ui/icons'
import toast from 'react-hot-toast'

export const Home = () => {
	const navigate = useNavigate()
	const [isPublished, setIsPublished] = React.useState(false)
	const handlePublish = async () => {
		try {
			setIsPublished(true)

			const { pathname } = window.location
			if (pathname === '/') return toast.error('Please fill in the profile section.')

			await new Promise(resolve => setTimeout(resolve, 300))
			toast.success('Page created successfully!', { icon: '🎉.' })
			navigate('/page-link' + pathname)
		} catch (error) {
			console.log(error)
		} finally {
			setIsPublished(false)
		}
	}

	const handleReset = () => {
		navigate('/')
		window.location.reload()
	}

	return (
		<div className="bg-[#282a36]">
			<main className="grid relative py-5 tablet:p-0 tablet:grid-cols-2 container overflow-y-auto overflow-x-hidden w-screen tablet:h-screen">
				<section className="w-full tablet:h-screen overflow-x-auto px-4 tablet:p-16 flex flex-col gap-6">
					<header className="space-y-3">
						<Title type={'h2'} className="text-3xl font-bold font-sans text-[#ff79c6]">
							Page Link
						</Title>
						<p className="text-accent/60 font-sans">
							Create your page easily and quickly with Page Link and share it with your friends.
						</p>

						<ul>
							<li className="text-[#bd93f9]">1. Complet profile section</li>
							<li className="text-[#bd93f9]">2. Add social links</li>
							<li className="text-[#bd93f9]">3. Write a post</li>
							<li className="text-[#bd93f9]">4. Publish 🎉</li>
						</ul>
					</header>

					<ProfileForm />
					<SocialLinks />
					<PostSetForm />
				</section>

				<section className="w-full p-4  tablet:p-20 grid place-items-center relative h-screen">
					<button
						onClick={handlePublish}
						className={cn(
							'h-10 fixed top-10 right-10 hover:bg-[#ec7bb7] transition-colors w-24 flex items-center justify-center bg-[#f54ea7] text-white rounded-lg'
						)}
					>
						{isPublished ? <Icons.loader className="animate-spin" /> : <span>Publish</span>}
					</button>

					<button
						onClick={handleReset}
						className={cn(
							'h-10 fixed  top-24 right-10 hover:bg-accent transition-colors hover:text-black  w-24 flex items-center  text-white justify-center rounded-lg'
						)}
					>
						{false ? <Icons.loader className="animate-spin" /> : <span>Reset</span>}
					</button>
					<Preview />
				</section>
			</main>
		</div>
	)
}
