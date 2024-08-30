import React from "react";
import './style.scss';

const Errorpage =()=>{
    return(
    <>
    <div className="container page-not-found">
        <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="col-5" >
                <h2>404</h2>
                <h3>Page Not found</h3>
            </div>
        </div>
    </div>
    </>
    )
}

export default Errorpage;