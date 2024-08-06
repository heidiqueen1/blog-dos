import "./App.css";
import Testimonio from "./componentes/Testimonio.js";
import Formulario from "./componentes/Formulario.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1 className="texto">El Blog del trabajo remoto</h1>

        <Testimonio
          titulo="Adoptando el trabajo remoto: Mi viaje y consejos para el éxito"
          subtitulo="N°1"
          imagen="uno"
          testimonio="A veces, no saber es algo bueno porque te impulsa a formular diferentes preguntas, a explorar dónde, cómo y qué. Utilicé internet para investigar los roles profesionales más demandados. Comencé a registrarme en sitios de empleo y portales profesionales, me conecté con mi red profesional y empecé a preguntar cómo podía encontrar un empleo remoto."
          url="https://www.linkedin.com/pulse/adoptando-el-trabajo-remoto-mi-viaje-y-consejos-para-%25C3%25A9xito-s%25C3%25A1nchez-cmbze/"
        />
        <Testimonio
          titulo="Más allá de las cifras: El papel de las empresas en el desarrollo de las mujeres en tecnología"
          subtitulo="N°2"
          imagen="dos"
          testimonio="Desde el 2021, decidí adentrarme en el mundo profesional de la tecnología. Aunque no tenía una dirección clara en mente en ese momento, ya había tomado la decisión de avanzar, recordando que una decisión tomada es poder. ..."
          url="https://www.linkedin.com/pulse/m%25C3%25A1s-all%25C3%25A1-de-las-cifras-el-papel-empresas-en-mujeres-heidi-s%25C3%25A1nchez-djwbe/"
        />

        <Testimonio
          titulo="Mujeres en tecnología: rompiendo barreras y empoderando el futuro desde la infancia"
          subtitulo="N°3"
          imagen="tres"
          testimonio="La posibilidad de trabajar desde casa, estando presentes en el día a día de nuestros hijos, es un privilegio invaluable. Además, el desarrollo en áreas tan desafiantes como el desarrollo de software, con la posibilidad de vivir de ello, resulta increíblemente gratificante."
          url="https://www.linkedin.com/pulse/mujeres-en-tecnolog%25C3%25ADa-rompiendo-barreras-y-el-futuro-desde-s%25C3%25A1nchez-n6kde/"
        />

        <Testimonio
          titulo="¿Cómo puedo crear una carta de presentación de alto impacto?"
          subtitulo="N°4"
          imagen="cuatro"
          testimonio="Una carta de presentación, o cover letter, es un documento formal que acompaña a tu hoja de vida. En ella, tienes la oportunidad de presentar tu mejor argumento sobre por qué eres el candidato ideal para un puesto de trabajo. En escasas 50 líneas, debemos captar la atención del reclutador y ser considerados para pasar al siguiente nivel del proceso."
          url="https://www.linkedin.com/pulse/c%C3%B3mo-puedo-crear-una-carta-de-presentaci%C3%B3n-alto-impacto-heidi-s%C3%A1nchez-opvje/?trackingId=iJhzz9R%2BQOS1bovl4Y5NJg%3D%3D"
        />

        <Testimonio
          titulo="¿Cómo transformar una pérdida en algo valioso?"
          subtitulo="N°5"
          imagen="cinco"
          testimonio="Descubrí que el poder de transmutar los sentimientos negativos en positivos es una herramienta invaluable para alcanzar un rendimiento cerebral óptimo. Pero, ¿cómo podemos convertir aquello que nos afecta emocionalmente de forma negativa en algo que nos impulse a crecer?"
          url="https://www.linkedin.com/pulse/c%C3%B3mo-transformar-una-p%C3%A9rdida-en-algo-valioso-venezolanas-globales-azxjf/?trackingId=slIp%2B8QZQKeLWu9ZPrd9LQ%3D%3D"
        />
         <Testimonio
          titulo="El arte de la productividad, ¿Cómo hacer actividades simultáneas con éxito?"
          subtitulo="N°6"
          imagen="seis"
          testimonio="Ser productivo es una característica imperativa en la modernidad. Nos encontramos en un mundo profesional acelerado que exige adquirir habilidades rápidamente. Debemos partir del autoconocimiento, saber cuál es nuestra forma de aprender más rápido y potenciarla, además de tener claridad en la disposición de tiempo para agendar nuestros momentos de planificación y mejora continua."
          url="https://www.linkedin.com/pulse/el-arte-de-la-productividad-c%C3%B3mo-hacer-actividades-con-heidi-s%C3%A1nchez-ckyse/?trackingId=wndPQi7eOeDIvlnSmZfANw%3D%3D"
        />
          <Testimonio
          titulo="¿Quieres vivir de escribir y hacerlo en remoto? descubre el Copywriting"
          subtitulo="N°7"
          imagen="siete"
          testimonio="Un copywriter se dedica a crear textos que persuaden al lector, adaptándose a diferentes estilos como breves, extensos, directos, emocionales o creativos. Estos textos pueden aplicarse en cualquier sección, plataforma o entorno."
          url="https://www.linkedin.com/pulse/quieres-vivir-de-escribir-y-hacerlo-en-remoto-descubre-heidi-s%C3%A1nchez-s4kse/?trackingId=o0FGzWVLS%2B%2BRt%2BeWPbtaCQ%3D%3D"
        />

       
        <Formulario />
      </div>
      <h2>By Heidi Sánchez</h2>s
    </div>
  );
}

export default App;
