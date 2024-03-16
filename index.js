function reemplazarTexto() {
  let fraseOriginal = document.getElementById("textoOriginal").innerText;
  let fraseModificada = fraseOriginal.replace(/¡Compadre, cómpreme un coco! ¡Compadre, coco no compro!, porque el que poco coco come, poco coco compra y como yo poco coco como, poco coco compro!/gi, "A pesar de sus beneficios, el café puede presentar desventajas cuando se consume en exceso. La cafeína puede causar efectos secundarios negativos, como nerviosismo, ansiedad, insomnio y palpitaciones cardíacas. Además, su potencial adictivo puede conducir a la dependencia y a síntomas de abstinencia. El impacto en la calidad del sueño es otro aspecto a considerar, ya que el consumo de café, especialmente en horas tardías, puede interferir con un sueño reparador. Algunas investigaciones sugieren que el exceso de café puede aumentar el riesgo de hipertensión arterial y enfermedades cardiovasculares, mientras que también puede provocar molestias gastrointestinales como acidez, indigestión y reflujo ácido en algunas personas.");
  document.getElementById("textoModificado").innerText = fraseModificada;
}
//let str = "que chimba el picheo, quiero picheo";
//alert ( str.replace(/picheo/gi, "qleo"))
//alert ( str.match(/picheo/gi) );

function validarCorreo() {
  let correo = document.getElementById("correo").value;
  let expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let mensajeValidacion = document.getElementById("mensajeValidacion");

  if (expresionRegular.test(correo)) {
      mensajeValidacion.textContent = "El correo electrónico es válido.";
      mensajeValidacion.style.color = "green";
  } else {
      mensajeValidacion.textContent = "El correo electrónico no es válido.";
      mensajeValidacion.style.color = "red";
  }
}
