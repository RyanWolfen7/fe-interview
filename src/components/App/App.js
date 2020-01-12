import React from 'react'
import NavBar from '../NavBar/navBar';
import { Wrapper } from '../../styles/styledComponents'


const App = ({ children }) => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <h1> Hello </h1> 
      </Wrapper>
    </>
  )
  
}

export default App;
