import usePage from '../../hooks/usePage'
import { Title } from '../atoms/Title'
import { PreviewSocialLinks } from '../molecules'

export const Preview = () => {
  const { profile } = usePage()

  return (
    <div className='aspect-[1/2] flex flex-col gap-4 h-full w-auto rounded-[50px] px-4 py-10 ring-8 ring-slate-800 overflow-hidden'>
      <article className='grid'>
        {profile.avatar &&
        (
          <figure className='w-20 h-20 mb-3 rounded-full overflow-hidden ring ring-gray-400 mx-auto'>
            <img src={profile.avatar} className='w-full h-full border-0 object-cover rounded-full' />
          </figure>
        )}

        <Title type='h2' className='text-xl  font-semibold text-center'>{profile.name}</Title>
        <p className='text-balance text-center text-gray-400'>{profile.description}</p>
      </article>

      <article>
        <PreviewSocialLinks profileData={profile} />
      </article>
    </div>
  )
}
