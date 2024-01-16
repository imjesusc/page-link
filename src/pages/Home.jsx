import React from 'react'
import { Posts, Preview, ProfileForm, SocialLinks } from '../components/organisms'
import { cn } from '../utils'
import { useNavigate } from 'react-router-dom'
import { Icons, Separator } from '../components/atoms'

export const Home = () => {
  const navigate = useNavigate()
  const handleDeploy = () => {
    const { pathname } = window.location
    return navigate('/page-link' + pathname)
  }

  return (
    <div className='grid tablet:grid-cols-2 overflow-y-auto overflow-x-hidden w-screen tablet:h-screen'>
      <main className='w-full tablet:h-screen overflow-x-auto bg-slate-800 p-4 tablet:p-10 flex flex-col gap-10'>
        <ProfileForm />
        <Separator type='horizontal' />
        <SocialLinks />
        <Separator type='horizontal' />
        <Posts />
      </main>
      <section className='w-full p-4 tablet:p-20 grid place-items-center relative tablet:h-screen'>
        <button
          onClick={handleDeploy}
          className={cn('px-2 py-1 rounded flex gap-1 items-center shadow-lg bg-white text-black ',
            'absolute top-2 right-2')}
        >
          Publish
          <Icons.ExternalIcon className='w-4 h-4' />
        </button>
        <Preview />
      </section>
    </div>
  )
}
