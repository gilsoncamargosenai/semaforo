let clientWeb= null

const clientId = "Esp32" + Math.floor((Math.random() * 1000) + 100)
//alert(clientId )
clientWeb= new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId) //mosca


clientWeb.connect({
    
    useSSL:true,
    timeout:5,
    
    onSuccess: function () {
        alert("conectado")
    },

    onFailure: function(){
        alert("falha ao conectar")
    }
})

function vermelho() {
    //alert("ligando led vermelho");
    document.getElementById("vermelho").classList.add("vermelho");
    const msg = new Paho.MQTT.Message("vermelho");
    msg.destinationName = "senai115/semaforo/liga/vermelho";
    clientWeb.send(msg);
    //clientWeb.publish("senai115/semaforo/liga/vermelho", "vermelho");
    //clientWeb.subscribe("senai115/semaforo/liga/vermelho");
}

function verde() {
    //alert("ligando led verde");
    document.getElementById("verde").classList.add("verde");
    const msg = new Paho.MQTT.Message("verde");
    msg.destinationName = "senai115/semaforo/liga/verde";   
    clientWeb.send(msg);
    //clientWeb.publish("senai115/semaforo/liga/verde", "verde
}

function amarelo() {
    //alert("ligando led amarelo");
    document.getElementById("amarelo").classList.add("amarelo");
    const msg = new Paho.MQTT.Message("amarelo");
    msg.destinationName = "senai115/semaforo/liga/amarelo"; 
    clientWeb.send(msg);
    //clientWeb.publish("senai115/semaforo/liga/amarelo", "

}

function automatico() {
    //alert("ligando automatico");
    document.getElementById("vermelho").classList.add("vermelho");
    document.getElementById("verde").classList.add("verde");
    document.getElementById("amarelo").classList.add("amarelo");
    const msg = new Paho.MQTT.Message("automatico");
    msg.destinationName = "senai115/semaforo/liga/automatico";
    clientWeb.send(msg);
    //clientWeb.publish("senai115/semaforo/liga/automatico", "automatico");
    //clientWeb.subscribe("senai115/semaforo/liga/automatico");
}

function desligar() {
    //alert("desligar");
    document.getElementById("vermelho").classList.remove("vermelho");
    document.getElementById("verde").classList.remove("verde");      
    document.getElementById("amarelo").classList.remove("amarelo");
    const msg = new Paho.MQTT.Message("desligar");
    msg.destinationName = "senai115/semaforo/liga/desligar";    
    clientWeb.send(msg);
    //clientWeb.publish("senai115/semaforo/liga/desligar", "desligar");
    //clientWeb.subscribe("senai115/semaforo/liga/desligar");
}


