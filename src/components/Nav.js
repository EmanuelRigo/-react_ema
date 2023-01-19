import { Link } from "react-router-dom";

const Nav = (props) => {
  const { isHeader, textLinkFooter, hrefLinkFooter } = props;

  if (isHeader) {
    return (
      <nav className="nav">
        <div>
          <Link clasName="links" to="accion">
            Accion
          </Link>
          <Link clasName="links" to="aventura">
            Aventura
          </Link>
          <Link clasName="links" to="terror">
            Terror
          </Link>
        </div>
        <span className="material-icons">shopping_cart</span>
      </nav>
    );
  } else {
    return (
      <nav>
        <a href={hrefLinkFooter}>{textLinkFooter}</a>
      </nav>
    );
  }
};

export default Nav;
