const ease = [0.22, 1, 0.36, 1] as const;

export const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

// Fade + move up
export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease,
        },
    },
};

// Fade + move down
export const fadeDown = {
    hidden: {
        opacity: 0,
        y: -30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease,
        },
    },
};

// Fade + slide from left
export const fadeRight = {
    hidden: {
        opacity: 0,
        x: -40,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease,
        },
    },
};

// Fade + slide from right
export const fadeLeft = {
    hidden: {
        opacity: 0,
        x: 40,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.9,
            ease,
        },
    },
};

// Simple fade
export const fadeIn = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            ease,
        },
    },
};

// Subtle zoom
export const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.94,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.9,
            ease,
        },
    },
};

// Zoom + slight upward movement
export const zoomUp = {
    hidden: {
        opacity: 0,
        scale: 0.92,
        y: 20,
    },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1,
            ease,
        },
    },
};

// Blur + fade
export const blurIn = {
    hidden: {
        opacity: 0,
        filter: "blur(12px)",
    },
    show: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease,
        },
    },
};

// Blur + move up
export const blurUp = {
    hidden: {
        opacity: 0,
        y: 25,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease,
        },
    },
};

// Slight rotation
export const rotateIn = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        rotate: -3,
    },
    show: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.9,
            ease,
        },
    },
};

// Elegant reveal
export const revealUp = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.98,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.1,
            ease,
        },
    },
};