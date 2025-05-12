import React, { useState } from 'react';
import Navigation from '../assets/components/Navigation';

import windowsIcon from '../assets/windows.png';
import macIcon from '../assets/mac-os-logo.png';
import androidIcon from '../assets/android-logo.png';
import androidGames from '../assets/game.png';
import pcIcon from '../assets/computer.png';

import SelectedCategory from '../assets/components/SelectedCategory';

function Programs() {
  const categories = [
    { name: "Windows", icon: windowsIcon },
    { name: "Mac", icon: macIcon },
    { name: "Android Apps", icon: androidIcon },
    { name: "Android Games", icon: androidGames },
    { name: "PC Games", icon: pcIcon }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default: Windows

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container">
      <div className="hood">
        <Navigation />
        <div className="choes">
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <button
                className={`filter-button ${activeCategory.name === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                <img src={category.icon} alt={category.name} className="icons" />
                {category.name}
              </button>
              {index !== categories.length - 1 && <div className="divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
        <SelectedCategory category={activeCategory} />
    </div>
  );
}

export default Programs;
