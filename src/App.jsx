import { NavBar } from './components/NavBar';
import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';

function App() {
  return (
    <>
      <div className="dark-blue">
        <NavBar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </>
  );
}

export default App;
