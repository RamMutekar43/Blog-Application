import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <div id="footer" className=' w-full h-auto bg-slate-200 fixed bottom-0'>
            <div className=' bg-amber-900 text-white font-light h-10 flex justify-center items-center'>
                2025.All Rights Reserved.
            </div>
        </div>
    </>
    )
}   

export default Footer;