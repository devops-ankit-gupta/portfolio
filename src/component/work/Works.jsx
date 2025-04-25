import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { projectsData } from './Records'
import { projectsNav } from './Records'
import WorksItem from './WorksItem'

const Works = () => {
    const [item,setItem]=useState({name: "All"});
    const [projects,setProjects]=useState([]);
    const [active,setActive]=useState(0);

    useEffect(()=> {
        if(item.name ==="All") {
            setProjects(projectsData);
        }
        else {
            const newProjects = projectsData.filter((project)=>{
                return project.category === item.name;
            });
        setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e,index)=> {
        setItem({name: e.target.textContent});
        setActive(index);
    }

  return (
    <div>
        <div className="work_filters">
        {projectsNav.map((item,index)=>{
            return (
                <span onClick={(e)=> {
                    handleClick(e,index);
                }}className={`${active===index ? "active-work" : ""}work_item`} key={index}>{item.name}</span>
            )
        })}
    </div>

    <div className="work_container container grid">
        {projects.map((item)=>{
            return <WorksItem item={item} key={item.id}/>
        })}
    </div>
    </div>
  )
}

export default Works