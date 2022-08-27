import perfil from '../images/fotoHello.jpg'
import cv from './CVactual.pdf'

function Nav() {


    function hiddenMenu (e) {
        e.preventDefault()
        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden')

    }
    

    return (
        <div className="h-screen bg-gradient-to-t from-white to-cyan-300 ">
            <nav className=" flex items-center justify-between flex-wrap bg-cyan-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <span className="font-semibold text-2xl tracking-tight">Fullstack Developer</span>
                </div>
                <div className="block lg:hidden">
                    <button id='botonMenu'  onClick={(e)=>{hiddenMenu(e)}} className="flex items-center px-3 py-2 border rounded text-cyan-200 border-cyan-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div id='menu' className="w-full flex-grow duration-150 hidden  lg:flex lg:items-center lg:w-auto text-center">
                    <div className="text-sm lg:flex-grow">
                    <a href="#skills" className=" block mt-4  md:text-lg lg:inline-block lg:mt-0 text-cyan-100 hover:text-white  mr-4">Habilidades
                    </a>
                    <a href="#proyect" className="block  mt-4 md:text-lg  lg:inline-block lg:mt-0 text-cyan-100 hover:text-white mr-4">Proyectos
                    </a>
                    <a href="#contacto" className="block  mt-4 md:text-lg lg:inline-block lg:mt-0 text-cyan-100 hover:text-white mr-4">Contáctame
                    </a>
                    </div>
                    <div>
                    <a download="CV-Developer" href={cv} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white md:text-lg hover:border-transparent hover:text-cyan-500 hover:bg-white mt-4 lg:mt-0 ">Descargar CV</a>
                    </div>
                </div>
            </nav>
            <div className="flex rounded-xl justify-center mt-32 items-center container w-3/4 mx-auto bg-cyan-400  lg:h-3/6 lg:mt-40">
                <div className="grid gap-8 pt-5  justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:p-0">
                    <div key="cosa" className="px-5 flex flex-col bg-cyan-400 ">
                        <div className="overflow-auto rounded-xl">
                        <img src={perfil} alt="portada"/>
                        </div>
                    </div>
                    <div className="p-4">
                        <h5 className="text-2xl text-white md:text-3xl font-bold md:mt-3 ">HELLO WORLD</h5>
                        <p className="md:mt-3 text-white font-semibold md:text-xl">Soy Lautaro Ferreyra</p>
                        <p className="md:mt-3 text-white "> Un programador FullStack en continuo crecimiento y apasionado por el aprendizaje que da el enfrentar nuevos desafios</p>
                        <p className="md:mt-3 text-white "> Debo gran parte de mis conocimientos y aptitudes al <a className="hover:text-yellow-300 font-semibold" href="https://www.soyhenry.com/">Bootcamp Soy Henry</a>, aqui realize mis proeyctos hasta la fecha...</p>
                    </div>

                </div>
            </div>

        </div>
    );
  }
  
  export default Nav;