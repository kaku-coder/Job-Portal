import React, { createContext, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
export const userContext = createContext();


const TheamButton = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false)
    const toggleTheme = () => {
        setDarkMode(!darkMode)
        document.body.classList.toggle('dark-mode')
    }

    const values = { darkMode, toggleTheme }

    return (
        <userContext.Provider value={values}>
            {children}
        </userContext.Provider>
    )
}

export default TheamButton