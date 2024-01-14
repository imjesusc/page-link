import React from 'react'
import { Input, Label, Textarea } from '../atoms'

export const PostsField = () => {
  return (
    <article className='grid col-span-3 gap-2'>
      <div>
        <Label htmlFor='img-post' text='Image url' />
        <Input type='link' id='img-post' />
      </div>
      <div>
        <Label htmlFor='post' text='Post' />
        <Textarea type='text' maxLength={150} id='post' />
      </div>
      <div>
        <Label htmlFor='link' text='Link' />
        <Input type='link' id='link' />
      </div>
    </article>
  )
}
