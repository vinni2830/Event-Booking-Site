import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';
import Testimonials from '../components/Testimonials'; // Import the Testimonials component
import './Home.css';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const sampleEvents = [
            {
                id: 1,
                title: 'Concert Night',
                date: '2024-11-01',
                time: '7:00 PM',
                venue: 'City Hall',
                cost: '$50',
                image: 'https://img.freepik.com/free-photo/large-crowd-people-are-standing-front-stage-with-light-it_1340-32808.jpg?size=626&ext=jpg&ga=GA1.1.654264046.1720339183&semt=ais_hybrid',
                description: 'Join us for an evening of great music!',
            },
            {
                id: 2,
                title: 'Tech Conference',
                date: '2024-12-05',
                time: '10:00 AM',
                venue: 'Convention Center',
                cost: '$100',
                image: 'https://img.freepik.com/free-photo/expert-doing-vr-demonstration-ai-tech-summit-event_482257-94898.jpg?ga=GA1.1.654264046.1720339183&semt=ais_hybrid',
                description: 'Explore the latest in technology and innovation.',
            },
            {
                id: 3,
                title: 'Art Exhibition',
                date: '2024-10-20',
                time: '2:00 PM',
                venue: 'Art Gallery',
                cost: 'Free',
                image: 'https://img.freepik.com/premium-photo/quotart-sale-area-featuring-student-artworks-galleryquot_1324785-99193.jpg?ga=GA1.1.654264046.1720339183&semt=ais_hybrid',
                description: 'Experience the finest art pieces from local artists.',
            },
        ];

        setEvents(sampleEvents);
    }, []);

    return (
        <motion.div className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h1>Welcome to Festiva</h1>
            <p>Your one-stop solution for booking exciting events in your city. Discover concerts, workshops, exhibitions, and much more!</p>

            <h2>Featured Events</h2>
            <div className="event-list">
                {events.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>

            <h2>Why Choose Us?</h2>
            <p>We provide a seamless event booking experience with various events tailored to your interests. Our platform allows you to:</p>
            <ul>
                <li>Discover a wide range of events</li>
                <li>Book tickets effortlessly</li>
                <li>Get the latest updates on your favorite events</li>
            </ul>

            <h2>Testimonials</h2>
            <Testimonials /> {/* Use the Testimonials component */}

            <section className="newsletter-signup">
                <h2>Stay Updated!</h2>
                <p>Subscribe to our newsletter for the latest updates on upcoming events and exclusive offers.</p>
                <form>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        </motion.div>
    );
};

export default Home;
