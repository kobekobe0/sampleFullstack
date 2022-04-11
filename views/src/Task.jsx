import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Task({ id, description }) {
    const [task, setTask] = useState(description)
    const [edit, setEdit] = useState(false)
    const [editedDescription, setEditedDescription] = useState('')
    const handleUpdate = (e) => {
        setEditedDescription(description)
        setEdit(!edit)
    }
    useState(() => {
        setTask(description)
    }, [description])

    const handleSave = () => {
        axios.put(`http://localhost:3000/api/${id}`, {
            newDesc: editedDescription,
        })
        setEdit(!edit)
        setTask(editedDescription)
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/api/${id}`)
    }

    return (
        <div
            key={id}
            style={{
                border: '2px solid black',
                paddingBottom: '2em',
                marginBottom: '1em',
                marginTop: '1em',
                width: '50%',
            }}
        >
            {edit ? (
                <input
                    onChange={(e) => setEditedDescription(e.target.value)}
                    defaultValue={description}
                />
            ) : (
                <h2>{description}</h2>
            )}

            <button type="delete" onClick={handleDelete}>
                delete
            </button>
            {edit ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleUpdate}>Edit</button>
            )}
        </div>
    )
}

export default Task
