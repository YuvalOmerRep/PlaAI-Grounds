import './App.css';
import Board from './Components/Board';
import { ItemTypes } from './utilities/ItemTypes';

function App() {

  const generateBoardPositions = (pos, size) => {
    let arr = Array(size ** 2).fill({type: ItemTypes.EMPTY, name: ItemTypes.EMPTY});
    arr[pos] = {type: ItemTypes.PLAYER, name: ItemTypes.PLAYER};
    arr[5] = {type: ItemTypes.WALL, name: ItemTypes.WALL};;
    return arr;
  };

  return (
    <div className="App">
      TrAIning Grounds
      <Board size={8} ObjectsInBoard={generateBoardPositions(0, 8)}/>
    </div>
  );
};

export default App;
