import { useEffect } from 'react'
import { useStore } from '../../store/store'
import { Input, Label, Textarea } from '../atoms'
import { encode, decode } from 'js-base64'
export const ProfileForm = () => {
  const { setProfile } = useStore()

  const init = () => {
    const { pathname } = window.location
    const [name, description, avatar] = pathname.slice(1).split('%7C')
    setProfile({
      name: decode(name || ''),
      description: decode(description || ''),
      avatar: decode(avatar || '')
    })
  }
  const handleChange = (event) => {
    const { id, value } = event.target
    setProfile({
      [id]: value
    })

    const updatedProfile = useStore.getState().profile

    const hashedCode = `${encode(updatedProfile.name)}|${encode(updatedProfile.description)}|${encode(updatedProfile.avatar)}`
    window.history.replaceState(null, '', `/${hashedCode}`)
  }

  useEffect(() => {
    init()
  }, [])

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
