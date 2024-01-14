import usePage from '../../hooks/usePage'

export const Preview = () => {
  const { profile } = usePage()

  return (
    <div className='h-[729px] w-[340px] rounded-[50px] px-4 py-6 ring-8 ring-slate-800 overflow-hidden'>
      <article className='grid gap-3'>
        <figure className='h-20 w-20 rounded-full overflow-hidden ring ring-gray-400 mx-auto'>
          <img src={profile.avatar} className='w-full h-full border-0 object-cover rounded-full' />
        </figure>

        <h1 className='text-xl  font-semibold text-center'>{profile.name}</h1>
        <p className='text-balance text-center text-gray-400'>{profile.description.length > 99 ? profile.description.slice(0, 99) + '' : profile.description}</p>
      </article>
    </div>
  )
}
