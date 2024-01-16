import React from 'react'
import { Icons } from '../atoms'
import { cn } from '../../utils'

export const PreviewPosts = ({ posts, className }) => {
  return (
    <div className={cn('grid grid-cols-2 gap-x-4 gap-y-6', className)}>
      {
    posts.length > 0 && (
      posts.map((postItem, index) => (
        postItem.imgPost && (
          <div key={index} className='relative'>
            <a
              href={postItem.link}
              aria-label={postItem.post} target='_blank'
              className='block w-auto absolute z-10 bg-black/50 rounded-full p-1 top-2 right-2'
              rel='noreferrer'
            >
              <Icons.ExternalIcon className='w-5 h-5 text-white' />
            </a>
            <figure className='ring-2 ring-purple-400/20 w-full rounded-lg h-40'>
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
