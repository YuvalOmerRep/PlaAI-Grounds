import './App.css';
import Board from './Components/Board';
import { ItemTypes } from './utilities/ItemTypes';

function App() {

  const generateBoardPositions = (pos) => {
    let arr = [];
    arr[pos] = ItemTypes.PLAYER;
    return arr;
  };

  return (
    <div className="App">
      TrAIning Grounds
      <Board size={8} ObjectsInBoard={generateBoardPositions(0)}/>
    </div>
  );
};

export default App;
