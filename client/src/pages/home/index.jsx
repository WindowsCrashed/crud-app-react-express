import React from 'react'
import Content from '../../template/content'
import './style.css'

function Home() {
    return (
        <Content title='Welcome'>
            <div className='home'>
                <p>We are <strong><span className='blue'>G</span>neric</strong>, 
                    the most generic of generic companies in the entire world.</p>
                <p>We make all sorts of generic 
                    products <span className='disclaimer'>(except for medications...)</span>.</p>
                <p>Feel free to experiment our variety of generic services.</p>
            </div>
        </Content>
    )
}

export default Home