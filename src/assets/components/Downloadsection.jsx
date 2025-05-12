import React, { useEffect, useState } from 'react';
import programsData from './programs.json'; // JSON ფაილის იმპორტი

function Downloadsection({ activeCategory }) {
  const [programs, setPrograms] = useState({});

  // JSON ფაილიდან მონაცემების გადმოწერა
  useEffect(() => {
    setPrograms(programsData);
  }, []);

  const activePrograms = activeCategory ? programs[activeCategory] : [];

  return (
    <section className='main-section'>
      <div className="programs-container">
        {activePrograms.length > 0 ? (
          activePrograms.map((program, index) => (
            <div className="program-card" key={index}>
              <h3>{program.name}</h3>
              <p>{program.description}</p>
              <button>Download</button>
            </div>
          ))
        ) : (
          <p>No programs available for this category.</p>
        )}
      </div>
    </section>
  );
}

export default Downloadsection;
