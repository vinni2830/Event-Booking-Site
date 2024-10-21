import React from 'react';

const UserProfile = () => {
    // Dummy user data
    const user = {
        name: "John Doe",
        age: 28,
        gender: "Male",
        email: "johndoe@example.com",
        address: "123 Main St, Springfield, USA",
        profilePicture: "/image.png" // Use the image from public directory
    };

    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <div className="profile-card">
                <img src={user.profilePicture} alt="Profile" className="profile-picture" />
                <div className="profile-details">
                    <h2>{user.name}</h2>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Address:</strong> {user.address}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
