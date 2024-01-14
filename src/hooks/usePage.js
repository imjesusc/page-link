import { useEffect } from 'react'
import { useStore } from '../store'
import { decode, encode } from 'js-base64'

const usePage = () => {
  const { profile, setProfile } = useStore()

  const encodeData = (value) => encode(value)
  const decodeData = (value) => (value ? decode(value) : '')

  const updateEncodedData = (updatedData) => {
    // Encode the updated data values
    const encodedName = encodeData(updatedData.name)
    const encodedDescription = encodeData(updatedData.description)
    const encodedAvatar = encodeData(updatedData.avatar)

    // Generate the new encoded data string
    const newEncodedData = `${encodedName}|${encodedDescription}|${encodedAvatar}`
    // Update the URL with the new encoded data
    window.history.replaceState(null, '', `/${newEncodedData}`)
  }

  const initData = () => {
    // Extract pathname from window location
    const { pathname } = window.location

    // Split the pathname by '%7C' to get name, description, and avatar
    const [name, description, avatar] = pathname.slice(1).split('%7C')

    // Decode the extracted values and set them in the profile object
    setProfile({
      name: decodeData(name),
      description: decodeData(description),
      avatar: decodeData(avatar)
    })
  }

  useEffect(() => {
    initData()
  }, [])

  const handleChange = (event) => {
    // Extract the id and value from the target element
    const { id, value } = event.target

    // Update the profile state with the new value
    setProfile({
      ...profile,
      [id]: value
    })

    // Update the encoded data with the new value
    updateEncodedData({
      ...profile,
      [id]: value
    })
  }

  return {
    profile,
    handleChange
  }
}

export default usePage
