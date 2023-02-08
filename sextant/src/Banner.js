import React, { Component } from 'react'
import './Banner.css'

class Banner extends Component {
    render() {
        
        return (
            <div className="banner">
                <img
                    className='banner_logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Sextant.jpg/1024px-Sextant.jpg'
                    alt=''
                />
                <div className="banner_title">Sextant Dashboard</div>
                <br/>
                
            </div>



        )
    }
}

export default Banner