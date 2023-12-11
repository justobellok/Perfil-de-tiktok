import {
  FaAngleLeft,
  FaBell,
  FaShare,
} from "react-icons/fa6";
import "./perfil.css";
import Usuario from "./Usuario";
import Principal from "./Principal";

const Perfil = ({usuario}) => {
  return (
    <>
      <header className="header">
        <button>
          <FaAngleLeft className="left" />
        </button>
        <div className="nombre">
          <h3>{usuario}</h3>
        </div>
        <div className="share">
          <button>
            <FaBell className="bell" />
          </button>
          <button>
            <FaShare />
          </button>
        </div>
      </header>

      <Usuario
      imagen="JustoBello"
      nombre="JustoBello"
      siguiendo="132"
      seguidores="10.4 K"
      megusta="32.7 M"
      seguir="Siguiendo"
      info="Información"
      />

      <Principal />
    </>
  );
};

export default Perfil;
