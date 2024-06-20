import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'> 
      <h1 className='texto'>Mi blog personal</h1>
    
      < Testimonio
       nombre ='Adoptando el trabajo remoto: Mi viaje y consejos para el éxito'
       id = 'N°1'
       imagen ='uno'
       testimonio ='A veces, no saber es algo bueno porque te impulsa a formular diferentes preguntas, a explorar dónde, cómo y qué. Utilicé internet para investigar los roles profesionales más demandados. Comencé a registrarme en sitios de empleo y portales profesionales, me conecté con mi red profesional y empecé a preguntar cómo podía encontrar un empleo remoto.'
       url = 'https://www.linkedin.com/pulse/adoptando-el-trabajo-remoto-mi-viaje-y-consejos-para-%25C3%25A9xito-s%25C3%25A1nchez-cmbze/'
       />
       < Testimonio
       nombre ='Más allá de las cifras: El papel de las empresas en el desarrollo de las mujeres en tecnología'
       id = 'N°2'
       imagen ='dos'
       testimonio ='Desde el 2021, decidí adentrarme en el mundo profesional de la tecnología. Aunque no tenía una dirección clara en mente en ese momento, ya había tomado la decisión de avanzar, recordando que una decisión tomada es poder. ...'
       url = 'https://www.linkedin.com/pulse/m%25C3%25A1s-all%25C3%25A1-de-las-cifras-el-papel-empresas-en-mujeres-heidi-s%25C3%25A1nchez-djwbe/'
       />

      < Testimonio
       nombre ='Mujeres en tecnología: rompiendo barreras y empoderando el futuro desde la infancia'
       id = 'N°3'
       imagen ='tres'
       testimonio ='La posibilidad de trabajar desde casa, estando presentes en el día a día de nuestros hijos, es un privilegio invaluable. Además, el desarrollo en áreas tan desafiantes como el desarrollo de software, con la posibilidad de vivir de ello, resulta increíblemente gratificante.'
       url = 'https://www.linkedin.com/pulse/mujeres-en-tecnolog%25C3%25ADa-rompiendo-barreras-y-el-futuro-desde-s%25C3%25A1nchez-n6kde/'
       />
      

      </div>
      <h2>By Heidi Sánchez</h2>s
      
    </div>
  );
}

export default App;
