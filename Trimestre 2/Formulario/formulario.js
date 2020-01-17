var formulario = {
    metodo: "post",
    action: "",
    tipoInput: ['text', 'number', 'password', 'email'],
    generar: function(pintaForm){
        var formulario = "";
        formulario += "<form method='${this.metodo}' action='${this.action}'";
        
    }

}