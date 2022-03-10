import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesLegend from '../ParticlesLegend/ParticlesLegend';





const Home = () => {
    return (
        <div>
            <h1 style={{fontFamily:"'sacramento', cursive", fontSize: '2.5em', color:'#FFF8DC', fontWeight:'100'}}>Welcome to my portfolio</h1>
            <Particles className='particles'
                id="tsparticles"
                // init={particlesInit}
                // loaded={particlesLoaded}
                options={ParticlesLegend}
            />
        </div>
    )
}

export default Home
