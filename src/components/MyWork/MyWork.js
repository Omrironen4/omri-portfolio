import { BorderBottom } from '@mui/icons-material';
import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesLegend from '../ParticlesLegend/ParticlesLegend';

const MyWork = () => {
    return(
        <div>
        <h1 style={{ fontFamily: "'sacramento', cursive",fontSize: '2.5em', color: '#FFF8DC', fontWeight: '100' }}>My Work</h1>
        <Particles className='particles'
            id="tsparticles"
            // init={particlesInit}
            // loaded={particlesLoaded}
            options={ParticlesLegend}
        />
    </div>
    )
}

export default MyWork
