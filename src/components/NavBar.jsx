function NavBarButtons({ name }) {
  return (
    <>
      <button>header link {name}</button>
    </>
  );
}

function showHeaderButtonsNarrow() {
  const navButtons = document.getElementById('nav-bar-right');

  if (navButtons.checkVisibility() == false) {
    navButtons.classList.add('show-nav-buttons');
    navButtons.classList.remove('hide-nav-buttons');
  } else {
    navButtons.classList.remove('show-nav-buttons');
    navButtons.classList.add('hide-nav-buttons');
  }
}

function NavBar() {
  return (
    <header id="nav-bar" className="size">
      <div id="nav-bar-left">
        <h1>Header Logo</h1>
      </div>
      <div id="menu">
        <img src="menu.svg" alt="" onClick={showHeaderButtonsNarrow} />
      </div>
      <div id="nav-bar-right" className="hide-nav-buttons">
        <NavBarButtons key={1} name="one" />
        <NavBarButtons key={2} name="two" />
        <NavBarButtons key={3} name="three" />
      </div>
    </header>
  );
}

export { NavBar };
