import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddNewHabit from './page/add_new_habit/add_new.component.tsx'
import { Provider } from 'react-redux'
// import store from './store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<App/>}/>
      <Route path='/add_new_habit' element ={<AddNewHabit/>} />
    </Routes>
    </BrowserRouter>
    {/* </Provider> */}
  </StrictMode>,
)
