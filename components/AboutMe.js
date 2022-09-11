import infromation from "./information.json";
export default function AboutMe() {
  const aboutme = infromation.aboutme;
  const contact = infromation.contact;
  return (
    <div className="container shadow rounded mt-3">
      <div className="row p-4">
        <div className="col-md-6">
          <h3 className="subheading">About</h3>
          <p className="font14">{aboutme}</p>
        </div>
        <div className="col-md-6">
          <h3 className="subheading">Contact</h3>
          <div className="row">
            <div className="col-sm-2">
              <b>Email</b>
            </div>
            <div className="col-md-8">
              <a
                href={`mailto:${contact.email}`}
                className="text-decoration-none"
              >
                {contact.email}
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <b>Mobile</b>
            </div>
            <div className="col-md-8">
              <a
                href={`tel:+91-${contact.mobileNumber}`}
                className="text-decoration-none"
              >
                +91-{contact.mobileNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
