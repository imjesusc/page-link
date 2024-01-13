import { ProfileForm, Preview } from './components/organisms'

function App () {
  return (
    <div className='grid grid-cols-2 w-screen h-screen'>
      <main className='w-full h-full bg-slate-800 p-10'>
        <ProfileForm />
      </main>
      <section className='grid place-items-center'>
        <Preview />
      </section>
    </div>
  )
}

export default App
