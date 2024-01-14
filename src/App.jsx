import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PageLink } from './pages/Page-link'
function App () {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/page-link/*' element={<PageLink />} />
      </Routes>
    </div>

  )
}

export default App
