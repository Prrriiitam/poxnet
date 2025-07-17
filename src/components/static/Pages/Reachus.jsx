import React from 'react';
import TeamCard from './TeamCard';
import teamdata from '../Models/data/teamdata';

const Reachus = () => {
  return (
    <div className="bg-black min-h-screen py-12 px-4">
      <h2 className="text-white text-3xl text-center font-bold mb-12  ">
        The Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamdata.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

 export default Reachus;

// import React from 'react';
// import TeamCard from './TeamCard';
// import teamdata from '../Models/data/teamdata';

// const Reachus = () => {
//   return (
//     <div className="bg-black min-h-screen py-12 px-4 flex flex-col items-center">
//       <h2 className="text-white text-4xl font-bold mb-12 border-b-2 border-white">
//         The Team
//       </h2>
//       <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
//         {teamdata.map((member, index) => (
//           <TeamCard key={index} member={member} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Reachus;

