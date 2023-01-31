import { projectLifecycleData } from "../../../Data/projectLifecycleData";
import "./timeline.css";

const Timeline = () => {
  return (
    <div className="app__container">
      <div className="timeline_head-text mtb-2">
        <div className="head-text">PROJECT LIFECYCLE</div>
        <div className="p-text">
          The Project Lifecycle is the sequence of phases through which a
          project progresses.
        </div>
      </div>

      <div className="timeline">
        {projectLifecycleData.map((data) => (
          <div key={data.id} className={data.className}>
            <div className="timeline_count">{data.id}</div>

            <img className="timeline_icon" src={data.icon} alt="" />

            <div className="timeline_content">
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
