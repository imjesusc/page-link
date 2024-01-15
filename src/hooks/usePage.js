import { useEffect } from 'react'
import { useStore } from '../store'
import { decode, encode } from 'js-base64'

const usePage = () => {
  const { profile, setProfile, posts, setPosts } = useStore()

  const encodeData = (value) => encode(value)
  const decodeData = (value) => (value ? decode(value) : '')

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
    // const newPosts = posts.map((post) => {
    //   const keys = Object.keys(post)
    //   return keys.filter((key) => key).map((key) => encodeData(post[key])).join('|')
    // })

    const combinedPosts = encodeData(JSON.stringify(posts || []))
    // Update the URL with the new encoded data
    window.history.replaceState(null, '', `/${newEncodedData}posts${combinedPosts}`)
  }

  const initData = () => {
    // Extract pathname from window location
    const { pathname } = window.location
    if (pathname === '/') return
    const [profileData, postData] = pathname.split('posts')

    const decodedProfileData = profileData.slice(1).split('%7C')
    const decodedPostData = JSON.parse(decodeData(postData || '[]'))

    const keys = Object.keys(profile)
    const decodedData = {}

    // Split the pathname by '%7C' to extract the data
    if (keys.length !== decodedProfileData.length) {
      return console.log('Error: Inconsistency in keys and data length.')
    }

    keys.forEach((key, index) => {
      decodedData[key] = decodeData(decodedProfileData[index])
    })
    // Decode the extracted values and set them in the profile object
    setProfile(decodedData)
    setPosts(decodedPostData)
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
    posts,
    handleChange
  }
}

export default usePage
