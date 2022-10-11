import React from 'react';
import poster from './poster.jpg'
import { useState, useEffect } from 'react';
import './styles.css'

const Actor = () => {
    const [url, setUrl] = useState("https://api.tvmaze.com/search/people?q=")
    const [data, setData] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    const [input, setInput] = useState("")

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((result)=>{
            setData(result);
            setIsLoaded(true)
        })
    }, [url])

    function getInput(e){
        setInput(e.target.value)
        setUrl("https://api.tvmaze.com/search/people?q="+e.target.value)
    }


    if(!isLoaded){
        return <h3>Loading</h3>
    }


    return (
        <div className='search' >
            
            <p>Enter Actor Name</p>
            
            <input type={'text'} onChange={getInput}  placeholder="Enter Actor Name Here..."  />
            <br></br>

            <div className='container'>
            {data.length==0 && <>{input!="" && <p style={{color:"red"}} >Result Not Found</p> }</>    }
            {data.map((d)=>(
                <div className='item' >
                    <a href={d.person.url} target="_blank" >
                        {d.person.image? <img src={d.person.image.medium} /> : <img src={poster} />}
                    </a>
                    <br />
                    <a href={d.person.url}  target="_blank">
                        {d.person.name ? <h3>{d.person.name}</h3>:<h3>Name not Availlable</h3> }
                    </a>
                
            
                </div>
            ))}
            </div>
        </div>
    );
}

export default Actor;
