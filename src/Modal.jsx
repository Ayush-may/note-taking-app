import { useState } from 'react';
import './css/modal.css';

export default function Modal({ closeModal, sendNote }){
    const [note, setNote] = useState('');

    return (
        <>
            <div className='modal-container' onClick={ (e)=>{
                if(e.target.className === 'modal-container'){
                    closeModal();
                }
            }} >
                <div className='modal-inner-container p-4'>
                    <div className='close'> <button onClick={closeModal} className='btn'>&times;</button> </div>
                    <div className='modal-body-custom  mb-3'>
                        <textarea autoFocus rows={"5"} className='p-2 form-control' value={note} onChange={(e)=>{setNote(e.target.value)}} ></textarea>
                    </div>
                    <div className='modal-footer-custom'>
                        <button className='btn btn-success' onClick={()=>{sendNote(note)}}>Submit</button>
                        {/* <button className='btn btn-danger ml-3'  onClick={closeModal}>Cancel</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}