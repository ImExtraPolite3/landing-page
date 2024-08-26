import Footer from './components/Footer';
import Header from './components/Header';
import { MainOne, MainTwo, MainThree, MainFour } from './components/Main';

function App() {
  return (
    <div id="container">
      <div className="dark-blue">
        <Header />
        <MainOne />
      </div>
      <MainTwo />
      <div className="light-gray">
        <MainThree />
      </div>
      <MainFour />
      <div className="dark-blue">
        <Footer />
      </div>
    </div>
  );
}

export default App;
