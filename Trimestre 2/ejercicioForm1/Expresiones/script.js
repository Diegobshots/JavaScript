let trato=document.getElementById("trato");
let tlf=document.getElementById("tlf");
let email=document.getElementById("email");
let dns=document.getElementById("dns");
let ip=document.getElementById("ip");
let btn=document.getElementById("btn");
btn.addEventListener("click",fboton);

trato.addEventListener("blur",ftrato);
tlf.addEventListener("blur",ftlf);
email.addEventListener("blur",femail);
dns.addEventListener("blur",fdns);
ip.addEventListener("blur",fip);

var ctrato=false;
var cip=false;
var cdns=false;
var cemail=false;
var ctelefono=false;

function ftrato() {
    let x=trato.value;
    x=x.toLowerCase();
    if(x.match(/^sr$/)===null && x.match(/^sra$/)===null){
        trato.setAttribute("style", "border: 1.5px solid red;");
        ctrato=false;
    }else{
        trato.setAttribute("style", "border: 1.5px solid green;");
        ctrato=true;
    }
}
function ftlf() {
    var ctelefono=false;
    let x=tlf.value;
    if(x.match(/^[0-9]{9}$/)===null && x.match(/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/)===null){
        tlf.setAttribute("style", "border: 1.5px solid red;");
        ctelefono=false;
    }else{
        tlf.setAttribute("style", "border: 1.5px solid green;");
        ctelefono=true;
    }
}
function femail() {
    var cemail=false;
    let x=email.value;
    x=x.toLowerCase();
    if(x.match(/^[a-z|0-9]+@[a-z|0-9]+\.[a-z|0-9]+$/)===null){
        email.setAttribute("style", "border: 1.5px solid red;");
        cemail=false;
    }else{
        email.setAttribute("style", "border: 1.5px solid green;");
        cemail=true;
    }
}
function fdns() {
    var cdns=false;
    let x=dns.value;
    x=x.toLowerCase();
    if(x.match(/^www\.[a-z|0-9]+\.[a-z|0-9]+$/)===null){
        dns.setAttribute("style", "border: 1.5px solid red;");
        cdns=false;
    }else{
        dns.setAttribute("style", "border: 1.5px solid green;");
        cdns=true;
    }
}
function fip() {
    var cip=false;
    let x=ip.value;
    x=x.toLowerCase();
    let p=/^([0-9]|[0-9][0-9]|[0-1][0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|[0-1][0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|[0-1][0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[0-9][0-9]|[0-1][0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
    if(x.match(p)===null){
        ip.setAttribute("style", "border: 1.5px solid red;");
        cip=false;
    }else{
        ip.setAttribute("style", "border: 1.5px solid green;");
        cip=true;
    }
}
function fboton() {
    let cad="";
    if (!ctrato){
        cad+="El campo Trato es invalido\n";
    }
    if (!ctelefono){
        cad+="El campo Telefono es invalido\n";
    }
    if (!cemail){
        cad+="El campo Email es invalido\n";
    }
    if (!cdns){
        cad+="El campo Dns es invalido\n";
    }
    if (!cip){
        cad+="El campo IP es invalido\n";
    }
    if (cad===""){
        cad="Datos enviados con exito";
    }
    document.getElementById("contenido").innerHTML=cad;
}