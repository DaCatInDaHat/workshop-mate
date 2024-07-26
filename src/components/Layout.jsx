import React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { ListItemButton } from '@mui/material'

const drawerWidth = 240

const menuItems = [
    {
        text: 'Board',
        path: '/'
    },
    {
        text: 'Contacts',
        path: '/contacts'
    },
    {
        text: 'Storage',
        path: '/storage'
    }
]

export const Layout = ({ children }) => {
    return (
        <Box display='flex'>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {document.title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant='permanent'
                anchor='left'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    }
                }}>
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {menuItems.map(item => (
                            <ListItem key={item.text}>
                                <ListItemButton component="a" href={item.path}>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}