let clientWeb= null

const clientId = "Esp32" + Math.floor((Math.random() * 1000) + 100)
//alert(clientId )
clientweb= new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId)




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
}

function verde() {
    //alert("ligando led verde");
    document.getElementById("verde").classList.add("verde");
}

function amarelo() {
    //alert("ligando led amarelo");
    document.getElementById("amarelo").classList.add("amarelo");

}

function automatico() {
    alert("ligando automatico");
}

function desligar() {
    //alert("desligar");
    document.getElementById("vermelho").classList.remove("vermelho");
    document.getElementById("verde").classList.remove("verde");      
    document.getElementById("amarelo").classList.remove("amarelo");
}


