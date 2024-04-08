import { motion } from "framer-motion";
import logo from "../assets/s4dslogo_black.svg";
import Mapcomponent from "../components/mapComponent";
import Timer from "../components/gametimer";
import Sidebar from "../components/sidebar";
import "../styles/map.css";
const Map = () => {
  return (
    <>
      <div className="" style={{ background: "#273346" }}>
        <motion.div className="flex justify-between  w-full items-center h-28  map-nav top-0 fixed">
          <motion.img src={logo} className="md:ml-5" alt="Logo" />
          <div
            className="glitch text-3xl  hidden lg:flex  p-4 rounded-xl "
            data-text="ELISABÉTH"
            // style={{background:"#111828"}}
          >
            WELCOME RandomState42
          </div>

          <div className="text-white flex justify-center items-center">
            <Timer />
          </div>
          <div className="">
            <Sidebar />
          </div>
        </motion.div>
        <motion.div initial="hidden" animate="visible" className="mt-20">
          <Mapcomponent />
        </motion.div>
      </div>
    </>
  );
};

export default Map;
