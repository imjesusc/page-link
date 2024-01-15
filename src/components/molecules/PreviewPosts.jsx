import React from 'react'
import { Icons } from '../atoms'

export const PreviewPosts = ({ posts }) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {
    posts.length > 0 && (
      posts.map((postItem, index) => (
        postItem.imgPost && (
          <div key={index} className='relative'>
            <a
              href={postItem.link}
              aria-label={postItem.post} target='_blank'
              className='block w-auto absolute z-10 bg-gray-100/50 rounded-full p-1 top-2 right-2'
              rel='noreferrer'
            >
              <Icons.ExternalIcon className='w-5 h-5 ' />
            </a>
            <figure className='w-full rounded-lg h-40'>
              <img src={postItem.imgPost} className='w-full rounded-lg h-full  object-cover' />
            </figure>
            <p className='text-balance text-start text-gray-400'>{postItem.post}</p>
          </div>
        )
      ))
    )
  }
    </div>
  )
}
