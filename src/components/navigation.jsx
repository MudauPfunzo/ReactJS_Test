export const Navigation = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-expand-sm navbar-toggleable-sm navbar-default navbar-fixed-top"
    >
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img
              src={props.data ? props.data.logo : ""}
              alt="MTN logo"
              className="team-img"
            />
          </a>{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="#Store" className="nav-link">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a href="#ProductService" className="nav-link">
                Products & Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#HelpSupport" className="nav-link">
                Help & Support
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="nav-item">
              <a href="#Personal" className="nav-link">
                <span className="marker">•</span>
                Personal
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
