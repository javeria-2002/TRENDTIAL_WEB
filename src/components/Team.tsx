import React from 'react';
import './Team.css'; // External CSS for additional 
import John from '../../public/John.jpg';
import Alice from '../../public/Alice.jpg';
import Jake from '../../public/Jake.jpg';
import Olivia from '../../public/Olivia.jpg';

const teamMembers = [
  {
    name: 'Carren Doe',
    role: 'Marketing Expert',
    image: 'Olivia.jpg',
    bio: 'Carren is a highly experienced marketing expert with over 10 years in the industry.',
  },
  {
    name: 'Jane Smith',
    role: 'Creative Director',
    image: 'Jake.jpg',
    bio: 'Jane is responsible for overseeing creative projects and ensuring the best design solutions.',
  },
  {
    name: 'Alice Brown',
    role: 'Developer',
    image: 'Olivia.jpg',
    bio: 'Alice is the technical mastermind behind our platform, ensuring everything runs smoothly.',
  },
  {
    name: 'Mike Johnson',
    role: 'Data Analyst',
    image: 'Jake.jpg',
    bio: 'Mike uses data to drive strategic decisions and improve performance.',
  },
  {
    name: 'Emily Davis',
    role: 'UX/UI Designer',
    image: 'Olivia.jpg',
    bio: 'Emily creates user-friendly designs and enhances user experience.',
    },
  {
    name: 'Blake Davis',
    role: 'UX/UI Designer',
    image: 'Jake.jpg',
    bio: 'Blake creates user-friendly designs and enhances user experience.',
  },
];

const Team = () => {
  return (
      <section className="team-section" id="team">
      <div className="bubble-background">
        {/* Add bubble elements */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div className="container">
        <h1 className="section-title">Meet Our Team</h1>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-card">
                <div className="card-front">
                  <div className="image-container">
                    <img src={member.image} alt={member.name} className="team-img" />
                  </div>
                </div>
                <div className="card-back">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
