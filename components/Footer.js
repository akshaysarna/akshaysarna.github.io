import infromation from "./information.json";
export default function Footer() {
  const firstName = infromation.firstName;
  const lastName = infromation.lastName;
  let socials = infromation.socials;

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
    <footer className="d-flex flex-wrap py-3 my-4 ">
      <div className="container border-top">
        <div className="h4 text-center mt-3 text-secondary">
          {firstName + " " + lastName}
        </div>
        <div className="text-center">
          <ul className="nav justify-content-center">{getSocialLinks()}</ul>
        </div>
      </div>
    </footer>
  );
}
