
export default function AboutMe() {
  
  const aboutme = `A Software Engineer, driven towards coding and constantly adding new hands-on experiences on latest and disruptive technologies in
order to keep up with the latest technological trends in the industry. Recognized by peers and seniors alike for excellent
communications skills, both verbal and written. Also helping the organization to achieve its goals which remaining motivated towards
career advancements.`;
  return (
    <div className="container shadow rounded mt-3">
      <div className="row p-4">
        <div className="col-md-12">
          <h3 className="subheading"><b>About</b></h3>
          <p className="font14">{aboutme}</p>
        </div>
      </div>
    </div>
  );
}
