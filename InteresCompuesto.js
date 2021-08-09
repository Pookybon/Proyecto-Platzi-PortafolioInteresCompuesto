// Inicia en 1 como ya que hay un activo inicial y se usa para las repeticiones de los ciclos FOR
var contadorActivos = 1;
var listaMontos = [];
var listaPorcentajes = [];

var claseEvento1 = document.querySelectorAll('.activo-input');

claseEvento1.forEach(elemento => {
        elemento.addEventListener('input', calcularResultados);
    }
);

function añadirActivo(){
    contadorActivos = contadorActivos + 1;
    insertarActivo();
};

const activo = document.getElementById("activos");
var casillaActivo = '';
const resultado = document.getElementById("resultadosTemporales");
var textoResultado = '';

function insertarActivo(){
    casillaActivo = '<div class="activoContainer"><label class="activo-text">Monto Inicial</label><div class="activoinput-container"><a class="activo-text">$</a><input type="number" class="activo-input" id="montoInicial' + contadorActivos + '" placeholder="1000"></div><label class="activo-text">Porcentaje de Rendimiento Anual</label><div class="activoinput-container"><a class="activo-text">%</a><input type="number" class="activo-input" id="porcentajeInteres' + contadorActivos + '" value="7"></div></div>';
    activo.insertAdjacentHTML('beforeend', casillaActivo);

    textoResultado = '<p class="resultadoCalculo" id="inversion' + contadorActivos + '"></p>';
    resultado.insertAdjacentHTML('beforeend', textoResultado);

    claseEvento1 = document.querySelectorAll('.activo-input')
    claseEvento1.forEach(elemento => {
            elemento.addEventListener('input', calcularResultados);
        }
    );
};

function crearListas (){
    listaMontos = [];
    listaPorcentajes = [];
    for (let contador = 0; contador < contadorActivos; contador ++){
        listaMontos.push(document.getElementById('montoInicial' + (contador + 1) + '').value);
    };
    console.log(listaMontos);
    for (let contador = 0; contador < contadorActivos; contador ++){
        listaPorcentajes.push(document.getElementById('porcentajeInteres' + (contador + 1) + '').value);
    };
    console.log(listaPorcentajes);
};

function interesCompuesto(capital, tasaInteres, años){
    return Number((capital * (1 + (tasaInteres/100) / 12)**(12 * años)).toFixed(2));
};

function calcularResultados(){
    crearListas();
    let años = document.getElementById('añosInversion').value;
    let total = 0;
    for (let contador = 0; contador < contadorActivos; contador ++){
        let totalParcial = interesCompuesto(Number(listaMontos[contador]), Number(listaPorcentajes[contador]), años);
        total = total + totalParcial;
        let ubicacion = document.getElementById('inversion' + (contador + 1) + '');
        ubicacion.textContent = '$ ' + totalParcial;
    };
    document.getElementById('Total').textContent = '$ ' + total;
};