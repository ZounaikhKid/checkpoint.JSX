
import './App.css';

import photo from './house.jpg';
import video from './video.mp4';


function App() {
  return (
    <div className="App">
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">zounaikha's houses</h1>
    <br />
    <img  src={photo} alt="" />
    <br />
    <img src='/home.jpg' alt="home"/>
  </div>
  <video width={320} height={240} controls>
    <source src={video} type="video/mp4" />
  </video>
    </div>
  );
}

export default App;