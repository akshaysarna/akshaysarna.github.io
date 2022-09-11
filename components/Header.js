import information from "./information.json";
import Image from "next/image";
export default function HeaderComponent() {
  let socials = information.socials;

  function getSocialLinks() {
    return socials.map((social, index) => {
      return (
        <li className="nav-item" key={index}>
          <a className="nav-link" href={social.link} title={social.Title}>
            <i className={`bi ${social.icon}`}></i>
          </a>
        </li>
      );
    });
  }
  return (
    <header>
      <div className="container">
        <div className="py-3">
          <div className="text-center">
            <Image
              src="/dp.jpg"
              className="rounded-circle"
              alt={`${information.firstName + " " + information.lastName}`}
              width="150"
              height="150"
            />
          </div>
          <div className="row">
            <div className="col-md-6 basic-info">
              <h1 className="heading">
                {information.firstName + " " + information.lastName}
              </h1>
              <div>
                {information.currentDesignation +
                  " at " +
                  information.currentOrganization}
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav social-info">{getSocialLinks()}</ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
