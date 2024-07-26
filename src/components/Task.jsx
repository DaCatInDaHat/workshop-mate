import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { DeleteOutlined } from '@mui/icons-material'
import Typography from '@mui/material/Typography'

export const Task = ({ task, handleDelete }) => {
    return (
        <Card>
            {/* <CardActionArea> */}
            <CardHeader
                title={task.title}
                subheader={task.status}
                action={
                    <IconButton onClick={() => handleDelete(task.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary'>
                    {task.description}
                </Typography>
            </CardContent>
            {/* </CardActionArea> */}
        </Card>
    )
}