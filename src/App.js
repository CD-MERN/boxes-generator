import {useState}  from 'react'
import './App.css';
import Boxes from './components/Boxes';
import Input from './components/Input';
function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    const newBoxes = [...boxes];
    newBoxes.push(box);
    setBoxes(newBoxes);
  }

  return (
    <div className="App mt-5">
        <Input addBox={addBox}/>
        <Boxes boxes={boxes} />
    </div>
  );
}

export default App;
