import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Board } from './components/Board'
import { Contacts } from './components/Contacts'
import { Storage } from './components/Storage'
import { Layout } from './components/Layout'
import { Create } from './components/Create'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Layout>
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