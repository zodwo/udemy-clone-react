import React, { useState } from "react";
import Category from "./Categories/Category";
import Logo from "./Logo/Logo";
import Search from "./SearchBar/Search";
import HeaderPopUp from "./HeaderPopUp/HeaderPopUp";
import LoginSection from "./LoginSection/LoginSection";
import { TfiAlignJustify } from "react-icons/tfi";

function Header({ linkData }) {
    const [activeMbMenu, setActiveMbMenu] = useState(false);

    const bodys = document.querySelector("body");

    activeMbMenu ? bodys.classList.add("overflow-hidden") : bodys.classList.remove("overflow-hidden");

    window.addEventListener("resize", (e) => {
        window.innerWidth > 768 && setActiveMbMenu(false);
    });

    return (
        <header className="h-[72px] bg-white flex items-center shadow-xl z-10 relative ">
            <div className="container mx-auto text-sm px-5 ">
                <nav className="flex items-center gap-5 justify-between md:justify-normal scroll-smooth">
                    <TfiAlignJustify className="md:hidden cursor-pointer " size={20} onClick={() => setActiveMbMenu(!activeMbMenu)} />

                    <div className="left flex items-center gap-4">
                        <Logo />
                        <Category linkData={linkData} activeMbMenu={activeMbMenu} setActiveMbMenu={setActiveMbMenu} />
                    </div>
                    <Search />
                    <HeaderPopUp />
                    <LoginSection />
                </nav>
            </div>
        </header>
    );
}

export default Header;
