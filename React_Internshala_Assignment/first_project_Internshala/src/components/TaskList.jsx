import React, {useState} from 'react'
import TaskCard from './TaskCard';
import BoxCard from './BoxCard';
import './TaskList.css'

export default function TaskList({tasks, setTasks}) {


    
        const [show, setShow] = useState(true);
    
        function handleDelete(id){
            setTasks(tasks.filter(task => id !== task.id))
        }
    

  return (
        <>
            <div className="taskBox">
                <h1>Task List</h1> 
                <ul>
                    <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
                    {show && tasks.map((task) => (
                        <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
                    ))}
                </ul>
            </div>

            <BoxCard result="success">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet </p>
            </BoxCard>

            <BoxCard result="warning">
                <p className="title">Lorem ipsum dolor sit amet.</p>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum iste deleniti adipisci cupiditate esse maiores odit unde aspernatur omnis sequi. Similique rerum pariatur veniam animi, fugit quae facilis possimus, corrupti amet quisquam ipsa sint magni, voluptatibus nulla? Suscipit quae, doloribus dolorem iusto nesciunt inventore impedit reiciendis dignissimos excepturi beatae vitae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, animi.</p>
            </BoxCard>
            
        </>
  )
}
