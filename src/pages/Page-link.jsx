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
    globalThis.document.title = profile.name + '| Page link'
  }, [])

  return (
    <main className='flex flex-col gap-6 p-4 my-10 tablet:my-20 max-w-[800px] mx-auto'>
      <article className='grid gap-2 justify-items-center'>
        {profile.avatar &&
      (
        <figure className='h-40 w-40 mb-3 rounded-full overflow-hidden ring ring-gray-400 mx-auto'>
          <img src={profile.avatar} className='w-full h-full border-0 object-cover rounded-full' />
        </figure>
      )}

        <Title type='h1' className='font-semibold text-center'>{profile.name}</Title>
        <p className='text-lg text-balance text-center text-gray-400 max-w-[500px]'>{profile.description}</p>
      </article>

      <PreviewSocialLinks profileData={profile} />

      <section className='grid gap-2 mt-10'>
        {posts.length > 0 && <Title type='h2' className='text-xl font-semibold'>Posts</Title>}
        <PreviewPosts posts={posts} className={cn(posts.length > 2 ? 'tablet:grid-cols-3' : 'grid-cols-2')} />
      </section>

    </main>
  )
}
