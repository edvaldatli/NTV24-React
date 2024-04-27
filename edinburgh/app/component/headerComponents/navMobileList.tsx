import { motion } from "framer-motion";
import Link from "next/link";

type props = {
  onClick: () => void;
};

export default function NavigationMobileList({ onClick }: props) {
  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 50, velocity: 40 },
      },
    },
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        x: { stiffness: 40 },
      },
    },
  };

  return (
    <ul className="flex flex-col px-8 py-16 gap-6 font-bold text-lg uppercase">
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/" onClick={onClick}>
          Home
        </Link>
      </motion.li>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/whattodo" onClick={onClick}>
          What to do
        </Link>
      </motion.li>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/about" onClick={onClick}>
          About
        </Link>
      </motion.li>
    </ul>
  );
}
