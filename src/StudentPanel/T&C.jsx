import React from "react";
import { useNavigate } from "react-router-dom";

const TermCondition = () => {

    const navigate = useNavigate();

    const handlenavigate =()=>{
        navigate("/success")
    }

    return (
        <>
            <div className="text-center mt-55 grid gap-5 ">
                <h1 className="text-5xl font-bold">
                    Terms and Conditions
                </h1>
                <h1 className="text-xl w-290  ml-30 ">Please read these terms and conditions carefully before proceeding with your application.
                    By clicking 'Submit Application', you agree to be bound by these terms and conditions.
                    If you do not agree to these terms, you must not submit your application.</h1>
        
                    <button class="bg-sky-500 hover:bg-sky-700 w-70 text-lg font-semibold text-white ml-130 p-2 rounded-4xl" onClick={handlenavigate}>   Submit Application</button>




            </div>

        </>
    )
}
export default TermCondition;