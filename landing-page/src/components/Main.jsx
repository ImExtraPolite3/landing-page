import grayImg from '../assets';

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
        <img src={grayImg} alt="" />
      </div>
    </div>
  );
}

export { MainOne };
