import React from 'react';
import { useState, useEffect } from 'react';
import './styles.css'
import poster from './poster.jpg'

const Shows = () => {
    const [url, setUrl] = useState("https://api.tvmaze.com/search/shows?q=")
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
        setUrl("https://api.tvmaze.com/search/shows?q="+e.target.value)
    }


    if(!isLoaded){
        return <h3>Loading</h3>
    }


    return (
        <div className='search' >
            
            <p>Enter show Name</p>
            
            <input type={'text'} onChange={getInput}  placeholder="Enter Show Name Here..."  />
            <br></br>

            <div className='container'>
            {data.length==0 && <>{input!="" && <p style={{color:"red"}} >Result Not Found</p> }</>    }
            {data.map((d)=>(
                <div className='item' >
                    <a href={d.show.url} target="_blank" >
                        {d.show.image? <img src={d.show.image.medium} /> : <img src={poster} />}
                    </a>
                    <br />
                    <a href={d.show.url}  target="_blank">
                        {d.show.name ? <h3>{d.show.name}</h3>:<h3>Name not Availlable</h3> }
                    </a>
                   
                    <a href={d.show._links.self} className="watchnow" >Watch Now</a>
                
            
                </div>
            ))}
            </div>
        </div>
    );
}

export default Shows;
