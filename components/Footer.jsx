import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="flex justify-evenly items-center border-solid border-t-2 border-white mt-5">
      <small className="mr-2">Creado por Marco Luchi</small>
      <div className="flex">
        <a
          href="https://www.linkedin.com/in/marcoluchi11/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillLinkedin size={30} className="mr-2" />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.github.com/marcoluchi11/"
        >
          <AiFillGithub size={30} />
        </a>
      </div>
    </footer>
  );
}
