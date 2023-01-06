import avatar from "../../img/avatar.png";
import city from "../../img/Liuzhou.jpg";
import golden from "../../img/downtowngolden.jpg";

const About = () => {
  return (
    <div>
      <div className="about-row">
        <div className="circular-icon about-row__icon">
          <img src={avatar} alt="reed's portfolio icon"></img>
        </div>
        <div className="about-row__left-edge"></div>
        <div className="about-row__triangle"></div>
        <span className="about-row__text-box">
          <p>
            Hi there. My name is Ruidi Huang, but you are also welcomed to call
            me Reed. I am currently a student in the Master of Computer Science
            Program of NEU at Vancouver. Though Mandarin is my native language,
            I am also fluent in English after studying in the United States for
            8 years.
          </p>
          <br />
          <br />
        </span>
      </div>

      <div className="about-row">
        <img src={city} alt="liuzhou" className="about-row__city"></img>
        <span className="about-row__text-box">
          <p>
            I was born in and lived at{" "}
            <a
              href="https://en.wikipedia.org/wiki/Liuzhou"
              target="_blank"
              rel="noreferrer"
              className="about-row__link"
            >
              {" "}
              Liuzhou{""}
            </a>
            , an industrial but charming city with the Liu river running through
            its bustling downtwon.
          </p>
        </span>
      </div>

      <div className="about-row">
        <img src={golden} alt="golden" className="about-row__golden"></img>
        <span className="about-row__text-box">
          <p>
            The city of Golden became my home for 4 years when I attended
            <a
              href="https://en.wikipedia.org/wiki/Colorado_School_of_Mines"
              target="_blank"
              rel="noreferrer"
              className="about-row__link"
            >
              {" "}
              Colorado School of Mines{""}
            </a>
            &nbsp;from 2017 to 2022. It is a small but remarkable town in the
            Rocky Mountains. My reluctance for outdoor activities back then was
            one of my biggest regrets.
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
