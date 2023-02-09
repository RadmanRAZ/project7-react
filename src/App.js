import React from 'react';
import Content from './component/Content';
import ScrollBar from './component/ScrollBar';
import './index'

function App() {

 
  return(
    <div>
       <header>
          <div className='conatiner'>
            <div className='nav'>
            <h1>LOGo</h1>
            <ul>
              <li>home</li>
              <li>home1</li>
              <li>home2</li>
              <li>home3</li>
            </ul>
            </div>
          </div>
       </header>
       <ScrollBar/>
       <Content/>
    </div>
  )
}

export default App;
