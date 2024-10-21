import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        // Sample data; replace this with actual API call when available
        const sampleEvents = [
            { 
                id: 1, 
                title: 'Concert Night', 
                date: '2024-11-01', 
                time: '6:00 PM', 
                venue: 'City Arena', 
                price: '$50', 
                image: 'https://img.freepik.com/free-photo/large-crowd-people-are-standing-front-stage-with-light-it_1340-32808.jpg?size=626&ext=jpg&ga=GA1.1.654264046.1720339183&semt=ais_hybrid', 
                description: 'Join us for an evening of great music!' 
            },
            { 
                id: 2, 
                title: 'Tech Conference', 
                date: '2024-12-05', 
                time: '10:00 AM', 
                venue: 'Tech Hub', 
                price: '$100', 
                image: 'https://img.freepik.com/free-photo/expert-doing-vr-demonstration-ai-tech-summit-event_482257-94898.jpg?ga=GA1.1.654264046.1720339183&semt=ais_hybrid', 
                description: 'Explore the latest in technology and innovation.' 
            },
            { 
                id: 3, 
                title: 'Art Exhibition', 
                date: '2024-10-20', 
                time: '2:00 PM', 
                venue: 'Art Gallery', 
                price: '$20', 
                image: 'https://img.freepik.com/premium-photo/quotart-sale-area-featuring-student-artworks-galleryquot_1324785-99193.jpg?ga=GA1.1.654264046.1720339183&semt=ais_hybrid', 
                description: 'Experience the finest art pieces from local artists.' 
            }
        ];

        // Uncomment below to fetch from API
        // axios.get('/api/events')
        //     .then(response => {
        //         setEvents(response.data);
        //         setFilteredEvents(response.data); // Initialize with all events
        //     })
        //     .catch(error => console.error(error));

        // Set sample events
        setEvents(sampleEvents);
        setFilteredEvents(sampleEvents); // Initialize with all sample events
    }, []);

    return (
        <div className="events">
            <h1>All Events</h1>
            <div className="event-list">
                {filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default Events;
