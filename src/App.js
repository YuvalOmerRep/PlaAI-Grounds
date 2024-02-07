import './App.css';
import Board from './Components/Board';
import { ItemTypes } from './utilities/ItemTypes';

function App() {

  const generateBoardPositions = (pos) => {
    let arr = [].fill({type: null, name: null});
    arr[pos] = {type: ItemTypes.PLAYER, name: ItemTypes.PLAYER};
    arr[5] = {type: ItemTypes.WALL, name: ItemTypes.WALL};;
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
