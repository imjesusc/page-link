import { useStore } from '../store'
import { useEffect } from 'react'
import { decodeData, encodeData } from '../utils'

export const useControl = () => {
  const { profile, setProfile, setPosts, posts } = useStore()

  const updateUrl = (profile, posts) => {
    const encodedDataProfile = encodeData(JSON.stringify(profile))
    const encodedDataPosts = encodeData(JSON.stringify(posts))

    const encodedData = `${encodedDataProfile}posts${encodedDataPosts}`

    window.history.replaceState(null, '', `/${encodedData}`)
  }

  const getDecodedData = () => {
    // Extract pathname from window location
    const { pathname } = window.location
    if (pathname === '/') return
    const [profileData, postData] = pathname.split('posts')

    const decodedProfileData = JSON.parse(decodeData(profileData.slice(1)))
    const decodedPostData = JSON.parse(decodeData(postData))

    setProfile(decodedProfileData)
    setPosts(decodedPostData)
  }

  useEffect(() => {
    getDecodedData()
  }, [window.location.pathname])

  const handleProfileChange = (event) => {
    const { id, value } = event.target

    setProfile({
      ...profile,
      [id]: value
    })

    updateUrl({ ...profile, [id]: value }, posts)
  }

  const handleResetInput = (id) => {
    handleProfileChange({ target: { id, value: '' } })
  }

  const addNewPostField = () => {
    const updatedPosts = [...posts]
    updatedPosts.push({})
    setPosts(updatedPosts)
  }

  const handlePostChange = (event, index) => {
    const { id, value } = event.target

    const updatedPosts = [...posts]

    if (updatedPosts?.[index]?.[id]) {
      updatedPosts[index][id] = value
    } else {
      updatedPosts[index] = { ...updatedPosts[index], [id]: value }
    }

    setPosts(updatedPosts)
    updateUrl(profile, updatedPosts)
  }

  const removePostField = (index) => {
    const updatedPosts = [...posts]
    updatedPosts.splice(index, 1)
    setPosts(updatedPosts)
    updateUrl(profile, updatedPosts)
  }

  return {
    profile,
    posts,
    handleProfileChange,
    addNewPostField,
    handlePostChange,
    removePostField,
    handleResetInput
  }
}
