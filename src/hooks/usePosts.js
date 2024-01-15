import { useStore } from '../store'

export const usePosts = () => {
  const { posts, setPosts } = useStore()
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
  }

  const removePostField = (index) => {
    const updatedPosts = [...posts]
    updatedPosts.splice(index, 1)
    setPosts(updatedPosts)
  }

  return {
    posts,
    addNewPostField,
    handlePostChange,
    removePostField
  }
}
