import react from "react";
import NavLink from "../NavLink";
import { motion } from "framer-motion";
const MenuOverlay = ({ links, Setnave }) => {
  return (
    <motion.ul
      initial={{ height: 0 }}
      animate={{ height: 300 }}
      className="flex flex-col py-4 space-y-4 items-start p-10 bg-dark "
    >
      {links.map((link, index) => (
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={index}
          className="mb-1  w-full"
          onClick={() => Setnave(false)}
        >
          <NavLink href={link.href} title={link.title} />
        </motion.li>
      ))}
    </motion.ul>
  );
};
export default MenuOverlay;
