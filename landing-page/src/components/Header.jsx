function headerLink() {
  const links = ['one', 'two', 'three'];

  const showLinks = links.map((each) => (
    <li key={each}>
      <a href="#">header link {each}</a>
    </li>
  ));

  return showLinks;
}

export default function Header() {
  return (
    <div id="header" className="wide">
      <div id="header-left">
        <h2>Header Logo</h2>
      </div>
      <div id="header-right">
        <ul>{headerLink()}</ul>
      </div>
    </div>
  );
}
