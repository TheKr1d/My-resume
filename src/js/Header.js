import React from 'react';
import layerBase from '../Images/layer-base.png';
import layerMiddle from '../Images/layer-middle.png';
import layerFront from '../Images/layer-front.png';


export default class Header extends React.Component {
    render() {
        return (
            <header className='main-header'>
                <div className='layers'>
                    <div className='leyar-header'>
                        <div className='layers-caption'>My name is</div>
                        <div className='layers-title'>Vlad</div>
                        <div className='layers-caption'>I am looking for a job</div>
                        <div className='layers-caption'>"Frontend-Developer"</div>
                    </div>
                    <div className='layer layers-base' style={{backgroundImage: `url(${layerBase})`}}></div>
                    <div className='layer layers-middle'style={{backgroundImage: `url(${layerMiddle})`}}></div>
                    <div className='layer layers-front' style={{backgroundImage: `url(${layerFront})`}}></div>
                </div>
            </header>
        )
    }
}