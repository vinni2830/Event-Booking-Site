// Testimonials.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css'; // Create a CSS file for styling

const testimonialsData = [
    {
        id: 1,
        text: "I had a fantastic experience booking my tickets through this platform! Highly recommend!",
        author: "Jane Doe"
    },
    {
        id: 2,
        text: "A seamless and user-friendly experience! Will definitely use it again.",
        author: "John Smith"
    },
    {
        id: 3,
        text: "Great variety of events! I found exactly what I was looking for.",
        author: "Emily Johnson"
    },
    {
        id: 4,
        text: "The best platform for event booking! Highly reliable and efficient.",
        author: "Michael Brown"
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="testimonials-container">
            <motion.div 
                className="testimonials" 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
            >
                <blockquote>
                    "{testimonialsData[index].text}"
                </blockquote>
                <cite>- {testimonialsData[index].author}</cite>
            </motion.div>
        </div>
    );
};

export default Testimonials;
