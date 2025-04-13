import infromation from "./information.json";
export default function Certificates() {
  const certificates = infromation.certificates;

  function getCertificates() {
    return certificates.map((certificate, index) => {
    
      return (
        <div className="col-md-12 pb-2" key={index}>
          <div>
            <b>{certificate.name}</b>
          </div>
          <div className="font14">{certificate.tenure}</div>
          <div className="font14" style={{color: "gray"}}>{certificate.description}</div>
        </div>
      );
    });
  }

  return (
    <div className="container shadow rounded mt-4">
      <div className="row p-4">
        <h3 className="subheading"><b>Certificates</b></h3>
        {getCertificates()}
      </div>
    </div>
  );
}
