import './App.css'
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToArray, removeFromArray } from './redux/arraySlice';
import { useState } from 'react'
function App() {
  
  const [mass_local, setLocal] = useState([])
  let mass_local_storage: [] =  JSON.parse(localStorage.getItem('massive_treker'));
    if(mass_local_storage != null && mass_local_storage != undefined){
      console.log('1111111  ', mass_local_storage);
    }else{
      mass_local_storage = [];
      console.log('22222222  ', mass_local_storage)
      localStorage.setItem('massive_treker', JSON.stringify(mass_local_storage))

    }
  //  const u = setInterval(function u() {
  //     mass_local_storage.map((el) =>{
  //       if(el.goal === 0){
  //         delete_habit(el);
  //       }
  //       el.goal = el.goal-1;
  //     })
  //     localStorage.removeItem('massive_treker')
  //     localStorage.setItem('massive_treker', JSON.stringify(mass_local_storage))
  //     setLocal(mass_local_storage)
  //     console.log(0)
      
  //   }, 3000);
  // const array = useSelector((state) => state.array);
  // console.log(array)
  // const dispatch = useDispatch();

  // const handleRemove = (index:number) => {
  //   dispatch(removeFromArray(index));
  // };
  const delete_habit = (element:any) => {
    let mass_local_storage:[] =  JSON.parse(localStorage.getItem('massive_treker'));
      mass_local_storage = mass_local_storage.filter((el:any) => {return el.id != element.id })
      setLocal(mass_local_storage)
      localStorage.removeItem('massive_treker')
      localStorage.setItem('massive_treker', JSON.stringify(mass_local_storage))
      console.log(mass_local_storage)
   }
  const minus = (goal:string, id:number, element:any) =>{
    // let mass_local_storage=  JSON.parse(localStorage.getItem('massive_treker'));
      let num= parseInt(goal, 10);
      console.log(num)
      num = num -1;
      if(num == 0){
        mass_local_storage = mass_local_storage.filter((el:any) => {return el.id != id })
        setLocal(mass_local_storage)
        localStorage.removeItem('massive_treker')
      localStorage.setItem('massive_treker', JSON.stringify(mass_local_storage))
      }else{
        console.log(8)
      element.goal = `${num}`
      setLocal(mass_local_storage)
      console.log(mass_local)
      localStorage.removeItem('massive_treker')
      localStorage.setItem('massive_treker', JSON.stringify(mass_local_storage))
      console.log(element)
      }

      
  }       
  return (
    <>
      <header>
        <div className='header_left_part'>
  <div className='acount'>
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"/>
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
     </svg></div>
    <div className='name_web_project'>HabitTreker</div>
    </div>
    <Link to='/add_new_habit'><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="white" className="bi bi-patch-plus" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
</svg></Link>

      </header>
      <main>
        {
          mass_local_storage.map((element) => {
            if(element.goal != " ")
              return(
              
            <div className='block_inf'>
              <div>
              <p>Привычка: {element.taskinput_name}</p>
              <p>Описание: {element.taskinput_description}</p></div>
              <div className='right'>
                <div>
                  Осталось: {element.goal} дней
                  <button onClick={() => minus(element.goal, element.id, element)}><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" class="bi bi-patch-minus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
  <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
</svg></button>
                  
                </div>
              <button onClick={()=>delete_habit(element)}><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></button>
</div> </div>)})}</main>
    </>
  )
}

export default App
