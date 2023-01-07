import lol from "../../img/LoL_icon.png";
import InterestCard from "./InterestCard";
import reactIcon from "../../img/React-icon.png";
import genshin from "../../img/genshin.jfif";
import osu from "../../img/osu.png";
import hoi4 from "../../img/hoi4.png";
import eu4 from "../../img/eu4.png";
import civ6 from "../../img/civ6.jfif";

const interests_list = [
  { key: "0", img: lol, description: "league of legends" },
  { key: "1", img: genshin, description: "genshin impact" },
  { key: "2", img: osu, description: "Osu!"},
  { key: "3", img: hoi4, description: "Heart of Iron IV"},
  { key: "4", img: eu4, description: "Europa Universalis"},
  { key: "5", img: civ6, description: "Civiliazation"}
];

const Interests = () => {
  return (
    <div className="interests">
      <div className="interests__intro">
        <h2>Interests</h2>
        <p>I love to play games in my free time. Here is a list of games I play:</p>
      </div>
      <div className="interests__game">
        {interests_list.map((i) => (
          <InterestCard img={i.img} description={i.description} />
        ))}
      </div>
    </div>
  );
};

export default Interests;
