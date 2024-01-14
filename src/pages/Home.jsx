import React from 'react'
import { Preview, ProfileForm, SocialLinks } from '../components/organisms'
import { Separator } from '../components/atoms/Separator'
import { cn } from '../utils'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()
  const handleDeploy = () => {
    const { pathname } = window.location
    return navigate('/page-link' + pathname)
  }

  return (
    <div className='grid grid-cols-2 w-screen h-screen'>
      <main className='w-full h-full bg-slate-800 p-10 flex flex-col gap-10'>
        <ProfileForm />
        <Separator type='horizontal' />
        <SocialLinks />
      </main>
      <section className='grid place-items-center relative'>
        <button
          onClick={handleDeploy}
          className={cn('px-2 py-1 rounded shadow-lg bg-white text-black ',
            'active:translate-y-[1px] absolute top-2 right-2')}
        >
          Deploy
        </button>
        <Preview />
      </section>
    </div>
  )
}
