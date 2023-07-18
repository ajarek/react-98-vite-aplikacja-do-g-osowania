import './List.css'

const List = ({array}) => {
  return (
    <div className='list'>
       {array.map(el=>{
        return(
          <div key={el.id} className="card">
            <div className="img">
            <img src={el.src} alt={el.name} /></div>
            <div className="wrapper-info">
            <h1>{el.name}</h1>
            <h2>partia: {el.partia}</h2>
            <div className="range">
              <label htmlFor="range">poparcie: {el.poparcie}%</label>
              <input type="range" name="" id="range" value={el.poparcie} />
            </div>
            </div>
            <div className="radio">
            <label htmlFor={el.id}>Głosuj
              <input type="radio" name="radio" id={el.id} />
              </label>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List