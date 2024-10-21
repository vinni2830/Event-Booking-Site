import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-details">
                <h3>{event.title}</h3>
                <p>Date: {event.date}</p>
                <p>Time: {event.time}</p>
                <p>Venue: {event.venue}</p>
                <p>Price: {event.cost}</p>
                <p>{event.description}</p>
            </div>
        </div>
    );
};

export default EventCard;
