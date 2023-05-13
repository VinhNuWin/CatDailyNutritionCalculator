export const containerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: .4, 
            ease: 'easeInOut',
            delayChildren: 0,
            staggerChildren: .4,    
        },        
    },
    exitAnimation: {
        opacity: 0,
        y: -50,
        transition: { ease: 'easeOut' }
    },
    // exitBeforeEnter: true,

};

export const dropUpVariants = {
    hidden : { 
        opacity: 0,
        y: 50,
    },
    visible: { 
        opacity: 1,
        y: 0,
    },
    transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.3,
    }
};