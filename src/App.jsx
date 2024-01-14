import { ProfileForm, Preview, SocialLinks } from './components/organisms'

function App () {
  return (
    <div className='grid grid-cols-2 w-screen h-screen'>
      <main className='w-full h-full bg-slate-800 p-10 flex flex-col gap-4'>
        <ProfileForm />
        <SocialLinks />
      </main>
      <section className='grid place-items-center'>
        <Preview />
      </section>
    </div>
  )
}

export default App
