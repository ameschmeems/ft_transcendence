import React from 'react'
import {useState, useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import Home from './pages/Home'
import Menu from './components/Menu'
import Login from './pages/Login'
import Error404 from './pages/Error404'
import Account from './pages/Account'

const App: React.FC = () => {
	const [darkMode, setDarkMode] = useState(false)

	const theme = createTheme ({
		palette: {
			mode: darkMode ? "dark" : "light"
		}
	})

	useEffect(() => {
		const themeType = localStorage.getItem("dark") || "dark"
		if (themeType === "dark") {
			setDarkMode(true)
		}
	}, [])

	const handleToggle = () => {
		localStorage.setItem("dark", darkMode ? "light" : "dark")
		setDarkMode(!darkMode)
	}

	return (
		<ThemeProvider theme={theme}>
		<CssBaseline />
		<Menu handleToggle={handleToggle} />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/account" element={<Account />} />
			<Route path="*" element={<Error404 />} />
		</Routes>
		</ThemeProvider>
	)
}

export default App;
