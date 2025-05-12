import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Discover our most popular workout routines that combine strength training,
          cardio, and flexibility to help you reach your fitness goals faster and stay energized.
        </p>
        <img src="/fit.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our high-intensity bootcamps led by expert trainers to push your limits,
          build resilience, and stay committed to a healthier lifestyle.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning Bootcamp</h4>
            <p>
              Build muscle and endurance through structured workouts designed to increase power,
              improve balance, and promote full-body strength.
            </p>
          </div>
          <div>
            <h4>Cardio Burn Bootcamp</h4>
            <p>
              Boost your heart health and burn calories with a mix of HIIT and aerobic routines
              that keep your energy levels high.
            </p>
          </div>
          <div>
            <h4>Flexibility & Mobility Bootcamp</h4>
            <p>
              Enhance your range of motion and reduce injury risk through dynamic stretching,
              yoga flows, and functional mobility drills.
            </p>
          </div>
          <div>
            <h4>Full Body Transformation Bootcamp</h4>
            <p>
              A total fitness challenge that combines strength, cardio, and flexibility
              to help you transform your body in just a few weeks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
