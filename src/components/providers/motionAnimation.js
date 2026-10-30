export const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.05,
        },
    },
};

export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0 },
    transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
    },
};

// Make `hidden` and `visible` non-enumerable so they work with `variants={fadeInUp}`
// without leaking into DOM props when spread `{...fadeInUp}` (which causes HTML `hidden=""` / `display: none`)
Object.defineProperty(fadeInUp, "hidden", {
    value: {
        opacity: 0,
        y: 30,
    },
    enumerable: false,
    configurable: true,
    writable: true,
});

Object.defineProperty(fadeInUp, "visible", {
    value: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    enumerable: false,
    configurable: true,
    writable: true,
});

export const fadeInUpVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const hoverEffect = {
    scale: 1.03,
    transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeZoomIn = {
    initial: { opacity: 0, scale: 0.70, y: 30 },
    whileInView: {
        opacity: 1,
        scale: 1,
        y: 0,
    },
    transition: {
        duration: 0.7,
        ease: "easeOut",
    },
    viewport: { once: true, amount: 0 },
};

export const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
};

export const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: {
        opacity: 1,
        x: 0,
    },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, amount: 0 },
};

export const zoomIn = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: {
        scale: 1,
        opacity: 1,
    },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, amount: 0 },
};

// Added in All Pages ---- Load Animation
export const animationContent = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3,
    },
    viewport: { once: true, amount: 0 },
};
