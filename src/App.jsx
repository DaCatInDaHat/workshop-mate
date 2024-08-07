import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Board } from './components/Board'
import { Contacts } from './components/Contacts'
import { Storage } from './components/Storage'
import { Layout } from './components/Layout'
import { Create } from './components/Create'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const App = () => {
  const [mode, setMode] = useState('dark')

  const appTheme = createTheme({
    palette: {
      mode: mode === 'light' ? 'dark' : 'light'
    }
  })

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Router>
          <Layout mode={mode} setMode={setMode}>
            <Routes>
              <Route exact path='/' element={<Board />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/storage' element={<Storage />} />
              <Route path='/create' element={<Create />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider >
    </>
  )
}