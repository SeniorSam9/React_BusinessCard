import avatar from "/Info-img.png";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
export default function Info() {
  return (
    <div className="Info">
      <img className="avatar" src={avatar} alt="avatar" />
      <h1 className="name">Senior Sam</h1>
      <h4 className="job">Full-Stack Developer</h4>
      <p className="my-web">SeniorSam.website</p>
      <div className="btns">
        <a href="mailto:rxrldHP090@outlook.com">
          <button className="email-btn">
            <FaEnvelope /> Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/rayan-al-shammari/">
          <button className="linked-btn">
            <FaLinkedin /> LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
}
