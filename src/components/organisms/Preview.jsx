import { useStore } from '../../store/store'

export const Preview = () => {
  const { profile } = useStore()
  return (
    <div className='h-[729px] w-[340px] border-2 border-gray-300 rounded-[50px]'>
      {JSON.stringify(profile.name)}
    </div>
  )
}
