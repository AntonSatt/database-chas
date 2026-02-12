import { useState } from "react";
import studyContent from "../studyContent";

export default function Study({ onTestYourself }) {
  const [openTopic, setOpenTopic] = useState(null);
  const [openSections, setOpenSections] = useState({});

  function toggleTopic(idx) {
    setOpenTopic(openTopic === idx ? null : idx);
    setOpenSections({});
  }

  function toggleSection(sectionIdx) {
    setOpenSections((prev) => ({
      ...prev,
      [sectionIdx]: !prev[sectionIdx],
    }));
  }

  return (
    <div className="study">
      <h2 className="study-heading">Choose a topic to review</h2>
      <div className="topic-list">
        {studyContent.map((topic, tIdx) => {
          const isOpen = openTopic === tIdx;
          return (
            <div key={topic.category} className="topic-card">
              <button
                className={`topic-header ${isOpen ? "open" : ""}`}
                onClick={() => toggleTopic(tIdx)}
              >
                <span className="topic-title">{topic.category}</span>
                <span className="topic-count">
                  {topic.sections.length} sections
                </span>
                <span className="chevron">{isOpen ? "\u25B2" : "\u25BC"}</span>
              </button>

              {isOpen && (
                <div className="topic-body">
                  {topic.sections.map((section, sIdx) => {
                    const sectionOpen = !!openSections[sIdx];
                    return (
                      <div key={sIdx} className="section-card">
                        <button
                          className={`section-header ${sectionOpen ? "open" : ""}`}
                          onClick={() => toggleSection(sIdx)}
                        >
                          <span>{section.title}</span>
                          <span className="chevron">
                            {sectionOpen ? "\u25B2" : "\u25BC"}
                          </span>
                        </button>
                        {sectionOpen && (
                          <ul className="bullet-list">
                            {section.bullets.map((bullet, bIdx) => (
                              <li key={bIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}

                  <button
                    className="btn-primary test-yourself-btn"
                    onClick={() => onTestYourself(topic.category)}
                  >
                    Test yourself on {topic.category}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
