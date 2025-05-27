function Cambiar(event) {
    event.preventDefault();
    document.body.classList.toggle("borrar");
    setTimeout(() => {
        window.location.href = event.target.href;
    }, 500);
}
//Funciones de ventanas equipoPC
function Moni() {
document.getElementById('moni').style.display='block';
}
function Moni_cerrar() {
document.getElementById('moni').style.display = 'none';
}
function Te() {
document.getElementById('te').style.display='block';
}
function Te_cerrar() {
document.getElementById('te').style.display = 'none';
}
function Mou() {
document.getElementById('mou').style.display='block';
}
function Mou_cerrar() {
document.getElementById('mou').style.display = 'none';
}
function Ga() {
document.getElementById('ga').style.display='block';
}
function Ga_cerrar() {
document.getElementById('ga').style.display = 'none';
}
function Tar() {
document.getElementById('tar').style.display='block';
}
function Tar_cerrar() {
document.getElementById('tar').style.display = 'none';
}
function Dis() {
document.getElementById('dis').style.display='block';
}
function Dis_cerrar() {
document.getElementById('dis').style.display = 'none';
}
function Mem() {
document.getElementById('mem').style.display='block';
}
function Mem_cerrar() {
document.getElementById('mem').style.display = 'none';
}
function Memro() {
document.getElementById('memro').style.display='block';
}
function Memro_cerrar() {
document.getElementById('memro').style.display = 'none';
}
function Disco() {
document.getElementById('disco').style.display='block';
}
function Disco_cerrar() {
document.getElementById('disco').style.display = 'none';
}
function Red() {
document.getElementById('red').style.display='block';
}
function Red_cerrar() {
document.getElementById('red').style.display = 'none';
}
function Bo() {
document.getElementById('bo').style.display='block';
}
function Bo_cerrar() {
document.getElementById('bo').style.display = 'none';
}
function Im() {
document.getElementById('im').style.display='block';
}
function Im_cerrar() {
document.getElementById('im').style.display = 'none';
}
//funciones de ventanas equipo-laptop
function A() {
document.getElementById('a').style.display='block';
}
function A_cerrar() {
document.getElementById('a').style.display = 'none';
}
function B() {
document.getElementById('b').style.display='block';
}
function B_cerrar() {
document.getElementById('b').style.display = 'none';
}
function C() {
document.getElementById('c').style.display='block';
}
function C_cerrar() {
document.getElementById('c').style.display = 'none';
}
function D() {
document.getElementById('d').style.display='block';
}
function D_cerrar() {
document.getElementById('d').style.display = 'none';
}
function E() {
document.getElementById('e').style.display='block';
}
function E_cerrar() {
document.getElementById('e').style.display = 'none';
}
function F() {
document.getElementById('f').style.display='block';
}
function F_cerrar() {
document.getElementById('f').style.display = 'none';
}
function G() {
document.getElementById('g').style.display='block';
}
function G_cerrar() {
document.getElementById('g').style.display = 'none';
}
function H() {
document.getElementById('h').style.display='block';
}
function H_cerrar() {
document.getElementById('h').style.display = 'none';
}
function I() {
document.getElementById('i').style.display='block';
}
function I_cerrar() {
document.getElementById('i').style.display = 'none';
}
function J() {
document.getElementById('j').style.display='block';
}
function J_cerrar() {
document.getElementById('j').style.display = 'none';
}
function K() {
document.getElementById('k').style.display='block';
}
function K_cerrar() {
document.getElementById('k').style.display = 'none';
}
function L() {
document.getElementById('l').style.display='block';
}
function L_cerrar() {
document.getElementById('l').style.display = 'none';
}
function M() {
document.getElementById('m').style.display='block';
}
function M_cerrar() {
document.getElementById('m').style.display = 'none';
}
function N() {
document.getElementById('n').style.display='block';
}
function N_cerrar() {
document.getElementById('n').style.display = 'none';
}
function O() {
document.getElementById('o').style.display='block';
}
function O_cerrar() {
document.getElementById('o').style.display = 'none';
}
//Funciones de ventanas Funcionamiento-PC
function FPC() {
document.getElementById('fpc').style.display='block';
}
function FPC_cerrar() {
document.getElementById('fpc').style.display = 'none';
}
function FPC1() {
document.getElementById('fpc1').style.display='block';
}
function FPC1_cerrar() {
document.getElementById('fpc1').style.display = 'none';
}
function FPC2() {
document.getElementById('fpc2').style.display='block';
}
function FPC2_cerrar() {
document.getElementById('fpc2').style.display = 'none';
}
function FPC3() {
document.getElementById('fpc3').style.display='block';
}
function FPC3_cerrar() {
document.getElementById('fpc3').style.display = 'none';
}
function FPC4() {
document.getElementById('fpc4').style.display='block';
}
function FPC4_cerrar() {
document.getElementById('fpc4').style.display = 'none';
}

