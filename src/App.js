import './App.css';
import { Schedule } from './Schedule';
import title from './title.jpg';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <img src={title} alt="title" width="250px"className='title'/>
      </div>
      <div className='container'>
        <h1>Daily schedule</h1>
      </div>
      <Schedule />
    </div>
    
  );
}

export default App;
