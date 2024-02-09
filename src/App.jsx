import { Route, Routes } from 'react-router-dom'
import { Home, PageLink } from './pages'
function App() {
	return (
		<div>
			<Routes>
				<Route path="/*" element={<Home />} />
				<Route path="/page-link/*" element={<PageLink />} />
			</Routes>
		</div>
	)
}

export default App
