import styles from "./Home.module.css";
import avatar from "../../assets/images/avatar.svg";
export default function Home() {
  return (
    <div
      className={`${styles.home} text-white flex flex-col flex-wrap content-center items-center py-16`}
    >
      <img className="w-64 mb-3" src={avatar} alt="avatar" />
      <div className="text-white pt-4 w-fit">
        <h2 className="mb-5 text-4xl font-bold">START FRAMEWORK</h2>
        <div className="flex items-center justify-center mb-5">
          <div className={`${styles.line} me-5 bg-white `}></div>
          <i className="fas fa-star"></i>
          <div className={`${styles.line} ms-5 bg-white `}></div>
        </div>
        <div>Graphic Artist - Web Designer - Illustrator</div>
      </div>
    </div>
  );
}
