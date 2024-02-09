import { Route, Routes } from 'react-router-dom'
import { Home, PageLink } from './pages'
import { Toaster } from 'react-hot-toast'
function App() {
	return (
		<div>
			<Routes>
				<Route path="/*" element={<Home />} />
				<Route path="/page-link/*" element={<PageLink />} />
			</Routes>
			<Toaster />
		</div>
	)
}

export default App
