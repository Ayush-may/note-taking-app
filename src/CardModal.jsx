import { useState } from "react";

export default function CardModal({showData , closeCardModal}){
    const [cardTempData, setCardTempData] = useState(showData);

    return(
        <>
            <div className={`card-modal-containeree`}  onClick={(e)=>{
                    if( e.target.className === 'card-modal-containeree' ){
                        console.log('clickde')
                        closeCardModal(cardTempData);
                    }
                }
            }>
                <div  className={`card-modal-body  p-3 `}>
                    <textarea rows={8} className="form-control" value={cardTempData} onChange={e=>{setCardTempData(e.target.value)}} ></textarea>
                </div>
            </div>
        </>
    )
}