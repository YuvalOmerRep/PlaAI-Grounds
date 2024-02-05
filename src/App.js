import './App.css';
import Board from './Components/Board';

function App() {

  return (
    <div className="App">
      TrAIning Grounds
      <Board size={8} playerPosition={[0, 0]}/>
    </div>
  );
};

export default App;
