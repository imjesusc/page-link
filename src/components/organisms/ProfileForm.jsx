import { Input, Label, Textarea } from '../atoms'
import { Title } from '../atoms/Title'
import { useControl } from '../../hooks/useControl'

export const ProfileForm = () => {
  const { profile, handleProfileChange } = useControl()

  return (
    <div className='grid tablet:grid-cols-4 gap-3'>
      <Title type='h2'>Profile</Title>
      <div className='grid col-span-3 gap-4'>
        <div>
          <Label htmlFor='name' text='Name' />
          <Input value={profile?.name} id='name' onChange={handleProfileChange} />
        </div>

        <div>
          <Label htmlFor='description' text='Description' />
          <Textarea
            value={profile?.description}
            className='resize-none'
            id='description' maxLength={300} name='description' onChange={handleProfileChange}
          />
        </div>

        <div>
          <Label htmlFor='avatar' text='Avatar url' />
          <Input value={profile?.avatar} type='link' id='avatar' onChange={handleProfileChange} />
        </div>
      </div>
    </div>
  )
}
