import React from 'react'
import { Button } from '@mui/material'

export const Panel = () => {
    return (
        <Button
            variant='outlined'
            sx={{ m: 1 }}
            href='./create'
        >
            Create
        </Button>
    )
}