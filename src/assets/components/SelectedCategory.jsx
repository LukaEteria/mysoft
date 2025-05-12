import React, { useState, useEffect } from "react";
import programsData from "../../assets/components/programs.json"; // JSON-ის იმპორტი

export default function SelectedCategory({ category }) {
  const [loading, setLoading] = useState(true);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    if (!category) return;

    setLoading(true);
    setTimeout(() => {
      const selectedPrograms = programsData[category.name] || [];
      setPrograms(selectedPrograms);
      setLoading(false);
    }, 1000); // ან დატოვე ამხელა delay
  }, [category]);

  if (!category) {
    return <h2 className="SelectedCategory">აირჩიე კატეგორია</h2>;
  }

  return (
    <div className="SelectedCategory" style={{ position: "relative" }}>
      <div className="selected-wrapper">
        <img
          src={category.icon}
          alt={category.name}
          className="selected-icon"
        />
        <h2 className="selected-title">{category.name}</h2>
      </div>

      <div className="main_content">
        {loading ? (
          <div className="spinners">
            <div className="loaders">
              <div className="loaders-inner"> </div>
            </div>
          </div>
        ) : (
          <ul className="programs-list">
            {programs.map((program, index) => {
              return (
                <li key={index} className="program-item">
                  <div className="program-image-container">
                    {program.image && (
                      <img
                        src={program.image}
                        alt={program.name}
                        className="program-image"
                      />
                    )}
                  </div>
                  <div className="program-info">
                    <h4 className="h4">{program.name}</h4>
                    <p className="pteg">{program.description}</p>
                    <p>{program.class}</p>
                  </div>
                  <a className="downlaods" href={program.download} target="_blank" rel="noopener noreferrer">
                  <button class="cssbuttons-io-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                      ></path>
                    </svg>
                    <span>Download</span>
                  </button>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
