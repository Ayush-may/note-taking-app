export default function ColorButton( {color, clickCheck} ){

    return(
        <>
            <div className={`color-btn shadow-sm ${color}`} ></div>
        </>
    )
}