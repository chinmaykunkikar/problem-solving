import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

export default function Modal({ handleClose, text }: any) {
  const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 35,
        stiffness: 500,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="modal orange-gradient"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
}
