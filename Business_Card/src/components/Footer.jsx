import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://twitter.com/rxrld">
        <FaTwitterSquare size={42} style={{ color: "#918e9b" }} />
      </a>
      <a href="https://github.com/SeniorSam9">
        <FaGithubSquare size={42} style={{ color: "#918e9b" }} />
      </a>
    </div>
  );
}
