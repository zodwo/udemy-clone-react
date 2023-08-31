import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../../../redux/searchSlice";

function Search() {
    const seacrhValue = useSelector((state) => state.search.value);
    const dispatch = useDispatch();

    const changeHandler = (e) => {
        dispatch(changeValue(e.target.value));
    };

    return (
        <React.Fragment>
            <div className="w-3/4  hidden md:flex items-center rounded-3xl border bg-gray-secondary">
                <AiOutlineSearch size={24} className="text-disableColor mx-3 hover:cursor-not-allowed" />
                <input
                    type="text"
                    name=""
                    value={seacrhValue}
                    onChange={changeHandler}
                    id="search"
                    className="w-full h-12  rounded-3xl  outline-none bg-gray-secondary placeholder:text-[#6a6f73] tracking-[-.2px]"
                    placeholder="Search for anyhing "
                />
            </div>
        </React.Fragment>
    );
}

export default Search;
