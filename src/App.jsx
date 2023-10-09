// CSS FILES 
import './css/winow.css';
import './css/sideBar.css';
import './css/bootstrap.min.css'
import './css/card.css'
import './css/cardModal.css'


// COMPONENTS FILES
import SideBar from './SideBar';
import Card from './Card Components/Card';
import Modal from './Modal';
import { useEffect, useState } from 'react';
import CardModal from './CardModal';

export default function App(){

    const [tempData, setTempData] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [openCardModal, setOpenCardModal] = useState( false );
    const [colors, setColor] = useState(['red', 'green','blue', 'yellow']);
    const[notes,setNotes] = useState(()=>{
        if( localStorage.getItem('notes') === null)  return []

        return JSON.parse( localStorage.getItem('notes') );
    });

    useEffect(()=>{
        localStorage.setItem('notes', JSON.stringify(notes) );
    },[notes]);
    
    
    const openCardModalFun = (data)=>{
        setTempData( data );
        setOpenCardModal( true );
    }


    const closeCardModal = (cardTempData)=>{
        
        setOpenCardModal( false );
    }

    const handleModalOpen = ()=>{
        setOpenModal(!openModal);
    }

    const addNote = (value)=>{   
        setNotes( [...notes, {
            note : value,
            color : colors[  Math.floor(Math.random() * colors.length) ],
            date: new Date().toLocaleString()
        }] );
        onCLose();
    }
    
    const onCLose = ()=>{
        setOpenModal(false);
    }

    const removeNote = (e,currentIndex)=>{
        setNotes( ()=> notes.filter( (element, index)=> index != currentIndex ));
    }

    return(
        <>
            {
                openModal && (
                    <Modal closeModal={onCLose}  sendNote={addNote}/>
                )
            }
            {
                openCardModal && (
                    <CardModal  showData={tempData} closeCardModal={closeCardModal} />
                )
            }
            <div className='d-flex '>
                <div className='p-3'>
                    <SideBar  colorBtns={colors}  handleModal={handleModalOpen}/>
                </div>
                <div className='Card-app-outer-container w-100'>
                    <div className='h1 fw-bold bg-white w-100 p-5 note-text'>Notes</div>
                    <div className=' card-app-container d-flex justify-content-center p-0 p-sm-5'>
                        <div className='card-app  '>{
                                notes.length <= 0 ? 
                                    <div className='text-center'>No Notes</div> :
                                     notes.map( (note, index)=> 
                                        <Card 
                                            removeNote={removeNote} 
                                            index={index} 
                                            color={note.color} 
                                            data={note.note} 
                                            date={note.date} 
                                            openCardModalFun={openCardModalFun}
                                            /> )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}