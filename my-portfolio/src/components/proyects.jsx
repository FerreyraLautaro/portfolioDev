const proyectos = [{
    name: "proyecto 1",
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "ecommerce",
    descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam alias sint earum voluptatibus, enim doloribus animi quidem commodi accusamus illum voluptatem quam et totam esse ullam maxime corrupti eligendi delectus.",
    href: "https://frontend-pf-g1.vercel.app/"
},
{
    name: "proyecto 2",
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "ecommerce",
    descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam alias sint earum voluptatibus, enim doloribus animi quidem commodi accusamus illum voluptatem quam et totam esse ullam maxime corrupti eligendi delectus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam alias sint earum voluptatibus, enim doloribus animi quidem ",
    href: "https://frontend-pf-g1.vercel.app/"
}]

function Proyects() {
    return (
<div className="container flex justify-center mx-auto w-4/5">
 <div className="grid gap-8 mt-5 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
   
   {proyectos.map(e => {
    return (<div key={e.name} className="p-5 flex flex-col shadow-cyan-300 shadow-2xl">
    <div className="overflow-auto rounded-xl">
    <img src={e.img} alt={e.alt || ""}/>
    </div>
    <h5 className="text-2xl md:text-3xl font-bold mt-3 ">{e.name}</h5>
    <p className="mt-3 ">{e.descripcion}</p>
    <a className="mt-2 bg-cyan-300 block text-center rounded-lg font-mono hover:shadow-lg hover:shadow-cyan-300 hover:-translate-y-1 transition-all duration-150" href={e.href || ""}>Sitio Web</a>
  </div>)
   })
   }
 </div>
 </div>
    );
  }
  
  export default Proyects;