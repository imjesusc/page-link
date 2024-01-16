import { useControl } from '../../hooks'
import { cn } from '../../utils'
import { Title } from '../atoms/Title'
import { PreviewPosts, PreviewSocialLinks } from '../molecules'

export const Preview = () => {
  const { profile, posts } = useControl()

  return (
    <div className={cn('aspect-[1/2] bg-white preview-bar flex flex-col gap-4 h-full w-auto rounded-[50px] px-4 py-10 ring-8',
      ' ring-slate-800 overflow-hidden overflow-y-auto')}
    >
      <article className='grid'>
        {profile?.avatar &&
        (
          <figure className='w-20 h-20 mb-3 rounded-full overflow-hidden ring-4 ring-purple-400/20 mx-auto'>
            <img src={profile?.avatar} className='w-full h-full border-0 object-cover rounded-full' />
          </figure>
        )}

        <Title type='h2' className='text-2xl  font-semibold text-center'>{profile?.name}</Title>
        <p className='text-balance text-center text-gray-400'>{profile?.description}</p>
      </article>

      <article>
        <PreviewSocialLinks profileData={profile ?? {}} />
      </article>

      <article className='grid gap-2'>
        {posts.length > 0 && <Title type='h2' className='text-lg font-medium'>Posts</Title>}
        <PreviewPosts posts={posts} />
      </article>
    </div>
  )
}
