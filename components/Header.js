import information from "./information.json";
import Image from "next/image";
export default function HeaderComponent() {
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
            <div className="col-md-6">
              <h1 className="heading">
                {information.firstName + " " + information.lastName}
              </h1>
              <div>
                {information.currentDesignation +
                  " at " +
                  information.currentOrganization}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
