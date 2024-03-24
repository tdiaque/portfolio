import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PortfolioCard from './components/PortfolioCard'
import AboutMe from './components/AboutMe'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center', // Align items vertically
          flexDirection: 'row', // Display items in a row
        }}
      >
      <PortfolioCard />
      <AboutMe />
      </Box>
    </>
  )
}

export default App
