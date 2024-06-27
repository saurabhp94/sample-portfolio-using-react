
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../theme/ThemeContext.jsx';
import { darkTheme } from '../theme/theme.js';

const LightBackground = () => {
    const { theme } = useTheme();
    const canvasRef = useRef(null);
    const [contentLoaded, setContentLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let screen = document.querySelector(".MainApp");
        let dots = [];
        let colors = ["#FF8C69", "#E6E6FA", "#8EC5FC", "#A9A9A9", "#FFD700"];

        const resizeCanvas = () => {
            canvas.width = screen.offsetWidth;
            canvas.height = screen.offsetHeight;
            createDots();
            drawDots();
        };

        const createDots = () => {
            dots = [];
            for (let i = 0; i < 500; i++) {
                dots.push({
                    x: Math.floor(Math.random() * canvas.width),
                    y: Math.floor(Math.random() * canvas.height),
                    radius: Math.random() * 0.5 + 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        const drawDots = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dots.forEach((dot) => {
                ctx.fillStyle = dot.color;
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false);
                ctx.fill();
            });
        };

        const handleMouseMove = (e) => {
            drawDots();
            let mouse = {
                x: e.pageX - screen.getBoundingClientRect().left - window.scrollX,
                y: e.pageY - screen.getBoundingClientRect().top - window.scrollY
            };
            dots.forEach((dot) => {
                let distance = Math.sqrt(Math.pow(mouse.x - dot.x, 2) + Math.pow(mouse.y - dot.y, 2));
                if (distance < 200) {
                    ctx.strokeStyle = dot.color;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(dot.x, dot.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            });
        };

        const initializeCanvas = () => {
            resizeCanvas();
            screen.addEventListener("mousemove", handleMouseMove);
            screen.addEventListener("mouseleave", drawDots);
        };

        // Use ResizeObserver to watch for size changes
        const resizeObserver = new ResizeObserver(() => {
            resizeCanvas();
        });

        if (contentLoaded) {
            initializeCanvas();
            resizeObserver.observe(screen);
        }

        return () => {
            screen.removeEventListener("mousemove", handleMouseMove);
            screen.removeEventListener("mouseleave", drawDots);
            resizeObserver.disconnect();
        };
    }, [contentLoaded]);

    // This effect runs once when the component mounts
    useEffect(() => {
        // Wait for content to load
        window.addEventListener('load', () => setContentLoaded(true));
        
        // Fallback in case 'load' event doesn't fire
        setTimeout(() => setContentLoaded(true), 2000);

        return () => {
            window.removeEventListener('load', () => setContentLoaded(true));
        };
    }, []);

    return (
        <canvas ref={canvasRef} id={theme === darkTheme ? '' : 'CanvasDots'}></canvas>
    );
};

export default LightBackground;