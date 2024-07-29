import { Container } from '@mui/system'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Create = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('active')
    const navigateTo = useNavigate()

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     fetch('http://localhost:8000/tasks', {
    //         method: 'POST',
    //         headers: { "Content-type": "application/json" },
    //         body: JSON.stringify({ title, description, status })
    //     }).then(() => { navigateTo('/') })
    // }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('https://api.jsonbin.io/v3/b/66a6da24acd3cb34a86ca4a7', {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
                'X-Master-Key': '$2a$10$i9jlMLgjC79zhdPTS9ayh.lm/oB0QY.FR8KLYMxcqBv8sey8QRE9i'
            },
            body: JSON.stringify({ tasks: { title, description, status } })
        }).then(() => { navigateTo('/') })
    }

    return (
        <Container size='sm'>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Task
            </Typography>
            <Box
                component='form'
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                display='flex'
                flexDirection='column'
                gap='5px'
                width='50%'
            >
                <TextField
                    required
                    label="Title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="Descrition"
                    multiline
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <FormControlLabel control={<Checkbox
                    onChange={() => status === 'active' ? setStatus('done') : setStatus('active')} />}
                    label="Status (done if checked)" />
                <Button
                    type="submit"
                    variant='outlined'
                >
                    Create
                </Button>
            </Box>
        </Container>
    )
}