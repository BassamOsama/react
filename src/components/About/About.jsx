import styles from "./About.module.css";
export default function About() {
  return (
    <div className={`${styles.about} flex justify-center items-center p-44`}>
      <div>
        <div className="text-center pt-5">
          <h2 className="mb-5 font-bold text-4xl">ABOUT COMPONENT</h2>
          <div className="flex items-center justify-center mb-5">
            <div className={`${styles.line} me-5 bg-white `}></div>
            <i className="fas fa-star"></i>
            <div className={`${styles.line} ms-5 bg-white `}></div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="w-1/2 mr-12">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="w-1/2">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
