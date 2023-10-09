import CardButtons from "./CardButtons";

export default function Card({color, data, date, index, removeNote,openCardModalFun}){
    return(
        <>
            <div className="card-container">
                <button className="btn close-btn" onClick={(e)=>removeNote(e,index)}  >&times;</button>
                <div className={`my-card shadow-sm ${color} p-3 h6` } onClick={ ()=>{
                    openCardModalFun(data,index);
                }}  >
                    <div className="my-card-body card-note-text p-2">
                        { data }
                    </div>
                    <div className="my-card-footer">
                        <CardButtons date={date} />
                    </div>
                </div>
            </div>
        </>
    );
}