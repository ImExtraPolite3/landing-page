function Info({ text }) {
  return (
    <div>
      <div className="white-images"></div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

function CreateInfo() {
  const infoText = 'this is some subtext under an illustration or image';
  const infoArray = [];

  for (let i = 0; i < 4; i++) {
    infoArray.push(<Info key={i} text={infoText} />);
  }

  return infoArray;
}

export default function SectionTwo() {
  return (
    <section id="section-two">
      <h2>Some random information.</h2>
      <div>
        <CreateInfo />
      </div>
    </section>
  );
}
