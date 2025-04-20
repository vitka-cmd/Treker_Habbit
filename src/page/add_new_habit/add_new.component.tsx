// import React from 'react'
import './add_new.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { addToArray } from '../../redux/arraySlice';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const AddNewHabit = () => {

    const [taskinput_name, setTaskInput] = useState('');
    const [taskinput_description, setTaskInput_2] = useState('');
    const [goal, setTaskInput_goal] = useState('');
    // const array = useSelector((state) => state.array);
    // console.log(array)
    // const dispatch = useDispatch();
  
    // const handleAdd = () => {
    //   if (taskinput_name) {
    //     dispatch(addToArray({taskinput_name, taskinput_description}));
    //     console.log({taskinput_name, taskinput_description})
    //   }
    // };
    
     const AddNewHabit = () =>{
      let mass_local_storage =  JSON.parse(localStorage.getItem('massive_treker') || "");
      let id: number = Math.floor(Math.random() * 50)
        mass_local_storage.push({id ,taskinput_name, taskinput_description, goal})
        localStorage.removeItem('massive_treker')
        localStorage.setItem('massive_treker', JSON.stringify(mass_local_storage))
     }
  
    return(
    <>
    <div className='header'>
        <button><Link to={'/'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" className="bi bi-x-octagon" viewBox="0 0 16 16">
  <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg></Link></button>
        <p>Новая привычка</p>
    </div>
    <div className='main_block'>
        <div className='name'>
        <p>Имя</p>
        <input type='text' value={taskinput_name} onChange={(e) => setTaskInput(e.target.value)}></input>
        </div>
        <div className='description'>
        <p>Описание</p>
        <input type='text' value={taskinput_description} onChange={(e) => setTaskInput_2(e.target.value)}></input>
        </div>
        <div className='goal'>
        <p>Цель</p>
        <input type='text' value={goal} onChange={(e) => setTaskInput_goal(e.target.value)}></input>
        </div>
        
    </div>
    <div className='footer'>
        <button className='add' onClick={()=>AddNewHabit()}><Link to={'/'}>Сохранить</Link></button>
    </div>
    
    </>)
}
export default AddNewHabit
