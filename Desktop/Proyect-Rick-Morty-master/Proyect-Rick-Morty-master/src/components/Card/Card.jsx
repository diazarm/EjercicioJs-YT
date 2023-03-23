// importamos style y le pasamos el path del arhivo module para agregarle estilos.
import { Link } from "react-router-dom";
import style from "./Card.module.css";

//Aqui con destructorin, lo que hacemos es sacar los props, por ser un objeto. pero hay q poner {} en el ingreso
export default function Card({id,name,species,gender,image,onClose}) {
//a partir de aqui, va renderizado
   return (
//los dos div de className son solamente para darle estilo.
      <div className={style.preContainer}>
      <div className={style.container}>
{/* Aqui llega la funcion que hicimos en App y paso por Nav y esta dentro de una CB para que no se ejecute sola. */}
         <button onClick={()=> onClose (id)} className={style.closeButton}>X</button>
 {/* Aca en Link abraza a name para que nos lleve al detalle del nombre por el id */}        
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
{/* llamamos a image, que seria la foto de la card, y solo lo ponemos asi {image} porque esta desectrucutrada */}
         <img  src={image} className={style.imagen} alt="imageCard" /> 
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>Card #{id}</h2>
      </div>
</div>      
   );
}



