import React from 'react'

export default function TaskCard(props) {
  return (
    <li >
        <span>{props.task.id}  -  {props.task.name} </span>
        <button onClick={() => props.handleDelete(props.task.id)}>delete</ button>
    </li>
  )
}
