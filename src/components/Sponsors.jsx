import React from "react";
import sponsor1 from "../assets/sponsors/Apple.png";
import sponsor2 from "../assets/sponsors/Microsoft.png";
import sponsor3 from "../assets/sponsors/Slack.png";
import sponsor4 from "../assets/sponsors/Google.png";

function Sponsors() {
  const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4];
  return (
    <div className="py-20">
      <div className="container mx-auto max-w-[1320px] text-center px-10">
        <h1 className="text-7xl font-bold">Our sponsors</h1>
        <ul className="flex flex-col md:flex-row md:justify-between mt-20 space-y-10 items-center md:space-y-0">
          {sponsors.map((sponsor, index) => (
            <li key={index}>
              <img src={sponsor} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sponsors;
