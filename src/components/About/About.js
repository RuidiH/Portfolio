import avatar from "../../img/avatar.png";
import city from "../../img/Liuzhou.jpg";

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
        <div className="about-row__city">
          <img src={city} alt="liuzhou"></img>
        </div>
        <span className="about-row__text-box">
          <p>
            I was born in and lived at{" "}
            <a
              href="https://en.wikipedia.org/wiki/Liuzhou"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Liuzhou{""}
            </a>
            , an industrial but charming city with the Liu river running through
            its bustling downtwon.
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
