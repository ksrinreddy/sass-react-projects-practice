import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const TabsApp = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <>
        <section className="loading">
          <h2 className="laoding-text">Loading...</h2>
        </section>
      </>
    );
  }

  const { company, dates, title, duties } = jobs[value];

  return (
    <>
      <section className="jobs-section">
        <header className="title">
          <h1 className="title__text">Experience</h1>
          <div className="title__underline"></div>
        </header>
        <div className="section-center">
          <div className="jobs-btn-container">
            {jobs.map((job, index) => {
              return (
                <button
                  key={job.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${value === index && "active"}`}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <article className="job-info">
            <h3 className="job-title">{title}</h3>
            <h5 className="company">{company}</h5>
            <h4 className="dates">{dates}</h4>
            {duties.map((duty, index) => {
              return (
                <>
                  <div className="duties">
                    <div>
                      <FaAngleDoubleRight className="duty-icon" />
                    </div>
                    <p className="job-desc" key={index}>
                      {duty}
                    </p>
                  </div>
                </>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default TabsApp;
