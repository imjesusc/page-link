import React from 'react'
import { Input, Label, Textarea } from '../atoms'

export const PostsField = ({ handlePost }) => {
  return (
    <article className='grid col-span-3 gap-2'>
      <div>
        <Label htmlFor='img-post' text='Image url' />
        <Input type='link' id='img-post' onChange={handlePost} />
      </div>
      <div>
        <Label htmlFor='post' text='Post' />
        <Textarea type='text' maxLength={150} id='post' onChange={handlePost} />
      </div>
      <div>
        <Label htmlFor='link' text='Link' />
        <Input type='link' id='link' onChange={handlePost} />
      </div>
    </article>
  )
}
