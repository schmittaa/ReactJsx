import './style.css';
import React from 'react';
import { Player } from 'video-react';
import FirstImage from './imageInSrc.jpeg';
import myVideo from './myVideo.mp4'



function App() {
  return (
    <div className="App">
                  <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

          <h1 className='title red'>Khaoula</h1>

          <br/>

          <img src={FirstImage} alt="neko"/>

          <img src="./imageInPublic.jpeg" />

                  </div>

          <video width="320" height="240" controls>

          <source src={myVideo} type="video/mp4" alt="video"/>

          </video>
      
    </div>
  );
}

export default App;
