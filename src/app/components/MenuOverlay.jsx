import react from "react";
import NavLink from "./NavLink";
const MenuOverlay = ({links}) => {
    return (
        <ul className="flex flex-col py-4 items-center ">
            {
                links.map((link, index) => (
                    <li key={index} className="mb-2">
                   <NavLink href={link.href} title={link.title} />
                   </li>
                ))
            }
        </ul>
    )
};
export default MenuOverlay;