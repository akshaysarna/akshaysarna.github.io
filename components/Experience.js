import infromation from "./information.json";
import moment from "moment";
export default function Experience() {
  const experiences = infromation.experience;

  function getExperience() {
    return experiences.map((exp, index) => {
      let endDate = "Present";
      if (!exp.currentlyWorking) {
        endDate = moment(exp.lastDate, "DD/MM/YYYY");
        endDate = endDate.format("MMM, YYYY");
      }
      let starDate = moment(exp.joiningDate, "DD/MM/YYYY");
      let duration = `${starDate.format("MMM, YYYY")} - ${endDate}`;
      return (
        <div className="col-md-12 pb-2" key={index}>

          <div>
            <b>{exp.designation}</b>
          </div>
          <div className="font14">{exp.name}</div>
          <div className="font14">{duration}</div>
          <div className="font14 ">{exp.location}</div>
        </div>
      );
    });
  }

  return (
    <div className="container shadow rounded mt-4">
      <div className="row p-4">
        <h3 className="subheading"><b>Experience</b></h3>
        {getExperience()}
      </div>
    </div>
  );
}
