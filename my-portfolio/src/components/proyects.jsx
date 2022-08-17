import food from "../images/foodjpg.jpg"
import diamonds from "../images/diamondsjpg.jpg"
const proyectos = [{
    name: "Recipe Book",
    img: food,
    alt: "proyecto individual",
    descripcion: "Este pryecto consistio en el consumo de Api Sopooncular para realizar una pagina web con recetas gastronómicas. Es posible filtrar todas las recetas, generar nuevas y ver el detalle de las mismas. En la parte visual utilice React, Redux, Javascript, Css y SweetAlert. Mientras que para el back implemente NodeJs, PostgresSQL y Sequelize",
    href: "https://pi-food-sigma.vercel.app/",
    repo: "https://github.com/FerreyraLautaro/Pi-FOOD"
},
{
    name: "Henry Diamonds",
    img: diamonds,
    alt: "ecommerce",
    descripcion: "Realización de E-Commerce con distintas vistas para usuarios Registrados/Invitados/Administradores. Junto a 6 compañeros/as realizamos este proyecto, donde puede realizarse filtrados anidados del producto, ver detalle, añadir a favoritos los productos y manejar un carrito de compras. A su vez de parte del back esta controladas sus rutas, manejo de stock, roles de usuarios y creación tanto de producto como de sus categorías",
    href: "https://frontend-pf-g1.vercel.app/",
    repo: "https://github.com/FerreyraLautaro/FRONTEND-PF-G1"
}]

function Proyects() {
    return (
<div id="proyect" className="container flex justify-center mx-auto w-4/5">
 <div  className="grid gap-8 mt-20 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
   
   {proyectos.map(e => {
    return (<div key={e.name} className="p-5 flex flex-col shadow-cyan-300 shadow-2xl">
    <div className="overflow-auto rounded-xl">
    <img src={e.img} alt={e.alt || ""}/>
    </div>
    <h5 className="text-2xl md:text-3xl font-bold mt-3 ">{e.name}</h5>
    
    <p className="mt-3 ">{e.descripcion}</p>
    <div className="flex justify-around items-center">
    <a target="_blank" className="w-2/6 mt-2 bg-cyan-300 block  rounded-lg text-base font-normal text-center text-gray-800 hover:shadow-lg hover:shadow-cyan-300 hover:-translate-y-1 transition-all duration-150" href={e.href || ""}>Sitio Web</a>
    <a target="_blank" className="w-2/6 mt-2 bg-cyan-300 block  rounded-lg text-base font-normal text-center text-gray-800 hover:shadow-lg hover:shadow-cyan-300 hover:-translate-y-1 transition-all duration-150" href={e.repo || ""}>Repositorio</a>
    </div>
    
  </div>)
   })
   }
 </div>
 </div>
    );
  }
  
  export default Proyects;