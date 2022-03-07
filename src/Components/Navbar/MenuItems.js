import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import Dropdown from "./Dropdown";

export const ListMenu = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/About",
    },
    {
        title: "Training",
        submenu: [
            {
                title: "Design Sprints",
                url: "#",
            },
        ],
    },
    {
        title: "E-Learning",
        submenu: [
            {
                title: "Course",
                url: "#",
            },
        ],
    },
    {
        title: "Contact",
        url: "#",
    },
    {
        title: "News ",
        url: "#",
    },
];

export const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return (
        <li
            className="nav-item menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className="arrow  "></span>
                            // ADD CLASS
                        )}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <NavLink className="nav-link" to={items.url}>
                    {items.title}
                </NavLink>
            )}
        </li>
    );
};

export default MenuItems;
