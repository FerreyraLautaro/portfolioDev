const skills = [{
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "a"
},
{
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "b"
},
{
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "c"
},
{
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "d"
},
{
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "e"
},
{
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "f"
},
{
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "g"
},
{
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "h"
},
{
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "i"
},
{
    img: "https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png",
    alt: "j"
},
]

function Skills() {
    return (
        <div >

        <div className="w-full  mt-5 flex shadow-lg shadow-cyan-200 mb-2 justify-center ">
            <h1 className="py-4 mb-4  mt-32 md:mt-6 text-3xl font-normal text-center text-gray-800">Skills & Proyects</h1>
            </div>
                <section className="p-4 flex gap-4 w-full snap-x overflow-x-auto">
                {skills.map(e => {
                return(  <div key={e.alt} className="snap-start shrink-0 rounded w-1/4 lg:w-1/5  overflow-hidden">
                <img src={e.img} alt={e.alt}/>
                </div>
                )})
                }
                </section>
        </div>
    );
  }
  
  export default Skills;