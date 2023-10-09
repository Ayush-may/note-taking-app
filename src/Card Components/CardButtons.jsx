

export default function CardButtons(props) {
  
  return (
      <div className="card-button-container container position-relative" >
        <div className="">
          {/* <div className="menu-icon-card-button " >
            <button className="btn"><i class="fa-solid fa-bars"></i></button>
          </div> */}
          <div className="text-center d-flex justify-content-center mb-2">
            { props.date }
          </div>        
        </div>
      </div>

  )
  
}