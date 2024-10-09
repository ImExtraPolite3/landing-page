function NavBarButtons({ name }) {
  return (
    <>
      <button>header link {name}</button>
    </>
  );
}

function showHeaderButtons() {
  const navButtons = document.getElementById('nav-bar-right');

  if (navButtons.checkVisibility() == false) {
    navButtons.style.display = 'block';
  } else {
    navButtons.style.display = 'none';
  }
}

function NavBar() {
  return (
    <header id="nav-bar" className="size">
      <div id="nav-bar-left">
        <h1>Header Logo</h1>
      </div>
      <div id="menu">
        <img src="menu.svg" alt="" onClick={showHeaderButtons} />
      </div>
      <div id="nav-bar-right">
        <NavBarButtons key={1} name="one" />
        <NavBarButtons key={2} name="two" />
        <NavBarButtons key={3} name="three" />
      </div>
    </header>
  );
}

export { NavBar };
