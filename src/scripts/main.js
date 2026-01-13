AOS.init();
const dataDoEvento = new Date("2026-08-17T19:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const cronometro = setInterval(function(){
    const agora = new Date()
    const timeStampAtual = agora.getTime();

    if (timeStampAtual > timeStampDoEvento){
        const contador = "Evento ja começou"
        document.getElementById("dataDoEvento").innerHTML = contador
        clearInterval(cronometro)
        return
    }

    const diaEmMs= 1000 *60 *60 *24;
    const horasEmMs= 1000 *60 *60;
    const minutosEmMs= 1000 * 60;
    const segundosEmMs= 1000
    
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / segundosEmMs);
    const contador = diasAteOEvento + " Dias " + horasAteOEvento + " Horas " + minutosAteOEvento + " Minutos " + segundosAteOEvento + " Segundos."

    document.getElementById("dataDoEvento").innerHTML = contador


}, 1000);
