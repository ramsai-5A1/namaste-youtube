import { useDispatch } from "react-redux";
import {onTogglingMenu} from "../utils/HeaderSlice";
import { useState } from "react";
import { GOOGLE_SEARCH_API } from "../utils/constants";
//const convert = require('xml-js');
import convert from 'xml-js';


const Head = () => {

    const [searchOptions, setSearchOptions] = useState([]);
    const [searchedText, setSearchedText] = useState("");
    const dispatch = useDispatch();

    const handleSearchBar = async (e) => {
        setSearchedText(e.target.value);
        try {
            const rawData = await fetch(GOOGLE_SEARCH_API + searchedText);
            const xmlText = await rawData.text();
            const jsonResult = convert.xml2json(xmlText, { compact: true, spaces: 2 });
            const jsonObject = JSON.parse(jsonResult);
            let arr = [];
            jsonObject.toplevel.CompleteSuggestion.map((obj) => {
                arr.push(obj.suggestion["_attributes"].data);
            });
            setSearchOptions(arr);
            console.log(arr);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="grid grid-flow-col shadow-lg z-5 fixed bg-white w-full border h-[80px]">
            <div className="flex items-center h-20 col-span-1">
                <img 
                    onClick={() => dispatch(onTogglingMenu())}
                    alt="menu"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAASFBMVEX///90d3lucXORlJX39/elp6hqbnCcnZ+pqqtxdHb6+vvT1NTY2dl/goSfoaKHiozj5OS5u7zu7u5dYGPCw8RkZ2l6fH+xsrNaT7p/AAACRUlEQVR4nO3c65KjIBSFUS8RJOAliZj3f9OxnanKHzR2d03JOfnWE7hLMQE2FgUAAAAAAAAAAPgg10v2rseSXEZ/a5s2a0178+PlfRTflNEIEMvGv4kzNs64UoTlQptxL4sfpET54szgt7OEuTr7Ar+nmsNWlru0LF9p7uks19qcfW3fZ+r0Szo8zr6yn3ikH7RO0Nh/cV1yxIi8McutSY2aKZ59WT8Tp0SYXtyr7K+qT4QZpIYZUuNfapjUG0DVnVE1ZlS9zS5Sf2eSsxqZb4Dk+F/+m4l8zuLGJMBK/Nds01mKsROXxnSbM2cvLY3pdubNfhCVZncNYHnS+igmjon97urMMncO9SOaKnsmPupwYFnz6p+2zpx9+oMLtAAAAAAAAAAA/JKehXNNWxqaNps0bQNq2qBVtXWuqdTgZdZN0g+apiKQqoqWqvKcqlqjqsKpzPFPFThf+qvAqo6cqDoMpOuYlqoDdKqONuo6dKrrOLCug9q6jtAX/z5ukL1DHzdY6fnsBAAAAAAAAADgHOPU2uy105vtjFWo59kJMM/1zq7Z6m6Nk7LZ5Izd3NBcb4sTteFs3M7NCU7aBu12mlFeS6varAL3AqtAMdVpKpR9eU5mey7ZndNV0VJVnutF/cS8GKrAmfqAKrCmMaPqbabqyAlV4PN9RBV4lFLPfHFmc10jSEvjzN68ea4ExXG7teblSbOllDiuKu27KvBkh+rsmu8R1WCnA1XgcHu2Teba5+3IB45X2XeBaQIDAAAAAADgv/oDnW51n3eXUngAAAAASUVORK5CYII="
                    className="w-18 h-14 p-2 hover:cursor-pointer"
                />

                <img
                    alt="youtube-logo"
                    src="data:image/png;base64,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"
                    className="py-3 w-40"
                />
            </div>

            <div className="p-4 col-span-10 flex flex-col">
                <div>
                    <input 
                        onChange={handleSearchBar}
                        type="text"
                        placeholder="Search"
                        className="border border-gray-400  h-12 p-2 w-1/2 rounded-l-full "
                    />
                    <button className="h-12 p-2 border w-16 bg-gray-400 rounded-r-full">🔍</button>
                    { searchedText.length > 0 && <SuggestionsBox searchOptions={searchOptions}/> }            
                </div>
                
                
            </div>

            
            
            
            <div className="flex justify-between col-span-1">
                <img
                    alt="video-icon"
                    className="h-14 p-2 hover:cursor-pointer"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8zMzMuLi5VVVUXFxfk5OQPDw8aGhrZ2dkrKytxcXEdHR0gICCIiIhoaGgwMDAlJSWtra1fX185OTmCgoL5+fmPj4/u7u6jo6O3t7d6enpzc3PFxcVHR0djY2Pr6+vR0dFQUFBBQUHKysq9vb2ysrKZmZmkpKRTTcmDAAAE4UlEQVR4nO2d7XaiPBRGA+JHJEpEsX6htTqd+7/DV9RxCIGEWfIuctJn/6vQ6m7OSWKb5cMYAAAAAAAAAAAAAAAAAAAAAAAAQJXsstkd04ETpPPV4rNjvWsaC8lDV+BcCrk/dOe3WcZh4Bx8nF+7ETzkIunbpp4kTicdCM5iR/0KuFi865cNRN8WZqLVe4IfZ963gg2xf2sEU9m3gB1hHsXhdjY/pneO0/UlU6/uCAgGwdjQi4eBFPy1zN0WGb4ali5fo75ffCsS2TSjDtOouswlfLR+jWMWODyLluHHhgGUtbOIGJyeN6xJ1GjBuHZ786tpHefLj/sNp4TIEN5KL68RXDT3GP+6F+qmuhJyMY6cYCyr3RV9/otgEMj7/DtQf0w43m0nQyeYLNLKRotrK8ZibBx1cfuVnNTfAc+72AJ2xkHtsWRZuf47NgoGfMrYVinScJDVPlNvDKWiWFkwNtZ1LjqxtTLTymHDM/XGVRklsS1fswsG8hc7ltuQz/oSaUaZJ+S6dGVjKdG70Y7l5SqIP/vyaGYj1Rf84ts8yTxIzmxZ/nrkWBcWXMojVcwcT761EuXjB8qDS6Z8OerRpIlJ+RXz+Z+HdcF4NpzcGE5URaqG31oPxq+1cuSD4VrrQfF3kvTB0Cjog+HaUKLMB8O19lczRZC+4cpYooy+4Uwv0cpOjLRhOLeVKCNuGCTan2SEtpembaihC3pmWO3BAq8MtR4s8MmwpkSZV4Z1Jcp8MqwtUeaRYeM/o3wxrO/BAk8MG3qwwA/Dph4s8MKwuUSZH4ZGQR8MDT1YQN/Q1IMF5A3NJcroG1pKlJE3tJUoo25oLVFG3LCNIGlDew8WEDZs0YMFdA1blSgjbNhWkKxhyxJlZA1l+0PCNA3DhnOJddA05P9wCJqo4dR+5x9g6Bow1IGha8BQB4auAUMdGLoGDHVg6Bow1IGha8BQB4auAUMdGLoGDHVg6Bow1IGha8BQB4auAUMdGLoGDHVg6Bo/xtD78zT+n4ny/1zbDzib+APOl1o/3/MFXcMg3tlvZ6QNW/YiZcNArO3fQNswaPOh0LQNg5FdkbhhEFkVqRsGsU2RvKF1FOkb2nrRA0NLofpgaFb0wtBYqH4YmhQ9MTQUqi+GzUkC3hg2Fqo/hk1Lv0eGDb3ok2H9KHplWNuLfhnWFSptw0RLFdMVSRsm6VRLVNEKlbQhnzM9uak63VA3rFGsFCp5Q3bUFNUNHH1DNjf3ogeGNYrlUfTBsKZQS73ohSEzLRp+GLK99rne0eLjgZp8QTejZKopyuUDJV1oSThnRh/F5IHyUF7JCnozC/P/oDkraNciWTTck857aqEoF9XMrrNjnWjO7NpZE59GQy137YtU7trKMophervprL7jSqI9pey8mVkxLjIhiecf6oEeZZX78kk9w9KgmPBHTCf1HFI9OehJIp5zCvks2c2oVoAvXzW9pZ4HfAj0ONkwmp/+3kE+0zn7TgQPkxdcirNS0VnqfPC49WjiYZbmXw/y83xTHW4/stWz57un2m1Zdm6xi+2T6P33BLPY4RmVtznOZuWQN+Vb900Sp91slrPNMtb+K9A/PMqvnfjdHa9pLCQPXYHfZn25v3Tm95C8/N4d04ETpPPV4rNbPQAAAAAAAAAAAAAAAAAAAAAAAMBp/gOCEHCKphztaAAAAABJRU5ErkJggg=="
                />

                <img
                    alt="notification-icon"
                    className="h-14 p-2 hover:cursor-pointer"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8BAQEAAADW1tZhYWGioqKWlpbT09PMzMyNjY3g4OCVlZXc3Nx7e3vY2Nj09PQyMjIsLCzs7OwZGRmnp6dubm4+Pj60tLQfHx/IyMiHh4ecnJxLS0t1dXXp6eknJycMDAxbW1uwsLC/v79NTU1CQkI4ODjOyGcfAAAEOklEQVR4nO3d23aiQBCFYSUxGNSgxLNJdDTJ+z/i0B7HERClqnbj2v9VZq76W90oIIdGgzHGGGOMMcYYY4wxxvwrCiedddhFD0Or5HUc7Pqdf6EHo1A8d7amy/3Ri9EDki6a7nnNA/IJPSTZZme+nXGCHpRk0QXQEd/Qw5Irbl4CHTFBD0ysXhYwJY7QA5Mqa40+1jqdZwNTYg89NKH6ucJ39NBkylukbpmG6MGJNMkDpsQ1enAiDQuEC/TgRHopEL6gBycShfWPwvpHYb2Lu4uP3F0at1Pz8/JW5/MZYW95PDmTRwyCZa+NHuh9xa3+Fd4JOVjU72A4GpXinZDPEXrINxV9lucdkaP6nCmOb/YdjDVZq5N7fHvjED34EkVF3w7XjWPvl+rdE3g0ej6N82q+LfETjSgoGVcGOuLA2y+OqCkA3H7geHoeNVxJ+HbGGRqTVVtkAg/EDZpzWSgI9HIW80/73kv07GTx11QWmBJXfn2i5v40UYH47tOh8bM8MCV+o1mnCs7bVyJ20LBDb8KfMkehNx+oChvhnujJpviqBfTlR2Lpb8IzoRfXFY31gClxgOY1GmvFKXSTiP8NdaAJTIlT9IfNUHUKPZjE+F0X6IjYSWxpA+F7NupT6CYRCZzpA1Mi8nj/20Q4xgE1d2f+EQJ3bDoWwJQ4hwl/jIR9FLBrskiRZ6WMFilwmRot0lS4xAATo0XqlinmLqKCK2PFiZgfFXPuMVARYu5bEPupqYQQsm9qtxk6IeIU/+XNWppCxN630onuHCLiIsaRqfAPQKh6FvFCCNg11T9DcyZc2V8QZnNseBQG9tdKaf3glCe0P7yQvPSiDNH+68Jwr3QrbJkLzQ4O90L7Q8TcG0OVhPbX8xkeWWyF9kcXn8bCZ3Oh6U4bRKhyCQ2FFFJIIYUUUkghhRRSSCGFFFJIIYUUUkghhRRSSCGFFFJIIYUUUkghhRRSSCGFFFJIIYV1Fco96LKkcGX8WHPb+0m2xMCUaA80Jso+ydNDIgZoSLR6WEQW0eT+ricY0GgWUUvUjIicQRMibhs8EVW3RewSPRAVZ9EHoCoRsSeTldpC9QWoNot+LNFdKkSfgCpE/NfEeeLbol8z6BKeRfSeTFayROOb78sleot+wQv+cAWvFFJIIToKbxT6mKSwg8ZkJvl9mIRP/hViHvnJGGOMsf9LFq3rLfx6DeBtdUvtfdX05fHbyjwvGvFoUsFKCdGDrNRvCeEKPchKLUoIcW8gkajE71XevMbxzq6+/bHmi3T7NvkrQvzL8Sp25cHmPrzgsGKbwkkMgjV6gNUrfJQr4NJfhQrWKeoVOcLFy7yFGqwe5HRZ8pFNDMYPAmy4bfHCmP4P4p0Vam2W58b0X9MH+BQ9azgNDkj3x7T2X/SXxbNef3/IO+ht0O/A1SqO2pt29Kg6xhhjjDHGGGOMafYXp5hYii9K/swAAAAASUVORK5CYII="
                />

                <img
                    alt="profile-icon"
                    className="h-16 hover:cursor-pointer"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkWrK6FhDuNa-QZwqJe71dE7xYVGV1ZVEb9usTCA5NRT8FlyheMHseMYYnXKLsKQoiBw&usqp=CAU"
                />
            </div>
            
        </div>
    )
};

const SuggestionsBox = ({searchOptions}) => {
    return (
        <div className="z-20">
            <div className="w-[470px] h-auto bg-gray-300 rounded-lg p-2">
                <ul>
                {searchOptions.map((value) => <li className="hover:cursor-pointer hover:bg-gray-400">{value}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Head;