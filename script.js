window.onload = () => {
  const boasVindas = document.getElementById("boasVindas");
  const hora = new Date().getHours();
  let saudacao;

  if (hora < 12) {
    saudacao = "Bom dia! 🌅";
  } else if (hora < 18) {
    saudacao = "Boa tarde! ☀️";
  } else {
    saudacao = "Boa noite! 🌙";
  }

  boasVindas.textContent = saudacao + " Seja bem-vindo(a) ao meu portfólio!";
};
