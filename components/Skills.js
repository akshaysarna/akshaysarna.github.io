import infromation from "./information.json";

export default function Skills() {
    const skills = infromation.skills;
    function getSkills() {
        return skills.map(skill =>  <span class="badge rounded-pill" key={skill}>{skill}</span>);
    }
    return (
        <div className="container shadow rounded mt-4">
          <div className="row p-4">
            <h3 className="subheading"><b>Skills</b></h3>
            {getSkills()}
          </div>
        </div>
    );
}