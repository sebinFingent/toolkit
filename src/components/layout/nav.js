import { Link } from "react-router-dom";

const Nav = (props) => {
  const { setExpand } = props;
  return (
    <nav onClick={setExpand}>
      <section className="menu">
        <ul>
          <li>
            <Link to="drag">
              <span>Drag</span>
            </Link>
          </li>
          <li>
            <Link to="slider">Slider</Link>
          </li>
          <li>
            <Link to="canban">Canban</Link>
          </li>
          <li>Three</li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;
