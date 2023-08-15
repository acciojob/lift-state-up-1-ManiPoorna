import React, {useState} from "react";


const Modal = ()=>{


    let [modal,setModal] = useState(false);
     
    return(
        <div className="parent">
            <h3>Parent Component.</h3>
            <div className="child">
                <h3>Child Component.</h3>
                <button onClick={()=>{setModal(true)}}>Show Modal</button>
                {
                    modal && <div><h3>Modal Content</h3><p>This is the modal content.</p></div>
                }
            </div>
        </div>
    )
}

export default Modal;