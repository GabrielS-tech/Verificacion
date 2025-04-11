// Fecha

Fecha_hoy = new Date()
document.querySelector('.MP').addEventListener('click',
    function () {
        const subtitulos = document.querySelector('.MP1');
        if (subtitulos.style.display === 'none' || subtitulos.style.display === '') { subtitulos.style.display = 'block'; }
        else { subtitulos.style.display = 'none'; }
        document.getElementById('DNI1').focus()
    });
document.querySelector('.obenef').addEventListener('click',
    function () {
        const benefi = document.querySelector('.obenef1')
        if (benefi.style.display === 'none' || benefi.style.display === '') { benefi.style.display = 'block'; }
        else { benefi.style.display = 'none'; }
        document.getElementById('botonbe').focus()

    })
document.querySelector(".gf1").addEventListener('click',
    function () {
        
        const _GF = document.querySelector(".gf2")
        if (_GF.style.display === 'none' || _GF.style.display === '') { _GF.style.display = 'block'; alert("VERIFICAR ADHERENTE 1")}
        else { _GF.style.display = 'none';alert("VERIFICAR ADHERENTE 1") }
        document.getElementById('familiar1').focus()
    })
document.querySelector(".foto1").addEventListener('click',
function(){
    const _FOTO = document.querySelector(".foto2")
    if(_FOTO.style.display==='none'||_FOTO.style.display===''){_FOTO.style.display='block';}
    else{_FOTO.style.display='none'}
    document.getElementById('0').focus()
})


const inputs = document.querySelectorAll('input')
inputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        if (input.value.length >= 0) {
            const nexInput = inputs[index + 1];
            if (nexInput) {
                nexInput.focus()
            }
        }
    })
});

// Vectores
Almacenamiento_MP = []

