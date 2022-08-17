import github from '../images/github.png'
import wsp from '../images/wsp.png'
import linkedin from '../images/linkedIn.png'

function Contact() {
    return (
        <div className="flex justify-center h-3/4 mb-32" >
            <form id='contacto' class="flex w-full max-w-sm space-x-3">
                <div class="w-full px-5 py-10 m-auto mt-32 rounded-lg shadow-xl shadow-cyan-500">
                    <div class="mb-6 text-3xl font-normal text-center text-gray-800">
                Contáctame!!
                    </div>
                <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div class="col-span-2 lg:col-span-1">
                    <div class=" relative ">
                    <input type="text" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent" placeholder="Name"/>
                    </div>
                </div>
                <div class="col-span-2 lg:col-span-1">
                    <div class=" relative ">
                        <input type="text" id="contact-form-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent" placeholder="email"/>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label class="text-gray-700" for="name">
                            <textarea class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div class="col-span-2 text-right">
                        <button type="submit" class="py-2 px-4  font-mono bg-cyan-300 text-black w-full text-center text-base font-semibold hover:shadow-lg hover:shadow-cyan-300 hover:-translate-y-1 transition-all duration-150">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </form>

        <div className="flex flex-col px-5 py-10 ml-10 mt-32 rounded-lg shadow-xl shadow-cyan-500 ">
            <div className="h-1/3 w-full flex items-center "> <a target="_blank" href="https://github.com/FerreyraLautaro"><img className='hover:-translate-y-1 transition-all duration-150' src={github} alt="GitHub" /></a></div>
            <div className="h-1/3 w-full flex items-center"><a target="_blank" href="https://www.linkedin.com/in/lautarof-developer/"><img className='hover:-translate-y-1 transition-all duration-150' src={linkedin} alt="LinkedIn" /></a></div>
            <div className="h-1/3 w-full flex items-center"><a target="_blank" href="https://api.whatsapp.com/send?phone=3513348627"><img className='hover:-translate-y-1 transition-all duration-150' src={wsp} alt="WhatsApp" /></a></div>
        </div>
        </div>
    );
  }
  
  export default Contact;