import React from 'react';
import {Tilt} from 'react-tilt';
import {FaBeer} from 'react-icons/fa';
import "./Logo.css";
const Logo = ()=>{
    return (
        <div className='ma4 mt0 tc'>
            <Tilt className="Tilt br2 shadow-2" options={{max:55}} style={{height:100,width:120}}>
                <div className='Tilt-inner pa3'><FaBeer style={{paddingTop:'7px'}}/></div>
            </Tilt>        
        </div>
    );
}

export default Logo;