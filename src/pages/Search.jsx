import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './Search.css'
function Search() {
    return (
        <>
       <Header/> 
            <div className="mainSearch">
                <div className="middleSearch">
                    <div className="search">
                        <input type="text" placeholder="Search" />
                        <button className="btn">Search</button>
                    </div>
                </div>
            </div>

            <div className="content">
            

            </div>
         
        </>
    )
}

export default Search