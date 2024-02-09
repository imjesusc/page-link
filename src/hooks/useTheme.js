import { useEffect, useState } from 'react'

export const useTheme = () => {
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	})

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}

	return { theme, toggleTheme }
}
