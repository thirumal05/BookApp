import React, {useState} from 'react';
import Card from './Card';
import axios from 'axios';


const Main=()=>{
    const[search, setSearch]=useState("");
    const searchBook =(evt)=>{



         if(evt.key=="Enter"){
             console.log("Hello")
         }

    }


    return(
        <>
        <div className='header'>
            <div className='row1'>
                <h1>A room without books is like<br/> a body without a soul.</h1>
            </div>

            <div className='row2'>

           
                <div className='search'>
                    <img className="google-icon" src="./images/goo.png" alt=""/>
                    <input type='text' placeholder='Enter Your Book Name' value={search} onChange={e=>setSearch(e.target.value)} onKeyUp={searchBook}/>
                    <button className='searchbtn'><img className="searchbtn-icon" src="./images/search.png" alt=""/></button>

                </div>
                <img className='bgimg2' src="./images/bg2.png" alt=""/>
            </div>


        </div>   
        <div className='container'>

            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

        </>
    )
}
export default Main;