import React from 'react'
import { Posts, Preview, ProfileForm, SocialLinks } from '../components/organisms'
import { cn } from '../utils'
import { useNavigate } from 'react-router-dom'
import { Separator } from '../components/atoms'

export const Home = () => {
  const navigate = useNavigate()
  const [isPublished, setIsPublished] = React.useState(false)
  const handlePublish = () => {
    setIsPublished(true)
    const { pathname } = window.location
    setTimeout(() => {
      navigate('/page-link' + pathname)
    }, 300)
  }

  return (
    <div className='grid tablet:grid-cols-2 overflow-y-auto overflow-x-hidden w-screen tablet:h-screen'>
      <main className='w-full tablet:h-screen overflow-x-auto p-4 tablet:p-10 flex flex-col gap-10'>
        <ProfileForm />
        <Separator type='horizontal' />
        <SocialLinks />
        <Separator type='horizontal' />
        <Posts />
      </main>
      <section className='w-full p-4 bg-purple-50 tablet:p-20 grid place-items-center relative h-screen'>
        <button
          onClick={handlePublish}
          className={cn('px-2 py-1 h-10 rounded-lg  hover:opacity-80 transition-opacity flex gap-1 items-center',
            ' shadow-lg bg-purple-400 text-white w-20',
            'absolute top-2 right-2 grid place-content-center')}
        >
          {isPublished
            ? (
              <svg class='animate-spin h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                <circle class='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' stroke-width='4' />
                <path class='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
              </svg>
              )
            : <span>Publish</span>}

        </button>
        <Preview />
      </section>
    </div>
  )
}
