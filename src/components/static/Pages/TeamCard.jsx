import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const TeamCard = ({ member }) => {
  return (
    <div className="bg-black text-white border border-gray-600 rounded-xl p-6 w-full max-w-xs flex flex-col items-center shadow-lg hover:shadow-white transition-all duration-300">
      <img
        src={member.image}
        alt={member.name}
        className="rounded-xl h-64 w-48 object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
      <p className="text-center text-gray-300 mb-1">{member.role}</p>
      <p className="text-sm text-gray-400">{member.title}</p>
      <p className="text-sm text-gray-400 mb-4">{member.university}</p>
      <div className="flex space-x-4 text-2xl">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
