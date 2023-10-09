import { useState } from "react"
import ColorButton from "./ColorButton"
import Modal from "./Modal";


export default function SideBar( { colorBtns, handleModal} ){


    return(
        <>
            <div className="sidebar-container ">
                <div className="color-btn-section">
                    <div className="addbtn-color color-btn" onClick={handleModal} ><span>New</span></div>
                    <div className="d-flex flex-column color-inner-section">
                        { colorBtns.map( (color)=> 
                            <ColorButton color={color} />                            
                        )}
                    </div>
                </div>
            </div>
        </>
     )
}