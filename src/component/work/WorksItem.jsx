import React from 'react'

const WorksItem = ({item}) => {
  return (
    <div className="work_card" key={item.id}>
        <img src={item.image} alt="" className='work_img'/>
        
        <a href={item.demoLink} className="work_button">
  <h3 className="work_title">{item.title}</h3>
</a>
    </div>
  )
}

export default WorksItem