//Cambia las imágenes random
document.addEventListener("DOMContentLoaded", () => {
    var numRandom = Math.floor(Math.random() * 200) + 1;
    var num3digitos = String(numRandom).padStart(3, '0');
    const NombreIMG = `Imagenes/Datos_Curiosos/compu2.${num3digitos}.png`;
    const imgElement = document.getElementById("DCurioso");
    imgElement.src = NombreIMG;
});
    //Esta es la antigua forma de generar números aleatorios pera me daba un bug con los numeros 1,10,100 xD
    // document.addEventListener("DOMContentLoaded", () => {
    //     var numRandom = Math.floor(Math.random() * 100) + 1;
    //     const NombreIMG = `Datos curiosos/compu2.${numRandom}.png`;
    //     const imgElement = document.getElementById("DCurioso");
    //     imgElement.src = NombreIMG;
    // })
function AbrirMenu(){
    document.getElementById('interesante').style.display='block';
    document.getElementById('formal').style.display='block';
    document.getElementById('oscuro').style.display='block';
    document.getElementById('daltonico').style.display='block';
    document.getElementById('quitar').style.display='block';
}
function CerrarMenu(){
    document.getElementById('interesante').style.display='none';
    document.getElementById('formal').style.display='none';
    document.getElementById('oscuro').style.display='none';
    document.getElementById('daltonico').style.display='none';
    document.getElementById('quitar').style.display='none';
}
function cambiarTema(tema) {
  document.body.className = 'aparecer tema-' + tema;
}

// function mostrarVentana() {
//   document.getElementById("ventanaIA").style.display = "block";
// }

// function cerrarVentana() {
//   document.getElementById("ventanaIA").style.display = "none";
// }

// async function preguntarIA() {
//   const pregunta = document.getElementById("pregunta").value;
//   const apiKey = "TU_API_KEY"; // Reemplaza con tu clave de OpenAI
//   const url = "https://api.openai.com/v1/completions";

//   const opciones = {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${apiKey}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       model: "text-davinci-003", // Puedes usar modelos más avanzados si tienes crédito
//       prompt: pregunta,
//       max_tokens: 100,
//       temperature: 0.7
//     })
//   };

//   try {
//     const respuesta = await fetch(url, opciones);
//     const datos = await respuesta.json();
//     document.getElementById("respuesta").innerText = datos.choices[0].text.trim();
//   } catch (error) {
//     console.error(error);
//     document.getElementById("respuesta").innerText = "Hubo un error al conectar con la IA.";
//   }
// }
function mostrarVentana() {
  document.getElementById("ventanaIA").style.display = "block";
}

function cerrarVentana() {
  document.getElementById("ventanaIA").style.display = "none";
}


async function preguntarIA() {
  const pregunta = document.getElementById("pregunta").value.trim();
  const apiKey ="..";
  const url = "https://api.openai.com/v1/chat/completions";

  if (!pregunta) {
    document.getElementById("respuesta").innerText = "Por favor, escribe una pregunta.";
    return;
  }

  const opciones = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini", // Cambia aquí según el modelo disponible
      messages: [{ role: "user", content: pregunta }],
      max_tokens: 200,
      temperature: 0.7
    })
  };

  try {
    document.getElementById("respuesta").innerText = "Pensando...";
    const respuesta = await fetch(url, opciones);
    const datos = await respuesta.json();

    if (respuesta.ok) {
      document.getElementById("respuesta").innerText = datos.choices[0].message.content.trim();
    } else {
      console.error(datos);
      document.getElementById("respuesta").innerText = "Error: " + (datos.error?.message || "desconocido");
    }
  } catch (error) {
    console.error(error);
    document.getElementById("respuesta").innerText = "No se pudo conectar con la IA.";
  }
}