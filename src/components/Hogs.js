import React from 'react'
import PigInfo from './PigInfo'

function Hogs({hogs}){

 const pigImage =  hogs.map((pig) => {
    console.log(pig.image)
      return <div key={pig.name}><img src={pig.image} onClick={imageClick}
       alt=""/> </div>
  })

  const pigName =  hogs.map((pig) => {
    console.log(pig.name)
      return <div key={pig.name}><p>{pig.name}</p></div>
  })

  function imageClick(){
      <ul></ul>
  }

    return (
        <div>
            <PigInfo name={pigName} image={pigImage} />
        </div>

    )
}
export default Hogs;