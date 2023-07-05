import React, { useContext } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Game from './Pages/Game/Game'
import Details from './Pages/Details/Details'
import Header from './components/Header/Header'
import { ModalContextProvider } from "./contexts/ModalContext";


const Router = () => {

  return (
    <div>
      <BrowserRouter>
      <ModalContextProvider>
        <Header/>
      <Switch>
        <Route path='/' exact><Home/></Route>
        <Route path='/details' ><Details/></Route>
        <Route path='/game-on'><Game/></Route>
        </Switch>
      </ModalContextProvider>
      </BrowserRouter>  
    </div>
  )

}

export default Router
