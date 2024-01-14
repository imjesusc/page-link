import { useEffect } from 'react'
import { useStore } from '../store'
import { decode, encode } from 'js-base64'

const usePage = () => {
  const { profile, setProfile } = useStore()

  const encodeData = (value) => encode(value)
  const decodeData = (value) => (value ? decode(value) : '')

  // const metaData = [
  //   {
  //     id: 'name',
  //     label: 'Name'
  //   },
  //   {
  //     id: 'description',
  //     label: 'Description'
  //   },
  //   {
  //     id: 'avatar',
  //     label: 'Avatar'
  //   },
  //   {
  //     id: 'facebook',
  //     label: 'Facebook'
  //   },
  //   {
  //     id: 'twitter',
  //     label: 'Twitter'
  //   },
  //   {
  //     id: 'instagram',
  //     label: 'Instagram'
  //   },
  //   {
  //     id: 'github',
  //     label: 'Github'
  //   },
  //   {
  //     id: 'linkedin',
  //     label: 'LinkedIn'
  //   },
  //   {
  //     id: 'whatsapp',
  //     label: 'Whatsapp'
  //   }
  // ]

  const generateEncodedData = (updatedData) => {
  // Get the keys of the updatedData object
    const keys = Object.keys(updatedData)

    // Filter out any falsy keys, map them to their encoded values, and join them with '|'
    const encodedData = keys
      .filter((key) => key)
      .map((key) => encodeData(updatedData[key]))
      .join('|')

    // Return the encoded string
    return encodedData
  }

  const updateEncodedData = (updatedData) => {
    const newEncodedData = generateEncodedData(updatedData)
    // Update the URL with the new encoded data
    window.history.replaceState(null, '', `/${newEncodedData}`)
  }

  const initData = () => {
    // Extract pathname from window location
    const { pathname } = window.location
    const keys = Object.keys(profile)
    const decodedData = {}

    // Split the pathname by '%7C' to extract the data
    const data = pathname.slice(1).split('%7C')

    if (keys.length !== data.length) {
      return console.log('Error: Inconsistency in keys and data length.')
    }

    keys.forEach((key, index) => {
      decodedData[key] = decodeData(data[index])
    })
    // Decode the extracted values and set them in the profile object
    setProfile(decodedData)
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
