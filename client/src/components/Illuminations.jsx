import React, { useState, useEffect, useRef } from 'react';

const Illuminations = ({ sparkleColor = 'none', count = 5, children, style, ...props }) => {
    const [sparkles, setSparkles] = useState([]);
    const sparkleId = useRef(0);

    // Generate a new sparkle
    const createSparkle = () => {
        return {
            id: sparkleId.current++,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 20 + 20,
            rotation: Math.random() * 360,
            birthTime: Date.now(),
            lifetime: 3000 + Math.random() * 2000, // 3-5 seconds
        };
    };

    // Initialize sparkles
    useEffect(() => {
        setSparkles(Array.from({ length: count }, createSparkle));
    }, [count]);

    // Animation loop
    useEffect(() => {
        const animate = () => {
            const now = Date.now();

            setSparkles(prev => {
                let updated = prev.map(sparkle => ({
                    ...sparkle,
                    rotation: sparkle.rotation + 1, // Slow rotation
                }));

                // Remove dead sparkles
                updated = updated.filter(sparkle =>
                    now - sparkle.birthTime < sparkle.lifetime
                );

                // Add new sparkles if needed
                while (updated.length < count) {
                    updated.push(createSparkle());
                }

                return updated;
            });
        };

        const interval = setInterval(animate, 50); // 20fps
        return () => clearInterval(interval);
    }, [count]);

    // Color schemes
    const colors = {
        gold: { primary: '#FFD700', secondary: '#FFF8DC', glow: '#FFBF00' },
        none: {},
        silver: { primary: '#C0C0C0', secondary: '#F8F8FF', glow: '#A8A8A8' },
    };

    const colorScheme = colors[sparkleColor] || colors.none;

    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-block',
                ...style
            }}
            {...props}
        >
            {/* Sparkles */}
            {sparkleColor !== "none" && sparkles.map(sparkle => {
                const now = Date.now();
                const age = now - sparkle.birthTime;
                const ageRatio = age / sparkle.lifetime;

                // Calculate opacity with smooth fade
                let opacity = 1;
                if (ageRatio > 0.7) {
                    // Start fading at 70% of lifetime
                    const fadeProgress = (ageRatio - 0.5) / 0.3;
                    opacity = Math.max(0, 1 - fadeProgress);
                }

                return (
                    <div
                        key={sparkle.id}
                        style={{
                            position: 'absolute',
                            left: `${sparkle.x}%`,
                            top: `${sparkle.y}%`,
                            width: `${sparkle.size}px`,
                            height: `${sparkle.size}px`,
                            opacity,
                            transform: `translate(-50%, -50%) rotate(${sparkle.rotation}deg)`,
                            pointerEvents: 'none',
                            transition: 'opacity 0.2s ease-out',
                            zIndex: 10,
                        }}
                    >
                        <svg
                            width={sparkle.size}
                            height={sparkle.size}
                            viewBox="0 0 100 100"
                            style={{ filter: `drop-shadow(0 0 4px ${colorScheme.glow})` }}
                        >
                            <defs>
                                {/* Core radial gradient */}
                                <radialGradient id={`core-${sparkle.id}`} cx="50%" cy="50%" r="15%">
                                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                                    <stop offset="70%" stopColor={colorScheme.secondary} stopOpacity="0.9" />
                                    <stop offset="100%" stopColor={colorScheme.primary} stopOpacity="0.7" />
                                </radialGradient>

                                {/* Ray gradient */}
                                <linearGradient id={`ray-${sparkle.id}`} x1="0%" y1="50%" x2="100%" y2="50%">
                                    <stop offset="0%" stopColor={colorScheme.primary} stopOpacity="0" />
                                    <stop offset="15%" stopColor="#FFFFFF" stopOpacity="0.8" />
                                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                                    <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor={colorScheme.primary} stopOpacity="0" />
                                </linearGradient>

                                {/* Soft glow filter */}
                                <filter id={`glow-${sparkle.id}`} x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="1.5" />
                                </filter>
                            </defs>

                            {/* Outer glow circle */}
                            <circle
                                cx="50" cy="50" r="20"
                                fill={colorScheme.glow}
                                opacity="0.3"
                                filter={`url(#glow-${sparkle.id})`}
                            />

                            {/* Main light rays */}
                            <g transform="translate(50,50)">
                                {/* Primary vertical ray */}
                                <ellipse cx="0" cy="0" rx="1" ry="35" fill={`url(#ray-${sparkle.id})`} opacity="0.9" />

                                {/* Primary horizontal ray */}
                                <ellipse cx="0" cy="0" rx="35" ry="1" fill={`url(#ray-${sparkle.id})`} opacity="0.9" />

                                {/* Diagonal rays */}
                                <ellipse cx="0" cy="0" rx="0.8" ry="25" fill={`url(#ray-${sparkle.id})`}
                                    transform="rotate(45)" opacity="0.7" />
                                <ellipse cx="0" cy="0" rx="0.8" ry="25" fill={`url(#ray-${sparkle.id})`}
                                    transform="rotate(-45)" opacity="0.7" />

                                {/* Secondary angled rays */}
                                <ellipse cx="0" cy="0" rx="0.5" ry="18" fill={`url(#ray-${sparkle.id})`}
                                    transform="rotate(22.5)" opacity="0.5" />
                                <ellipse cx="0" cy="0" rx="0.5" ry="18" fill={`url(#ray-${sparkle.id})`}
                                    transform="rotate(67.5)" opacity="0.5" />
                                <ellipse cx="0" cy="0" rx="0.5" ry="18" fill={`url(#ray-${sparkle.id})`}
                                    transform="rotate(112.5)" opacity="0.5" />
                                <ellipse cx="0" cy="0" rx="0.5" ry="18" fill={`url(#ray-${sparkle.id})`}
                                    transform="rotate(157.5)" opacity="0.5" />
                            </g>

                            {/* Lens flare effects */}
                            <ellipse cx="50" cy="50" rx="12" ry="1.5" fill="#FFFFFF"
                                opacity="0.6" transform="rotate(20 50 50)" />
                            <ellipse cx="50" cy="50" rx="8" ry="1" fill={colorScheme.secondary}
                                opacity="0.4" transform="rotate(-35 50 50)" />

                            {/* Bright central core */}
                            <circle cx="50" cy="50" r="4" fill={`url(#core-${sparkle.id})`} />

                            {/* Ultra-bright center point */}
                            <circle cx="50" cy="50" r="1.5" fill="#FFFFFF" opacity="0.95" />

                            {/* Subtle chromatic aberration */}
                            <circle cx="49.5" cy="49.5" r="1.8" fill="#FFB6C1" opacity="0.1" />
                            <circle cx="50.5" cy="50.5" r="1.8" fill="#87CEEB" opacity="0.1" />
                        </svg>
                    </div>
                );
            })}

            {/* Content */}
            <span style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </span>
        </div>
    );
};

export default Illuminations;