import infromation from "./information.json";
export default function AboutMe() {
  
  const contact = infromation.contact;
  const aboutme = `A Software Engineer, driven towards coding and constantly adding new hands-on experiences on latest and disruptive technologies in
order to keep up with the latest technological trends in the industry. Recognized by peers and seniors alike for excellent
communications skills, both verbal and written. Also helping the organization to achieve its goals which remaining motivated towards
career advancements.`;
  return (
    <div className="container shadow rounded mt-3">
      <div className="row p-4">
        <div className="col-md-6">
          <h3 className="subheading"><b>About</b></h3>
          <p className="font14">{aboutme}</p>
        </div>
        <div className="col-md-6">
          <h3 className="subheading"><b>Contact Details</b></h3>
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
