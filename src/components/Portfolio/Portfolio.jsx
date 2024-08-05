import styles from "./Portfolio.module.css";
import house from "../../assets/images/port1.png"
import cake from "../../assets/images/port2.png"
import circus from "../../assets/images/port3.png"

export default function Portfolio() {
  return (
    <div className={`${styles.Portfolio} bg-white`}>
      <div className="text-center pt-8 p-10">
        <h2 className="uppercase mb-5  font-bold text-4xl">
          portfolio component
        </h2>
        <div className="flex items-center justify-center">
          <div className={`${styles.line} me-5`}></div>
          <i className="fas fa-star"></i>
          <div className={`${styles.line} ms-5`}></div>
        </div>
      </div>
      <div className="mx-24">
        <div className="flex flex-wrap my-8">
          <div className="w-1/3 px-10">
            <div className="rounded-2xl relative overflow-hidden">
              <img className="w-full" src={house} alt="house" />
              <div
                className={`${styles.layer} hover:opacity-100 absolute start-0 top-0 h-full flex justify-center items-center w-full`}
              >
                <i className="fa-solid fa-plus text-8xl text-white "></i>
              </div>
            </div>
          </div>
          <div className="w-1/3 px-10">
            <div className="rounded-2xl relative overflow-hidden">
              <img className="w-full" src={cake} alt="house" />
              <div
                className={`${styles.layer} hover:opacity-100 absolute start-0 top-0 h-full flex justify-center items-center w-full`}
              >
                <i className="fa-solid fa-plus text-8xl text-white "></i>
              </div>
            </div>
          </div>
          <div className="w-1/3 px-10">
            <div className="rounded-2xl relative overflow-hidden">
              <img className="w-full" src={circus} alt="house" />
              <div
                className={`${styles.layer} hover:opacity-100 absolute start-0 top-0 h-full flex justify-center items-center w-full`}
              >
                <i className="fa-solid fa-plus text-8xl text-white "></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap pb-8">
          <div className="w-1/3 px-10">
            <div className="rounded-2xl relative overflow-hidden">
              <img className="w-full" src={house} alt="house" />
              <div
                className={`${styles.layer} hover:opacity-100 absolute start-0 top-0 h-full flex justify-center items-center w-full`}
              >
                <i className="fa-solid fa-plus text-8xl text-white "></i>
              </div>
            </div>
          </div>
          <div className="w-1/3 px-10">
            <div className="rounded-2xl relative overflow-hidden">
              <img className="w-full" src={cake} alt="house" />
              <div
                className={`${styles.layer} hover:opacity-100 absolute start-0 top-0 h-full flex justify-center items-center w-full`}
              >
                <i className="fa-solid fa-plus text-8xl text-white "></i>
              </div>
            </div>
          </div>
          <div className="w-1/3 px-10">
            <div className="rounded-2xl relative overflow-hidden">
              <img className="w-full" src={circus} alt="house" />
              <div
                className={`${styles.layer} hover:opacity-100 absolute start-0 top-0 h-full flex justify-center items-center w-full`}
              >
                <i className="fa-solid fa-plus text-8xl text-white "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
