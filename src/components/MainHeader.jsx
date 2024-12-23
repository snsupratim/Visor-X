import { Link, useHistory } from "react-router-dom";
import Image from "../images/Hero.webp";

const MainHeader = () => {
  // const history = useHistory();

  // const handleClick = () => {
  //   history.push("/timed");
  // };
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4> Hey everyone ! </h4>

          <h1>Welcome to sn dev</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            iusto, a, debitis vitae aspernatur quam exercitationem repellat
            itaque perferendis recusandae aut ratione veniam temporibus ex.
          </p>
          {/* <button onClick={handleClick}>Go to time page</button> */}
          <Link to="/room" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
