import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesLegend from '../ParticlesLegend/ParticlesLegend';
import headshot from '../../Assets/HeadShot.jpg';


const Aboutme = () => {
    return (

        <div>
            <img style={{ width: '10em', height: 'auto', borderRadius: '30px' }} className="headshot" alt="" src={headshot}></img>
            <h1 style={{ fontFamily: "'sacramento', cursive", fontSize: '2.5em', color: '#FFF8DC', fontWeight: '100' }}>About me</h1>
            <Particles className='particles'
                id="tsparticles"
                // init={particlesInit}
                // loaded={particlesLoaded}
                options={ParticlesLegend}
            />
        </div>
    )
}

export default Aboutme
