const ParticlesLegend = {
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
                mode: "grab",
            },
            onHover: {
                enable: true,
                mode: "grab",
            },
            resize: false,
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
            distance: 90,
            enable: true,
            opacity: .5,
            width: .8,
        },
        collisions: {
            enable: false,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: .8,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 700,
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

export default ParticlesLegend