import react from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
const MenuOverlay = ({links,Setnave}) => {
    return (
        <motion.ul initial={{height:0}} animate={{height:150}}  className="flex flex-col py-4 items-center ">
            {
                links.map((link, index) => (
                    <motion.li initial={{opacity:0}} animate={{opacity:1}} key={index} className="mb-2" onClick={()=>Setnave(false)}>
                   <NavLink href={link.href} title={link.title} />
                   </motion.li>
                ))
            }
        </motion.ul>
    )
};
export default MenuOverlay;