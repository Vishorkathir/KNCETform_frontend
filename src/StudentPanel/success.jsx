import React from "react";
import Logo from "../assets/kongunadulogo.png"
const Sucess = () => {
    return (
        <>
            <div className="grid justify-center gap-5 text-center py-9">
                <div>
                    <img src={Logo} className="ml-30" />
                     </div>
                <h1 className="text-3xl font-bold">Submitted Successfully!</h1>
                <h1>Your admission details have been recorded</h1>
                <h1 className="text-2xl font-bold">Admission ID</h1>
                <input type="text" placeholder="1234567890-567" className="p-1 border font-bold text-2xl text-center" />
                <div>
                <button type="submit" >Download Receipt</button>
                <button type="button">Go to Home</button>
                </div>

            </div>
        </>
    )
}
export default Sucess;