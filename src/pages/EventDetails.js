import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const sampleEventsDetails = {
    1: {
        title: 'Concert Night',
        description: 'Join us for an evening of great music featuring local artists and bands.',
        date: '2024-11-01',
        image: 'https://img.freepik.com/free-photo/large-crowd-people-are-standing-front-stage-with-light-it_1340-32808.jpg?size=626&ext=jpg&ga=GA1.1.654264046.1720339183&semt=ais_hybrid',
    },
    2: {
        title: 'Tech Conference',
        description: 'Explore the latest in technology and innovation at our annual tech conference.',
        date: '2024-12-05',
        image: 'https://via.placeholder.com/600',
    },
    3: {
        title: 'Art Exhibition',
        description: 'Experience the finest art pieces from local artists in our exclusive exhibition.',
        date: '2024-10-20',
        image: 'https://via.placeholder.com/600',
    },
};

const EventDetails = () => {
    const { id } = useParams();
    const event = sampleEventsDetails[id] || {};

    return (
        <div className="event-details">
            <h1>{event.title}</h1>
            <img src={event.image} alt={event.title} />
            <p>{event.description}</p>
            <p>Date: {event.date}</p>
        </div>
    );
};

export default EventDetails;
