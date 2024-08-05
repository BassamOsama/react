import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className="text-white bottom-0 left-0 right-0 ">
      <div className="p-12">
        <div className="card-group flex ml-20">
          <div className="card flex w-1/3">
            <div className="card-body text-center">
              <h3 className="text-3xl font-semibold mb-2">LOCATION</h3>
              <p className="mb-2">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="card text-white flex w-1/3">
            <div className="card-body text-center">
              <h3 className="mb-4 text-3xl font-semibold">AROUND THE WEB</h3>
              <div className="icons">
                <a href="#" className="icon mx-1">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="icon mx-1">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="icon mx-1">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="icon mx-1">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="card flex w-1/3">
            <div className="card-body text-center">
              <h3 className="text-3xl font-semibold">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white footer-copy p-6">
        Copyright © Your Website 2021
      </div>
    </footer>
  );
}
