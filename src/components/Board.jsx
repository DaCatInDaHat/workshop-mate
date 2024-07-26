import React, { useState, useEffect } from 'react'
import { Panel } from './Panel'
import { Task } from './Task'
import Masonry from '@mui/lab/Masonry'
import { Box } from '@mui/system'

export const Board = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/tasks')
      .then(response => response.json())
      .then(data => {
        setTasks(data)
      })
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/tasks/' + id, {
      method: 'DELETE'
    })
    const newTasks = tasks.filter(task => task.id != id)
    setTasks(newTasks)
  }

  return (
    <Box>
      <Panel />
      <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={{ xs: 1, sm: 2, md: 3 }}>
        {tasks.map(task => (
          <React.Fragment key={task.id}>
            <Task task={task} handleDelete={handleDelete} />
          </React.Fragment>
        ))}
      </Masonry>
    </Box>
  )
}