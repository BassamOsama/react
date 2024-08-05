import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav
      className={`${styles.nav} text-white fixed top-0 left-0 right-0 p-4 z-50`}
    >
      <ul className="flex justify-around">
        <li className={` ${styles.li}  mr-96`}>
          <Link
            className="text-white hover:text-white text-3xl font-bold w-max flex"
            to={""}
          >
            START FRAMEWORK
          </Link>
        </li>
        <li className={` ${styles.li} `}>
          <NavLink
            className="text-white hover:text-white text-lg rounded-md p-2"
            to={"about"}
          >
            ABOUT
          </NavLink>
        </li>
        <li className={` ${styles.li} `}>
          <NavLink
            className="text-white hover:text-white text-lg rounded-md p-2"
            to={"portfolio"}
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li className={` ${styles.li}  mr-16`}>
          <NavLink
            className="text-white hover:text-white text-lg rounded-md p-2"
            to={"contact"}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
