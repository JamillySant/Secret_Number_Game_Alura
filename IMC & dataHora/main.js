function main() {
  const form = document.querySelector('#formulario');

  function handleSubmit(event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    const imc = (peso / Math.pow(altura, 2)).toFixed(2);

    const imcMsg = handleGetImcMsg(imc);

    handleSetResult(imcMsg, true);
  }

  form.addEventListener('submit', handleSubmit);
}

main();

function handleGetImcMsg(imc) {
  if(imc < 18.5) {
    return `Seu IMC é ${imc} (Abaixo do peso).`;
  }
  
  if(imc <= 24.9) {
    return `Seu IMC é ${imc} (Peso normal).`;
  }
  
  if(imc <= 29.9) {
    return `Seu IMC é ${imc} (Sobrepeso).`;
  }
  
  if(imc <= 34.9) {
    return `Seu IMC é ${imc} (Obesidade grau 1).`;
  }
  
  if(imc <= 39.9) {
    return `Seu IMC é ${imc} (Obesidade grau 2).`;
  }
  
  if(imc >= 40) {
    return `Seu IMC é ${imc} (Obesidade grau 3).`;
  }
}

function handleSetResult(msg, isValid) {
  const result = document.querySelector('#resultado');
  result.innerHTML = '';
  const p = document.createElement('p');
  if(isValid) {
    p.classList.add('result-success');
  } else {
    p.classList.add('result-error')
  }

  p.innerHTML = msg;
  result.appendChild(p);
}
/*----------------------------*/

function time() {
  var data = new Date()
  
  var sms = window.document.getElementById('sms')
  var img = window.document.getElementById('imagem')
  h = data.getHours()
  m = data.getMinutes()
  s = data.getSeconds()
  hora = data.getHours()
  document.getElementById('sms').innerHTML = h+":"+m+":"+s
  setTimeout ('time()',500)
  
  dia = data.getDate().toString().padStart(2,'0')
  mes = String(data.getMonth() + 1).padStart(2,'0')
  ano = data.getFullYear()
  
  document.getElementById('dat').innerHTML = `${dia} / ${mes} / ${ano}`
  
  var semana = ["[ Domingo ]", "[ Segunda-Feira ]", "[ Terça-Feira ]", "[ Quarta-Feira ]", "[ Quinta-Feira ]", "[ Sexta-Feira ]", "[Sábado]" ]
  document.getElementById("dia").innerHTML = semana[data.getDay()]
  
  if (hora >= 0 && hora < 12) {
      img.src = 'image/dia.png'
      document.body.style.background = '#FF4500'
  
  }else if (hora >= 12 && hora < 18) {
      img.src = 'image/tarde.png'
      document.body.style.background = '#006400'
  }else { 
      img.src = 'image/noite.jpg'
      document.body.style.background = '#03265E'
      }
  }