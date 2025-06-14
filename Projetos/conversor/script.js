function convertercel() {
    const tempe = parseFloat(document.getElementById("tempe").value);
    const resultado = document.getElementById("resultado");
    let r = (tempe - 32) * 5/9;
    resultado.textContent = `${tempe}°F = ${r.toFixed(2)}°C`;
  }

  function converterfehr() {
    const tempe = parseFloat(document.getElementById("tempe").value);
    const resultado = document.getElementById("resultado");
    let r = (tempe * 9/5) + 32;
    resultado.textContent = `${tempe}°C = ${r.toFixed(2)}°F`;
  }