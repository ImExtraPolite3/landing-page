function NavBarButtons({ name }) {
  return (
    <>
      <button>header link {name}</button>
    </>
  );
}

function NavBar() {
  return (
    <header id="nav-bar">
      <div id="nav-bar-left">
        <h2>Header Logo</h2>
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
