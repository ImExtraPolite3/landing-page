import Footer from './components/Footer';
import { NavBar } from './components/NavBar';
import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <>
      <div className="dark-blue">
        <NavBar />
        <SectionOne />
      </div>
      <SectionTwo />
      <div className="light-gray">
        <SectionThree />
      </div>
      <SectionFour />
      <div className="dark-blue">
        <Footer />
      </div>
    </>
  );
}

export default App;
