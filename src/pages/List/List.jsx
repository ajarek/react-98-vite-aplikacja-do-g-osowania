import React, { useState } from 'react';
import Header from '../../components/Header/Header'
import './List.css';

const List = ({ array }) => {
  const [selectedOption, setSelectedOption] = useState();
  const [range, setRange] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    alert('zagłosowałaś na '+ event.target.value)
    
  };

  const handleRangeChange = (event, el) => {
    const newPoparcie = event.target.value;
    const updatedArray = array.map((item) =>
      item.id === el.id ? { ...item, poparcie: newPoparcie } : item
    );
    setRange(updatedArray)
  };
  
  
  
  return (
    <div className='list'>
      <Header/>
      {array.map((el) => {
        return (
          <div key={el.id} className='card'>
            <div className='img'>
              <img src={el.src} alt={el.name} />
            </div>
            <div className='wrapper-info'>
              <h1>{el.name}</h1>
              <h2>partia: {el.partia}</h2>
              <div className='range'>
                <label htmlFor='range'>poparcie: {range.length>0?range.map(rn=>{
                  if(rn.id===el.id){
                    return rn.poparcie
                  }
                  
                }):el.poparcie}%</label>
                <input
                  type='range'
                  name=''
                  id='range'
                  defaultValue={el.poparcie}
                  onChange={(event) => handleRangeChange(event, el)}
                />
              </div>
            </div>
            <div className='radio'>
              <label htmlFor={el.id}>
                Głosuj
                <input
                  type='radio'
                  name='radio'
                  id={el.id}
                  value={el.name}
                  checked={selectedOption === el.name}
                  onChange={handleOptionChange}
                />
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
