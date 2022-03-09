import React from 'react';
import Particles from 'react-tsparticles';


const particlesOptions = {
    background: {
        color: {
            value: "none",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 140,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#",
        },
        links: {
            color: "#FFF8DC",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 50,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,

}



const Home = () => {
    return (
        <div>
            <h1 style={{fontFamily:"'sacramento', cursive", fontSize: '2.5em', color:'#FFF8DC', fontWeight:'100'}}>Welcome to my portfolio</h1>
            <Particles className='particles'
                id="tsparticles"
                // init={particlesInit}
                // loaded={particlesLoaded}
                options={particlesOptions}
            />
        </div>
    )
}

export default Home
