import { useStore } from '../../store/store'
import { Input, Label, Textarea } from '../atoms'
export const ProfileForm = () => {
  const { setProfile } = useStore()
  const handleChange = (event) => {
    const { id, value } = event.target
    setProfile({
      [id]: value
    })
  }

  return (
    <div>
      <div>Profile</div>
      <div>
        <Label htmlFor='name' text='Name' />
        <Input id='name' onChange={handleChange} />
      </div>

      <div>
        <Label htmlFor='description' text='Description' />
        <Textarea id='description' name='description' onChange={handleChange} />
      </div>

      <div>
        <Label htmlFor='avatar' text='Avatar url' />
        <Input type='link' id='avatar' onChange={handleChange} />
      </div>
    </div>
  )
}
