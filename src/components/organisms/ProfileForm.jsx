import { usePage } from '../../hooks'
import { Input, Label, Textarea } from '../atoms'
import { Title } from '../atoms/Title'

export const ProfileForm = () => {
  const { profile, handleChange } = usePage()

  return (
    <div className='grid grid-cols-4 gap-3'>
      <Title type='h2'>Profile</Title>
      <div className='grid col-span-3 gap-4'>
        <div>
          <Label htmlFor='name' text='Name' />
          <Input value={profile.name} id='name' onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor='description' text='Description' />
          <Textarea
            className='resize-none'
            value={profile.description} id='description' maxLength={150} name='description' onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor='avatar' text='Avatar url' />
          <Input value={profile.avatar} type='link' id='avatar' onChange={handleChange} />
        </div>
      </div>
    </div>
  )
}
