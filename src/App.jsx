import { TextField, Button } from "@mui/material";
import "./style/App.css";

function App() {
  const info = `Con este medio informamos a la gente que requiera de asistencia o trabajos en obras
  tener cuidado con esta persona ya que ha mostrado falta de profesionalismo, asi como deshonestidad,
  además de amenazar a su contratante al realizar reclamos por malas practicas o trabajos`;

  const first = `Luego de realizar obras, se presenta un fallo el cual es reportado el 25 de enero de 2023,
`;
  const nombre = <strong>"Victor Alfo..."</strong>;
  const final = ` a quien llamaremor don Victor, es informado con el fin de hacer las adecuaciones
  lo antes posible con el fin de no agrabar la situación`;
  const second = `Luego de ser informado e insistentemente por parte del contrante, buscar una respuesta por 
  parte de don Victor, finalmente una respuesta dada el 12 de febrero de 2023 muestra que este no acepta responsabilidad
  alguna en ningun daño o posible afectación que la obra tenga, mostrando negligencia en su trabajo y tratando de apartarse 
  del problema`;
  const third = `Finalmente la placa sede el 18 de marzo de 2023, don Victor aún no se presenta a mirar la calidad ni estado de 
  la obra, pero debido a que segun sus palabras "Cuando se caiga voy y le soluciono", este dice que hay que mirar que fue lo que 
  sucedio`;
  const fourth = `El 31 de marzo, aún a la espera del arreglo, se envia fotos y videos del estado de la obra, siendo un pozo séptico,
  siendo un problema de salud publica para las personas que allí habitan, además de que se confirma que una niña de 2 años vive en este lugar,
  el señor don Victor aún no realiza los arreglos correspondientes`;
  const fifth = `Para el 19 de abril de 2023 el contratante decide hacer un pago de materiales para que el señor don Victor
  realice los arreglos, ya que por palabras de este como se muestra en evidencia, este era el motivo por el que no habia realizado 
  los arreglos. Comprometiendose a devolver el dinero gastado en estos`;
  const sixth = `Para el 25 de abril, luego de poner en riesgo la salud de los quien allí viven, el señor don Victor fianlmente realiza las reparaciones.
  Pasado casi un mes, el 23 de mayo por primera vez por parte del contratante, se le hace la recomendación a don Victor del pago del valor gastado en
  materiales que se comprometio a devolver`;
  const seventh = `El 4 de Julio de 2023 el señor don Victor se compromete a realizar el pago del saldo adeudado, sin embargo este no cumple, ní responde
  los mensajes`;
  const eigth = `Para el día 20 de octubre, tras tener algun problema con la estructura, el contratante le solicita a don Victor el pago del dinero, haciendo 
  referencia a que este los requiere para arreglos y adecuaciones, que en ningún momento se le solicitan al señor don Victor.
  Este responde con amenazas, y no es directo frente a la deuda, por lo que deduce el contratante que ha sido estafado, además de ahora saber que este lo amenaza, 
  diciendo que se acercara a la alcaldia, al departamento de planeación, a denunciar sus propio trabajos con el fin ed perjudica a su contratante`;
  const propoust = `Con el fin de acabar con estos actos, inviamos a todas las personas que hayan tenido una mala experiencia con este señor,
  para llevar a cabo una demanda colectiva, asi como a sus trabajadores, quienes se han quejado de los pagos por parte de este señor. Los invitamos a 
  contactarnos mediante el formulario, ya que buscamos que esta persona no pueda volver a ofrecer sus servicios si con esto busca engañar a otros. Así mismo
  queremos dar asesoria a quienes fueron empleados por este, ya que tenemos conocimiento que no se les ha hecho el pago correspondiente a primas, pensiones ni cesantias,
  por lo que en este momento y como saben por interes de cesantias podrían llegar a demandar y obtener el valor justo. Daremos asesiría y ayuda a todo quien lo necesite`;
  return (
    <>
      <header className="head">
        <img src="/alerta.svg" alt="" className="logo" />
        <ul className="list">
          <li className="option">
            <a href="#inicio">Inicio</a>
          </li>
          <li className="option">
            <a href="#historia">Historia</a>
          </li>
          <li className="option">
            <a href="">Pruebas</a>
          </li>
          <li className="option">
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </header>
      <div className="container">
        <h1 className="title" id="inicio">
          Alerta San Jorge, Zipaquira, Cogua y alrededores
        </h1>
        <img src="/incognito.png" alt="Victor" className="img-photo" />
        <p className="info">{info}</p>

        <section className="history" id="historia">
          <div className="part1">
            <h2 className="nombre">Victor Alfon...</h2>
            <img src="/1.jpeg" alt="" className="first-img" />
            <p className="intro">
              {first},{nombre},{final}
            </p>
          </div>
          <div className="part2">
            <img src="/2.jpeg" alt="" className="first-img" />
            <p className="intro">{second}</p>
          </div>
          <div className="part3">
            <img src="/3.jpeg" alt="" className="first-img" />
            <p className="intro">{third}</p>
          </div>
          <div className="part4">
            <img src="/4.jpeg" alt="" className="first-img" />
            <p className="intro">{fourth}</p>
          </div>
          <div className="part5">
            <img src="/5.jpeg" alt="" className="first-img" />
            <p className="intro">{fifth}</p>
          </div>
          <div className="part6">
            <img src="/6.jpeg" alt="" className="first-img" />
            <p className="intro">{sixth}</p>
          </div>
          <div className="part7">
            <img src="/7.jpeg" alt="" className="first-img" />
            <p className="intro">{seventh}</p>
          </div>
          <div className="part8">
            <img src="/8.jpeg" alt="" className="first-img" />
            <p className="intro">{eigth}</p>
          </div>
        </section>

        <section className="proves">
          <audio controls>
            <source src="/amenaza.ogg" type="audio/mpeg" />
          </audio>
        </section>

        <section className="propoust">
          <h2 className="title-propoust">Unirnos</h2>
          <p className="p-propoust">{propoust}</p>
        </section>

        <section className="contact" id="contacto">
          <form action="" className="contact-form">
            <TextField id="standard-basic" label="Nombre" variant="standard" />
            <TextField id="standard-basic" label="email" variant="standard" />
            <TextField
              id="standard-basic"
              label="Telefono"
              variant="standard"
            />
            <TextField
              id="standard-multiline-static"
              label="Comentarios"
              multiline
              rows={4}
              defaultValue=""
              variant="standard"
            />
            <Button variant="contained">Enviar</Button>
          </form>
        </section>
      </div>
      <footer />
    </>
  );
}

export default App;
