import React from 'react'
import { Input, Label, Textarea } from '../atoms'

export const PostsField = ({ handlePost, defaulValues }) => {
  return (
    <article className='grid col-span-3 gap-2'>
      <div>
        <Label htmlFor='imgPost' text='Post image' />
        <Input value={defaulValues?.imgPost ? defaulValues?.imgPost : ''} type='link' id='imgPost' onChange={handlePost} />
      </div>
      <div>
        <Label htmlFor='post' text='Post content' />
        <Textarea value={defaulValues?.post ? defaulValues?.post : ''} type='text' maxLength={150} id='post' onChange={handlePost} />
      </div>
      <div>
        <Label htmlFor='link' text='External link' />
        <Input value={defaulValues?.link ? defaulValues?.link : ''} type='link' id='link' onChange={handlePost} />
      </div>
    </article>
  )
}
