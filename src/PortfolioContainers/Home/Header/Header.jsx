function Header() {
  return (
    <div
      className="header-container"
      //   onClick={() => setShowHeaderOptions(!showHeaderOptions)}
    >
      <div className="header-parent">
        <div
          className="header-hamburger"
          //   onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          {/* <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} /> */}
        </div>
        <div className="header-logo">
          <span>EDUBABA</span>
        </div>
        <div
        //   className={
        //     showHeaderOptions
        //       ? "header-options show-hamburger-options"
        //       : "header-options"
        //   }
        >
          {/* {getHeaderOptions()} */}
        </div>
      </div>
    </div>
  );
}

export default Header;
