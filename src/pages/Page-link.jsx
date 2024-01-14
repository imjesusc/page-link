import React from 'react'
import { useStore } from '../store'
import { decode } from 'js-base64'
import { PreviewSocialLinks } from '../components/molecules'
import { Title } from '../components/atoms/Title'

export const PageLink = () => {
  const { profile } = useStore()
  const getUrlData = () => {
    const { pathname } = window.location
    if (pathname === '/page-link') return

    let data = pathname.split('/page-link/')[1]
    data = data.split('%7C')

    const decodedData = {}

    const keys = Object.keys(profile)
    const decodeData = (value) => (value ? decode(value) : '')

    keys.forEach((key, index) => {
      decodedData[key] = decodeData(data[index])
    })

    return decodedData
  }

  const data = getUrlData()
  return (
    <main className='flex flex-col gap-6 p-4 my-10 tablet:my-20'>
      <article className='grid gap-2 justify-items-center'>
        {data.avatar &&
      (
        <figure className='h-40 w-40 mb-3 rounded-full overflow-hidden ring ring-gray-400 mx-auto'>
          <img src={data.avatar} className='w-full h-full border-0 object-cover rounded-full' />
        </figure>
      )}

        <Title type='h1' className='font-semibold text-center'>{data.name}</Title>
        <p className='text-lg text-balance text-center text-gray-400 max-w-[500px]'>{data.description}</p>
      </article>
      <div>
        <PreviewSocialLinks profileData={data} />
      </div>
    </main>
  )
}
