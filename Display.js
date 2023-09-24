class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = "";
        this.valorAnteior = "";
        this.signos = {
            sumar: "+",
            dividir: "/",
            multiplicar: "X",
            restar: "-", 
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.valorActual = "";
        this.valorAnteior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();


    }

    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnteior = this.valorActual || this.valorAnteior;
        this.valorActual = ""; 
        this.imprimirValores();
    }

    agregarNumero(numero){
        if(numero === "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnteior} ${this.signos[this.tipoOperacion] || ""}`;

    }

    calcular (){
        const valorAnteior = parseFloat(this.valorAnteior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnteior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnteior, valorActual);

    }
}