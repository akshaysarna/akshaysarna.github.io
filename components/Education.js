import infromation from "./information.json";
export default function Education() {
  const educationDetails = infromation.education;

  function getEducation() {
    return educationDetails.map((education, index) => {
    
      return (
        <div className="col-md-12 pb-2" key={index}>
          <div>
            <b>{education.name}</b>
          </div>
          <div className="font14">{education.degree}, {education.study}</div>
          <div className="font14 ">{education.start} - {education.end}</div>
        </div>
      );
    });
  }

  return (
    <div className="container shadow rounded mt-4">
      <div className="row p-4">
        <h3 className="subheading"><b>Education</b></h3>
        {getEducation()}
      </div>
    </div>
  );
}
