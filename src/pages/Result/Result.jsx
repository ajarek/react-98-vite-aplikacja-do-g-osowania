import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Result.css'

const Result = () => {
  const { selectedOption, setSelectedOption, range, setRange,data } = useContext(AppContext)
  return (
    <div className='result'>

      {range.length>0? range.map(dt=>{
        return(
          <div key={dt.id} className="wrapper-result">
          <div  className="column" style={{height:dt.poparcie*5+'px'}}>{dt.poparcie+'%'}</div>
          <div className="name">{dt.name.split(' ')[0]}</div>
          </div>
        )
      }):
      data.map(dt=>{
        return(
          <div key={dt.id} className="wrapper-result">
          <div  className="column" style={{height:dt.poparcie*5+'px'}}>{dt.poparcie+'%'}</div>
          <div className="name">{dt.name.split(' ')[0]}</div>
          </div>
        )
      })

      }
    </div>
  )
}

export default Result