function Cuenta() {

    //Carga de datos
    const _Tfecha = document.getElementById("Fecha_ticket")
    const _dni1 = document.getElementById("DNI1")
    const _dni2 = document.getElementById("DNI2")
    const _NombreB = document.getElementById("NBanco")
    const _Comp = document.getElementById("Com")
    const _Hojad = document.getElementById("hoja")

    //Objeto
    let objCuenta = {
        Fecha: _Tfecha.value,
        DNI: _dni1.value,
        DNI2: _dni2.value,
        Banco: _NombreB.value,
        Comprobante: _Comp.value,
        Hoja: _Hojad.value
    }

    //Añadir a vector
    Almacenamiento_MP.push(objCuenta)

    //Datos de la fecha
    let Fing = new Date(objCuenta.Fecha).getTime();
    let Fhoy = Fecha_hoy.getTime()
    Diferencia = Fhoy - Fing
    Formato = Math.ceil(Diferencia / (1000 * 60 * 60 * 24 * 30) - 1)

    //Condiciones con fechas.
    if (Formato < 6) {
        document.getElementById("pFT").innerHTML =
            `
            <p class="Correcto">Fecha correcta del ticket</p>
        `
    } else {
        alert("INCORRECTO: Fecha de ticket invalida")
        document.getElementById("pFT").innerHTML =
            `
            <div class="Incorrecto">
            <h3> Comentario SGA</h3>
            <p>Se verifica que la fecha del comprobante presentado es invalida</p>
            <h3>Mensaje al vendedor</h3>
            <p>Te comento que verificamos que la fecha del comprobante es invalida, ¿el cliente tiene otro comprobante?</p>
            </div>
        `

    }

    //Condiciones
    if (objCuenta.DNI == objCuenta.DNI2) {
        alert("ATENCIÓN: GENERAR APIBANK")
        document.getElementById("pmp").innerHTML = `<p class="Correcto">Coincidencia de titulares. Generar Apibank</p>`
    } else {
        alert("INCORRECTO: No coinciden los titulares")
        document.getElementById("pmp").innerHTML =
            `
                    <label for="apod">Insertar DNI de apoderado <input type="number" name="apod" id="apod"></label>
                    <p class="incorrecto"> En caso de no haber apoderado presione el siguiente botón</p>
                    <button onclick="
                    apod()
                    function apod(){
                    apod = document.getElementById('apod')

                    if(apod.value == Almacenamiento_MP[Almacenamiento_MP.length-1].DNI){
                    document.getElementById('pmp').innerHTML = 'CUENTA CORRECTA'
                    }else{
                    alert('INCORRECTO: Solicitar nuevo ticket de apoderado')
                    document.getElementById('pmp').innerHTML =
                    'Se verifica que el ticket de apoderado legal no contiene los datos del titular.'
                    }
                    }
                    "></button>
                `


    }


    //Validación de la plataforma de cobro
    switch (objCuenta.Banco) {
        case "Supervielle SA":
            document.getElementById("ppla").innerHTML = `<p class="Correcto">Copiar y pegar en SGA la siguiente plataforma de cobro: Supervielle</p>`
            break
        case "Santa Fe SA":
            document.getElementById("ppla").innerHTML = `<p class="Correcto">Copiar y pegar en SGA la siguiente plataforma de cobro: <br>Santa Fe</p>`
            break
        case "Macro SA":
            document.getElementById("ppla").innerHTML = `<p class="Correcto">Copiar y pegar en SGA la siguiente plataforma de cobro: <br> Macro Cerrada 89440</p>`
            break
        case "Corrientes SA":
            document.getElementById("ppla").innerHTML = `<p class="Correcto">Copiar y pegar en SGA la siguiente plataforma de cobro: <br> Sin Plataforma</p>`
            break
        case 'NaranjaX':
            let comprobar = prompt("¿Tiene movimientos de cuenta con ingresos?", )
            if(comprobar=="si"){
                document.getElementById("ppla").innerHTML = `<p class="Correcto">Copiar y pegar en SGA la siguiente plataforma de cobro: <br> ApiBank Bind</p>`
            }else{
                alert("SOLICITAR OTRO MEDIO DE PAGO")
                document.getElementById("ppla").innerHTML = 
                `
                <div class="Incorrecto">
                <h3>Comentario SGA</h3>
                <p>Se verifica que el medio de pago es una cuenta de NaranjaX y el vendedor informa que no posee movimientos de cuenta.</p>
                <h3>Mensaje al vendedor</h3>
                <p>Dado que el medio de pago es una billetera virtual y no tenemos el movimiento de cuenta, necesitamos otro medio de pago (cuenta o tarjeta de crédito)</p>
                </div>
                `

            }

            break
        default:
            document.getElementById("ppla").innerHTML = `<p class="Correcto">Copiar y pegar en SGA la siguiente plataforma de cobro: <br> ApiBank Bind</p>`
    }

    //Validación de documentación.

    if (_Comp.checked && _Hojad.checked) {
        document.getElementById("checkmp1").innerHTML = `<p class="Correcto">Comprobante válido</p>`
    } else if (_Comp.checked == false) {
        document.getElementById("checkmp1").innerHTML =
            `
        <div class="Incorrecto"></div>
        <h3>Comentario en SGA</h3>
        <ul>
        <li>Se verifica que el comprobante del medio de pago no es válido.</li>
        <li>Se solicita fotografía del comprobante del medio de pago</li>
        <li>Se solicita una fotografía más legible del comprobante del medio de pago.</li>
        </ul>
        <h3></h3>
        <p></p>
        </div>
        `
    } else if (_Hojad.checked == false) {
        document.getElementById("checkmp1").innerHTML =
            `
        <div class="Incorrecto">
        <h3>Comentario en SGA</h3>
        <ul>
        <li>Se solicita la fotografía de la hoja de débito.</li>
        <li>Se verifica que no se encuentra el número de cuenta en la hoja de débito.</li>
        </ul>
        <h3>Mensaje al vendedor</h3>
        <ul>
        <li>Verificamos que falta la fotografía de la hoja de débito, por favor envíarla.</li>
        <li>Verificamos que no se encuentra el número de cuenta en la hoja de débito, por favor envía la fotografía.</li>
        </ul>
        </div>
        `

    } else {
        document.getElementById("checkmp1").innerHTML =
            `
        <h3 class="Incorrecto">Comentario en SGA</h3>
        <ul class="Incorrecto">
        <li class="Incorrecto">Se solicita la fotografía del comprobante del medio de pago y de la hoja de débito..</li>
        </ul>
        <h3 class="Incorrecto"></h3>
        <p class="Incorrecto"></p>
        `

    }

}
function Tarjeta() {

    //Ingerso de datos
    const _empresa = document.getElementById("em")
    const _Fecha = document.getElementById("fecha_t")
    const _Titular = document.getElementById("tit_tar")
    const _Titular2 = document.getElementById("tit_plan")
    const _Tipo = document.getElementById("tipo_tar")
    const _calcada = document.getElementById("cal_tar")

    //Objeto
    let objTar = {
        Empresa: _empresa.value,
        Fecha: _Fecha.value,
        Titular: _Titular.value,
        Titular2: _Titular2.value,
        Tipo: _Tipo.value,
        Calcada: _calcada.value
    }

    //Validación de empresa
    const Empresa_tar = ["MASTERCARD", "VISA CREDITO", "Naranja", "VISA"]
    Busqueda = Empresa_tar.indexOf((objTar.Empresa).toUpperCase())
    if (Busqueda >= 0) {
        document.getElementById("empresa").innerHTML = `<p class="Correcto">Empresa correcta</p>`
    } else {
        alert("INCORRECTO: Empresa no aceptada")
        document.getElementById("empresa").innerHTML =
            `
            <h3 class="Incorrecto">Comentario SGA</h3>
            <p class="Incorrecto"> Se verifica que la tarjeta de crédito no es válida, ya que es de ${objTar.Empresa}</p>
            <h3 class="Incorrecto">Mensaje al vendedor</h3>
            <p class="Incorrecto">Verificamos que la tarjeta de crédito cargada no es aceptada, por favor enviar un nuevo medio de pago</p>
        `

    }

    //Validación de plataforma de cobro
    const Pla_cobro = new Map()
    Pla_cobro.set("MASTERCARD", "Central Pos")
    Pla_cobro.set("VISA CREDITO", "Central Pos")
    Pla_cobro.set("Naranja", "Naranja")
    document.getElementById("Plataforma").innerHTML = `<p class="Correcto">Plataforma de cobro que corresponde: ${Pla_cobro.get((objTar.Empresa).toUpperCase())}</p>`

    //Validación de Fecha
    let Fing = new Date(objTar.Fecha).getTime();
    let Fhoy = Fecha_hoy.getTime()
    Diferencia = Fing - Fhoy
    Formato = Math.ceil(Diferencia / (1000 * 60 * 60 * 24 * 30))
    if (Formato > 2) {
        document.getElementById("pfecha").innerHTML = `<p class="Correcto">Fecha correcta</p>`
    } else if (Formato < 0) {
        alert("INCORRECTO: Fecha de vencimiento invalida")
        document.getElementById("pfecha").innerHTML =
            `
            <div class="Incorrecto">
            <h3>Comentario SGA</h3>
            <p>Se verifica que La tarjeta se encuentra vencida, se solicita un nuevo medio de pago</p>
            <h3>Mensaje al vendedor</h3>
            <p>Verificamos que la tarjeta de crédito se encuentra vencida, por favor envíanos un nuevo medio de pago</p>
            </div>
            `
    } else { alert("CONULTAR CASO: Tarjeta vence antes del primer descuento. ¿Cambio de medio de pago?") }



    //Validación de titulares

    if (objTar.Titular == (objTar.Titular2.toUpperCase())) {
        document.getElementById("Titulares").innerHTML = `<p class="Correcto">Titular de la tarjeta correcto</p>`
    } else {
        alert("INCORRECTO: Titulares no coinciden")
        document.getElementById("Titulares").innerHTML =
            `
            <div class="Incorrecto">
            <h3>Comentario SGA</h3>
            <p>Se verifica que el titular del plan difiere del titular de la tarjeta</p>
            <h3>Mensaje al vendedor</h3>
            <p>Verificamos que el titular del plan difiere del titular de la tarjeta, por favor solicitar un nuevo medio de pago</p>
            </div>
            `
    }

    //Validación de tipo de tarjeta
    if (objTar.Tipo == "CREDIT") {
        document.getElementById("ptipo").innerHTML = `<p class="Correcto">CORRECTO</p>`


    } else {
        alert("INCORRECTO: No es tarjeta de crédito")
        document.getElementById("ptipo").innerHTML =
            `
            <div class="Incorrecto">
            <h3>Comentario SGA</h3>
            <p>Se verifica que la tarjeta presentada no es de crédito</p>
            <h3>Mensaje al vendedor</h3>
            <p>Verificamos que la tarjeta presentada no es de crédito, por favor envianos un nuevo medio de pago. Aguardamos.</p>
            </div>
            `
    }

    //Verificar tarjeta calcada.
    if (document.querySelector('input[name="cal_tar"]').checked) {
        document.getElementById("cal_tar").innerHTML = `<p class="Correcto">Tarjeta calcada</p>`
    } else {
        document.getElementById("cal_tar").innerHTML =
            `
        <div class="Incorrecto">
        <h3>Comentario en SGA</h3>
        <p>Se verifica que no encuentra la tarjeta calcada.</p>
        <h3>Mensaje al vendedor</h3>
        <p>Te comento que la tarjeta de crédito no se encuentra calcada, por favor calcala y envía la fotografía.</p>
        </div>
        `

    }
}
function GF() {
    const _F1 = document.getElementById("familiar1")
    const _F2 = document.getElementById("familiar2")

    let objgf = { f1: _F1.value, f2: _F2.value }

    let busqueda = ((objgf.f2).toLowerCase()).indexOf((objgf.f1).toLowerCase())


    if (busqueda >= 0) {
        document.getElementById("gf").innerHTML =
            `
            <p class="Correcto">Correcto. <br> Apellido y nombre: ${objgf.f1}</p>
        `

    } else {
        document.getElementById("gf").innerHTML =
            `
        <div class="Incorrecto">
            <h3>Comentario en SGA</h3>
            <p>Se le indica al vendedor que el DNI de ${objgf.f1} no valida correctamente. Se solicita la fotografía del mismo.</p>
            <h3>Mensaje del vendedor</h3>
            <p>Necesitamos que nos envíes la fotografía del DNI de ${objgf.f1}</p>
        </div>
        `
    }

    _F1.value = "";
    _F2.value = "";
    _F1.focus()

}
function Beneficio() {

    //---Ingreso de datos--//
    const B = document.getElementById("Ben")

    //---Objeto---//
    let objB = { Benef: B.value }

    //---Matrices de beneficio---//

    //Pensión no contributiva//

    const PNC = [];
    PNC[0] = { CodP: ("P1"), NP: 1 };
    PNC[1] = { CodP: ("P1"), NP: 1 };
    PNC[2] = { CodP: ("P2"), NP: 2 };
    PNC[3] = { CodP: ("P2"), NP: 2 };
    PNC[4] = { CodP: ("P3"), NP: 3 };
    PNC[5] = { CodP: ("P3"), NP: 3 };
    PNC[6] = { CodP: ("P4"), NP: 4 };
    PNC[7] = { CodP: ("P4"), NP: 4 };
    PNC[8] = { CodP: ("P5"), NP: 5 };
    PNC[9] = { CodP: ("P5"), NP: 5 };

    //AUH//
    const AUH = []
    let ValorCodA = "A";
    let ValorNA = 6;

    for (i = 0; i < 10; i++) {
        AUH[i] = { CodA: (ValorCodA + i), NA: (ValorNA + parseInt(i)) }
    }

    //Jub menor//
    const Menor = []
    let ValorCodM = "M";
    let ValorNM = 6;

    for (x = 0; x < 10; x++) {
        Menor[x] = { CodM: (ValorCodM + x), NM: (ValorNM + parseInt(x)) }

    }



    // Jub mayor
    const Mayor = []
    Mayor[0] = { CodMayor: ("S1"), NS: 1 };
    Mayor[1] = { CodMayor: ("S1"), NS: 1 };
    Mayor[2] = { CodMayor: ("S2"), NS: 2 };
    Mayor[3] = { CodMayor: ("S2"), NS: 2 };
    Mayor[4] = { CodMayor: ("S3"), NS: 3 };
    Mayor[5] = { CodMayor: ("S3"), NS: 3 };
    Mayor[6] = { CodMayor: ("S4"), NS: 4 };
    Mayor[7] = { CodMayor: ("S4"), NS: 4 };
    Mayor[8] = { CodMayor: ("S5"), NS: 5 };
    Mayor[9] = { CodMayor: ("S5"), NS: 5 };


    let dig = (Almacenamiento_MP[Almacenamiento_MP.length - 1].DNI).slice(7, 8)

    switch (objB.Benef) {
        case "A":
            document.getElementById("pben").innerHTML =
                `
                <div class="Correcto">
                    <h3>Resultado</h3>
                    <p>Copiar y pegar en SGA los resultados</p>
                    <ol>
                        <li>Código del beneficio: ${AUH[dig].CodA}</li>
                        <li>Fecha de cobro: ${AUH[dig].NA}</li>    
                    </ol>
                </div>
                `
            break
        case "P":
            document.getElementById("pben").innerHTML =
                `
                <div class="Correcto">
                    <h3>Resultado</h3>
                    <p>Copiar y pegar en SGA los resultados</p>
                    <ol>
                        <li> Código del beneficio: ${PNC[dig].CodP}</li>
                        <li>Fecha de cobro: ${PNC[dig].NP}</li>    
                    </ol>
                </div>
                `
            break
        case "M":
            document.getElementById("pben").innerHTML =
                `
                <div class="Correcto">
                    <h3>Resultado</h3>
                    <p>Copiar y pegar en SGA los resultados</p>
                    <ol>
                        <li>Código del beneficio: ${Menor[dig].CodM}</li>
                        <li>Fecha de cobro: ${Menor[dig].NM}</li>    
                    </ol>
                </div>
                `
            break
        case "S":
            document.getElementById("pben").innerHTML =
                `
                <div class="Correcto">
                    <h3>Resultado</h3>
                    <p>Copiar y pegar en SGA los resultados</p>
                    <ol>
                        <li>Código del beneficio: ${Mayor[dig].CodMayor}</li>
                        <li>Fecha de cobro: ${Mayor[dig].NS}</li>    
                    </ol>
                </div>
                `
            break
        default:
            document.getElementById("pben").innerHTML =
                `
                <div class= "Correcto">
                    <h3>Resultado</h3>
                    <p>Consultar beneficio en la llamada.</p>
                </div>
                `

    }

}
function Fotografías() {



    let text = "";
    let check = "";
    let check2 = "";
    let check3 = "";
    for (i = 0; i < 17; i++) {
        if (document.getElementById(`${i}`).checked) {
            document.getElementById("pcheck").innerHTML = `<p class="Correcto">Documentación validada.</p>`

        } else {

            text += `<p>${document.getElementById(`${i}`).value}<p>`
            alert(i)

            if (i < 7 && i >= 0) {
                check = `<li>Necesitamos que nos envíes la fotografía de esta documentación, dado que hay un error en el DNI</li>`
            }

            if (i > 7 && i < 13) {
                check2 = `<li>Necesitamos que nos envíes la fotografía de esta documentación, dado que hay un error en la firma</li>`

            }

            if (i > 12) {
                check3 = `<li>Necesitamos que nos envíes las siguiente documentación: ${document.getElementById(i).value} </li>`

            }
            document.getElementById("pcheck").innerHTML =
                `
            <div class="Incorrecto">
            <h3>Comentario en SGA</h3>
            <p>Se verifican errores en la documentación: ${text}</p>
            <h3>Mensaje al vendedor (enviar captura junto con el mensaje que corresponda)</h3>
            <ul>
                ${check}
                ${check2}
                ${check3}

            </ul>
            </div>

            `

        }


    }
}
function PlanDoble() {

    const _plad = document.getElementById("plad")
    let objplad = { Tipo: _plad.value }

    //Inactivos
    if (objplad.Tipo == "i") {
        document.getElementById("plandoble").innerHTML =
            `
            <h3>Colocar el medio de pago (CBU válido) de cada plan en los siguientes campos:</h3>
            <label for="MPd1">Colocar medio de pago de plan anterior (el que se encuentra inactivo)<input type="number" name="MPd1" id="MPd1"></label><br>
            <label for="MPd2">Colocar medio de pago de plan actual (el cargado a SGA)<input type="number" name="MPd2" id="MPd2"></label><br>
        <input type="button" value="Prueba" onclick="Plani()">


        `
        alert("ATENCIÓn: Verificar que en la hoja de carencias diga: Febrero.")

    }


    //Activos
    const Fecha_hoy = new Date();
    const Fecha_anterior = Fecha_hoy.getFullYear() - 1;
    const Fecha_mes = Fecha_hoy.getMonth()

    if (objplad.Tipo == "a") {

        alert("ATENCIÓN: Verificar que en la hoja de carencias diga: Mes en curso")
        document.getElementById("pd").innerHTML = `<h3>Validar las cuotas de los siguientes meses.</h3>`
        const meses = []
        meses[0] = "Enero"
        meses[1] = "Febrero"
        meses[2] = "Marzo"
        meses[3] = "Abril"
        meses[4] = "Mayo"
        meses[5] = "Junio"
        meses[6] = "Julio"
        meses[7] = "Agosto"
        meses[8] = "Septiembre"
        meses[9] = "Octubre"
        meses[10] = "Noviembre"
        meses[11] = "Diciembre"

        const meses_anteriores = []
        meses_anteriores[0] = "Enero del " + Fecha_anterior
        meses_anteriores[1] = "Febrero del " + Fecha_anterior
        meses_anteriores[2] = "Marzo del " + Fecha_anterior
        meses_anteriores[3] = "Abril del " + Fecha_anterior
        meses_anteriores[4] = "Mayo del " + Fecha_anterior
        meses_anteriores[5] = "Junio del " + Fecha_anterior
        meses_anteriores[6] = "Julio del " + Fecha_anterior
        meses_anteriores[7] = "Agosto del " + Fecha_anterior
        meses_anteriores[8] = "Septiembre del " + Fecha_anterior
        meses_anteriores[9] = "Octubre del " + Fecha_anterior
        meses_anteriores[10] = "Noviembre del " + Fecha_anterior
        meses_anteriores[11] = "Diciembre del " + Fecha_anterior


        //Funciones.

        if (Fecha_mes <= 5) {
            let indice1 = Fecha_mes + 6
            let indice2 = Fecha_mes


            for (i = 0; i < 5; i++) {

                indice1 += 1
                if (indice1 <= 11) {

                    document.getElementById("plandoble").innerHTML +=
                        `
                <label for ="${indice1}"><input type="checkbox" name="${indice1}" id="${indice1}">${meses_anteriores[indice1]}</label><br>
            `
                } else {

                    indice2 -= 1
                    alert(indice2)
                    document.getElementById("plandoble").innerHTML +=
                        `
                <label for ="${indice2}"><input type="checkbox" name="${indice2}" id="${indice2}">${meses[indice2]}</label><br>
            `
                }
            }

        } else if (Fecha_mes > 5) {
            let indice3 = Fecha_mes
            for (i = 0; i < 6; i++) {
                indice3 -= 1
                document.getElementById("plandoble").innerHTML +=
                    `
                <label for ="${meses[indice3]}"><input type="checkbox" name="${meses[indice3]}" id="${meses[indice3]}"></label><br>
            `


            }



        }
    }
}
function Plani() {
    const _MPd1 = document.getElementById("MPd1")
    const _MPd2 = document.getElementById("MPd2")

    let objMPd = { d1: _MPd1.value, d2: _MPd2.value }

    if (objMPd.d1 === objMPd.d2) {

        document.getElementById("valird").innerHTML =
            `
        <div class="Incorrecto">
        <h3>Comentario en SGA</h3>
        <p>Se verifica que es un plan doble inactivo y que el medio de pago actual es el mismo que el de la venta anterior.</p>
        <h3>Mensaje al vendedor</h3>
        <p>Te comento que el medio de pago actual es el mismo que el de la venta anterior, en donde no se pudieron realizar los descuentos, por lo que si o si necesitamos un nuevo medio de pago (cuenta o tarjeta de crédito)</p>
        </div>
        `
    } else {
        document.getElementById("valird").innerHTML = `<p class="Correcto">Por favor, validar medio de pago actual (${objMPd.d2}) en la solapa de "Medio de pago" que sigue </p>`


    }

}
function Limpiar() {


//Eliminación de elementos con id.
    const limpP = document.querySelectorAll('p[id]');
    limpP.forEach(element => {
        element.innerHTML = "";

    });

//Limpiar campos input
    const limpI = document.querySelectorAll('input[id]');
    limpI.forEach(element => {
        element.value = "";
    });

//Limpiar campos input checkbox
    const limpC = document.querySelectorAll('input[type="checkbox"]');
    limpC.forEach(element => {
        element.checked = false;
    });

//Limpiar campos input radio
    const limpR = document.querySelector('input[type="radio"]')
    limpR.checked = false;
}
function Comentario(comentario){
    const _comentario = document.getElementById("Inicio")
    const objCom = {Comentario: _comentario.value}

    switch(objCom.Comentario){
        case 'i1':
            document.getElementById("comentario").innerHTML =
            `
            <h3>Comentario</h3>
            <p>En proceso de auditoría</p>
            `
            break
        case 'i2':
            document.getElementById("comentario").innerHTML =
            `
            <h3>Comentario</h3>
            <p>En proceso de auditoría - Asesores ocupados con ventas previas</p>
            `
            break
        case 'i3':
            document.getElementById("comentario").innerHTML =
            `
            <h3>Comentario</h3>
            <p>En proceso de auditoría - Asesora previamente en WhatsApp</p>
            `
            break
        case 'i4':
            document.getElementById("comentario").innerHTML =
            `
            <h3>Comentario</h3>
            <p>Vendedor indica que nos comuniquemos en el siguiente horario: </p>
            `
            break
        case 'i5':
            document.getElementById("comentario").innerHTML =
            `
            <h3>Comentario</h3>
            <p>Se corrobora en certf. negativa: Registra Pensión NO Contributiva otorgada por el Ministerio de Salud.</p>
            `
    }
}

