import grayImg from '../assets/gray-image.png';

function repeat() {
  return (
    <>
      <div></div>
      <p>This is some subtext under an illustration or image</p>
    </>
  );
}

function MainOne() {
  return (
    <div id="main-one" className="wide">
      <div id="main-one-left">
        <h1>This website is awesome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          non corrupti fugit harum praesentium possimus ab placeat cum a ipsam.
        </p>
        <button>Sign Up</button>
      </div>
      <div id="main-one-right">
        <img src={grayImg} alt="gray image" width="600px" />
      </div>
    </div>
  );
}

function MainTwo() {
  const allInfo = [repeat(), repeat(), repeat(), repeat()];

  const getInfo = allInfo.map((each) => <div key={each.key}>{each}</div>);

  return (
    <div id="main-two" className="narrow">
      <h2>Some Random Information</h2>
      <div id="main-two-info">{getInfo}</div>
    </div>
  );
}

function MainThree() {
  return (
    <div id="main-three" className="narrow">
      <p id="quote">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam
        iste suscipit accusantium aliquid quis sed, ducimus, porro doloremque
        voluptas odio quae vel, mollitia vitae? Itaque minima modi saepe fugiat.
      </p>
      <p id="author">- Lorem ipsum dolor sit</p>
    </div>
  );
}

function MainFour() {
  return (
    <div id="main-four" className="narrow">
      <div id="main-four-left">
        <p>Lorem, ipsum dolor! Lorem, ipsum!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          veritatis expedita totam tempora mollitia, voluptate deleniti?
        </p>
      </div>
      <div id="main-four-right">
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export { MainOne, MainTwo, MainThree, MainFour };
