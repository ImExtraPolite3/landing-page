import Header from './components/Header';
import { MainOne, MainTwo } from './components/Main';

function App() {
  return (
    <div id="container">
      <div className="dark-blue">
        <Header />
        <MainOne />
      </div>
      <MainTwo />
    </div>
  );
}

export default App;
