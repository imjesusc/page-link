import { PostsField } from '../molecules'
import { Title } from '../atoms'
import { useControl } from '../../hooks'

export const Posts = () => {
  const { posts, handlePostChange, addNewPostField, removePostField } = useControl()
  return (
    <section className='grid grid-cols-4 gap-3'>
      <Title type='h2'>Posts</Title>

      <div className='grid col-span-3 gap-4'>
        {posts.map((post, index) => (
          <div className='flex gap-2 flex-col border rounded-lg p-4' key={index}>
            <PostsField handlePost={(event) => handlePostChange(event, index)} defaulValues={post} />
            <button onClick={() => removePostField(index)} className='border px-2 text-black bg-gray-100 py-1 rounded-lg'>Remove</button>
          </div>
        ))}

        <button onClick={addNewPostField} className='px-2 bg-blue-500 py-1 rounded-lg'>Add</button>
      </div>
    </section>
  )
}
