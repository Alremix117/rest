import React from "react";

const containerStyle = {
  backgroundColor: "#f4f4f4",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "20px",
};

const textBlockStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  marginBottom: "20px",
};

const textStyle = {
  color: "#333",
  fontSize: "16px",
};

function Home() {
  return (
    <div className="md:w-4/6 xl:w-4/5" style={containerStyle}>
      <h1 style={titleStyle}>Inicio</h1>

      <div style={textBlockStyle}>
        <p style={textStyle}>
          Bienvenido a nuestro gimnasio, el lugar donde tus metas de fitness se convierten en realidad. En nuestro moderno y acogedor espacio, te invitamos a embarcarte en un viaje hacia una vida más saludable, activa y en forma.
          <br /><br />
          Nuestro gimnasio ofrece una amplia gama de equipos de última generación, diseñados para satisfacer las necesidades de todos, desde principiantes hasta atletas experimentados. Contamos con pesas libres, máquinas de cardio, área de entrenamiento funcional y mucho más, todo dispuesto de manera estratégica para brindarte la mejor experiencia de entrenamiento.
          <br /><br />
          Nuestro equipo de entrenadores altamente calificados y amigables está aquí para ayudarte a alcanzar tus objetivos. Ya sea que estés buscando perder peso, ganar fuerza, mejorar tu resistencia o simplemente mantener un estilo de vida activo, te brindaremos la orientación y el apoyo que necesitas.
          <br /><br />
          En nuestro gimnasio, la comunidad es importante. Te rodearás de personas con metas similares, lo que te motivará a seguir adelante y disfrutar de cada paso del camino. Ofrecemos una variedad de clases de grupo, desde yoga y pilates hasta entrenamientos de alta intensidad, para que puedas encontrar la actividad que mejor se adapte a tu estilo y horario.
          <br /><br />
          Además, nuestras instalaciones están diseñadas pensando en tu comodidad. Contamos con vestuarios bien equipados, duchas y áreas de relajación para que te sientas como en casa antes y después de tu entrenamiento.
          <br /><br />
          Ven y descubre por qué somos la elección preferida de aquellos que buscan un gimnasio que ofrezca excelencia, resultados y un ambiente positivo. Estamos comprometidos a ayudarte a alcanzar tus objetivos de fitness y a vivir una vida más saludable y enérgica. ¡Únete a nosotros hoy y comienza tu viaje hacia un yo más fuerte y saludable!
        </p>
      </div>
    </div>
  );
}

export default Home;
