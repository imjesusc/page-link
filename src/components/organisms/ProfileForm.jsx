import { usePage } from '../../hooks'
import { Input, Label, Textarea } from '../atoms'

export const ProfileForm = () => {
  const { profile, handleChange } = usePage()

  return (
    <div>
      <div>Profile</div>
      <div>
        <Label htmlFor='name' text='Name' />
        <Input value={profile.name} id='name' onChange={handleChange} />
      </div>

      <div>
        <Label htmlFor='description' text='Description' />
        <Textarea value={profile.description} id='description' name='description' onChange={handleChange} />
      </div>

      <div>
        <Label htmlFor='avatar' text='Avatar url' />
        <Input value={profile.avatar} type='link' id='avatar' onChange={handleChange} />
      </div>
    </div>
  )
}
