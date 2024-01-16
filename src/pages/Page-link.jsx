import { PreviewPosts, PreviewSocialLinks } from '../components/molecules'
import { Title } from '../components/atoms/Title'
import { cn, decodeData } from '../utils'
import { useEffect } from 'react'

export const PageLink = () => {
  const getUrlData = () => {
    const { pathname } = window.location
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

  return (
    <main className='flex flex-col gap-6 p-4 my-10 tablet:my-20 max-w-[800px] mx-auto'>
      <article className='grid justify-items-center tablet:justify-items-start tablet:grid-cols-[auto_1fr] gap-x-10 gap-y-3'>
        {profile.avatar &&
      (
        <figure className={cn('w-20 h-20 tablet:h-40 tablet:w-40 mb-3 rounded-full',
          ' overflow-hidden ring ring-gray-400 mx-auto row-span-3')}
        >
          <img src={profile.avatar} className='w-full h-full border-0 object-cover rounded-full' />
        </figure>
      )}

        <Title type='h1' className='text-3xl tablet:text-4xl text-center font-semibold'>{profile.name}</Title>
        <p className='text-base tablet:text-lg text-pretty text-gray-400 text-center tablet:text-left'>{profile.description}</p>

        <PreviewSocialLinks className='justify-start' profileData={profile} />
      </article>

      <section className='grid gap-2 mt-10'>
        {posts.length > 0 && <Title type='h2' className='text-xl font-semibold'>Posts</Title>}
        <PreviewPosts
          posts={posts}
          className={cn(posts.length > 2 ? 'tablet:grid-cols-3' : posts.length > 1 ? 'tablet:grid-cols-2' : 'justify-items-center grid-cols-1')}
        />
      </section>

    </main>
  )
}
