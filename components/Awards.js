import infromation from "./information.json";
export default function Awards() {
  const awards = infromation.awards;

  function getAwards() {
    return awards.map((award, index) => {
    
      return (
        <div className="col-md-12 pb-2" key={index}>
          <div>
            <b>{award.name}</b>
          </div>
          <div className="font14">{award.tenure}</div>
          <div className="font14" style={{color : "gray"}}>{award.description}</div>
          
        </div>
      );
    });
  }

  return (
    <div className="container shadow rounded mt-4">
      <div className="row p-4">
        <h3 className="subheading"><b>Awards</b></h3>
        {getAwards()}
      </div>
    </div>
  );
}
