import "./usuario.css"
import { FaInstagram, FaCaretDown } from "react-icons/fa6";

const Usuario = ({imagen, nombre, siguiendo, seguidores, megusta, seguir,info})=>{
    return(
        <>
        <main className="main">
    <img src={`https:/unavatar.io/${imagen}`} className="img" alt="" />
     <div>
        <h3>@{nombre}</h3>
     </div>
     <div className="btn">
        <button>
            {siguiendo}
           <span className="follow">Siguiendo</span>
        </button>
        <button>
            {seguidores}
           <span className="follow">Seguidores</span>
        </button>
        <button>
            {megusta}
           <span className="follow">Me gusta</span>
        </button>

     </div>

     <div className="info">
     <button>
        <span>{seguir}</span>
     </button>
     <button>
     <FaInstagram />
     </button>
     <button>
     <FaCaretDown />
     </button>
     </div>

     <div className="acerca">
       <p>
        {info}
       </p>
     </div>
        </main>
        
        </>
    )
}

export default Usuario;