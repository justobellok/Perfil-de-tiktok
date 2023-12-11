import { useState } from "react";
import Api from "./api"
import "./video.css"

const Like = () => {

const [datos, setDatos] = useState([])

 Api({keyword: "gato"}).then(gifs => setDatos(gifs))

   return(
<div className="videos">
  
{
  datos.map((item, index) => (
    <img src={item.url} key={index}/>
  ))
}

</div>
   )
  };
  
  export default Like;