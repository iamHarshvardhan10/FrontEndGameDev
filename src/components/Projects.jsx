import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="projectContainer">
      <div className="projectHead">
        <h2>Our game Projects</h2>
        <div className="iconTab">
          <span>All Projects </span>
          <FaArrowRight className="icon" />
        </div>
      </div>
      <div className="projectImages">
        <div className="imageBox1">
          <div className="boxContent">
            <span>Electronic Games</span>
            <h1>Worlds Of Robots</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              velit perspiciatis culpa repudiandae obcaecati sed?
            </p>
          </div>
        </div>
        <div className="imageBox2">
          <div className="boxContent">
            <span>Gaming Company</span>
            <h1>Beautiful Amalthea</h1>
            <p>
              Dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="imageBox3">
          <div className="boxContent">
            <span>Games X</span>
            <h1>The Warriors Lounge</h1>
            <p>
              Amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo tellus.
            </p>
          </div>
        </div>
        <div className="imageBox4">
          <div className="boxContent">
            <span>Super Games</span>
            <h1>Jungle Adventures</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              velit perspiciatis culpa repudiandae obcaecati sed?
            </p>
          </div>
        </div>
      </div>
      <div className="chooseContainer">
        <div className="chooseHead">
          <span>WHY CHOOSE US</span>
          <h1>
            We have put together a very talented and highly skilled visual
            artist...
          </h1>
        </div>
        <div className="chooseBoxes">
          <div className="chooseBox">
            <h3>High Standards</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </span>
          </div>
          <div className="chooseBox">
            <h3>Cooperative Spirit</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </span>
          </div>
          <div className="chooseBox">
            <h3>Creative Passion</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </span>
          </div>
        </div>
        <hr style={{ marginTop: "40px" }} />
      </div>

      <div className="connectContainer">
        <div className="connectInfo">
          <h1>Let’s talk about your project</h1>
          <span>
            Phasellus ut interdum nunc, vel pretium ligula. Nam tincidunt enim
            ut ligula vehicula lorem ipsum dolor sit amet.
          </span>
          <button>Get In Touch</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
