// Declaración de funciones

// Función saludar
const saludar = () => {
  return "Bienvenido a CB Marketing Digital";
};

console.log(saludar()); // => "Bienvenido a CB Marketing Digital"

// Función para mostrar un mensaje en la consola
const decirMensaje = (mensaje) => {
  alert(mensaje);
};

// Función para mostrar un mensaje en un prompt
const mostrarMensaje = (mensaje) => {
  return prompt(mensaje);
};

// Función para validar el formato de un email
const validarEmailFormato = (email) => {
  // Aquí se implementar la lógica para validar el formato del email
  // y devolver true si es válido, o false si es inválido
  return true; // Por ahora, asumimos que todos los emails son válidos
};

// Función para validar un email
const validarEmail = () => {
  let email;
  let emailValido;

  do {
    email = mostrarMensaje(
      "Por favor, ingresa tu dirección de correo electrónico para enviarte la información"
    );
    emailValido = validarEmailFormato(email);

    if (!emailValido) {
      mostrarMensaje("Email inválido. Por favor, ingresa un email válido.");
    }
  } while (!emailValido);
};

//Función para validar las redes sociales para la publicidad paga
const validarRedesSociales = (redesSociales) => {
  const opcionesValidas = [
    "instagram",
    "facebook",
    "tiktok",
    "twitter",
    "whatsapp",
  ];
  const redesElegidas = redesSociales
    .toLowerCase()
    .split(",")
    .map((r) => r.trim());

  const redesInvalidas = redesElegidas.filter(
    (redSocial) => !opcionesValidas.includes(redSocial)
  );
  if (redesInvalidas.length > 0) {
    mostrarMensaje("Redes sociales inválidas: " + redesInvalidas.join(", "));
    return false;
  }

  return true;
};

// Empieza el programa//
decirMensaje(saludar());

let opcion = mostrarMensaje(
  "¿Quieres información general o que te enviemos un presupuesto detallado sobre algún servicio en especial?"
);
if (opcion === "informacion") {
  validarEmail();
  decirMensaje("Te enviaremos la información detallada a tu correo. ¡Gracias!");
} else {
  let servicio = mostrarMensaje(
    "Por favor, elige el servicio sobre el que deseas consultar: auditoría, marketing, desarrollo web"
  );

  switch (servicio.toLowerCase()) {
    case "auditoria":
      validarEmail();
      decirMensaje(
        "Te enviaremos un presupuesto sobre el servicio de auditoria. ¡Gracias!"
      );

      break;
    case "marketing":
      let tipoPublicidad = mostrarMensaje(
        "Por favor, elige el tipo de publicidad: orgánica o paga"
      );

      switch (tipoPublicidad.toLowerCase()) {
        case "organica":
          decirMensaje(
            "Te enviaremos un presupuesto sobre las opciones de publicidad organica que tenemos  .¡Gracias!"
          );
          validarEmail();
          break;

        case "paga":
          let plataformaPago = mostrarMensaje(
            "Por favor, elige la plataforma para la publicidad paga: Google, redes sociales"
          );

          switch (plataformaPago.toLowerCase()) {
            case "google":
              mostrarMensaje("Has elegido publicidad paga en Google");
              validarEmail();
              break;
            case "redes sociales":
              let redesSociales;
              do {
                redesSociales = mostrarMensaje(
                  "Por favor, elige las redes sociales para la publicidad paga: instagram, facebook, tik tok, twitter, whatsapp (separadas por comas)"
                );
              } while (!validarRedesSociales(redesSociales));
              let redesElegidas = redesSociales
                .toLowerCase()
                .split(",")
                .map((r) => r.trim());
              mostrarMensaje(
                "Redes sociales elegidas: " + redesElegidas.join(", ")
              );
              validarEmail();
              decirMensaje(
                "Te enviaremos un presupuesto sobre tu eleccion.¡Gracias!"
              );
              break;
            default:
              mostrarMensaje(
                "Opción de plataforma de publicidad paga no válida"
              );
              break;
          }
          break;
        default:
          mostrarMensaje("Opción de tipo de publicidad no válida");
          break;
      }
      break;
    case "desarrollo web":
      mostrarMensaje("Has elegido el servicio de desarrollo web");
      validarEmail();
      break;
    default:
      mostrarMensaje("Opción de servicio no válida");
      break;
  }
}
