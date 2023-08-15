import React, {useState} from "react";


const Modal = ()=>{


    let [modal,setModal] = useState(false);
     
    return(
        <div className="parent">
            <h1>Parent Component.</h1>
            <div className="child">
                <h1>Child Component.</h1>
                <button onClick={()=>{setModal(true)}}>Show Modal</button>
                {
                    modal && <div><h2>Modal Content</h2><p>This is the modal content.</p></div>
                }
            </div>
        </div>
    )
}

export default Modal;