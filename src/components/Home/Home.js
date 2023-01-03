import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="section-home">
      <div className="section-home__bg-color">
        <div className="section-home__left-box">
          <h2 className="section-home__left-box__heading-small">Welcome to </h2>
          <h1 className="section-home__left-box__heading-large">Reed's Home Page</h1>
        </div>
        <div className="section-home__right-box">
          <h1 className="section-home__right-box__heading-medium">Continue Browsing</h1>
          <Link to="/about" className="section-home__right-box__anchor">
          Visit About
        </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
