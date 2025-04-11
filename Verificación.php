<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="Aspecto.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion Ventas</title>
</head>

<body>


    <h1 style="text-align: center;">Verificación</h1>

    <input type="button" value="Limpiar campos" onclick="Limpiar()">

    <!--Planes dobles-->
    <p id="pd"></p>
    <p id="plandoble"></p>

    <select name="plad" id="plad">Seleccionar tipo de plan
        <option value="i">Inactivo</option>
        <option value="a">Activo</option>
    </select>
    <input type="button" value="Plan doble" onclick="PlanDoble()">
    <p id="valird"></p>

    <!--Comentarios de inicio / Desplegable-->
    <section>
        <main>
            <h2>Comentarios</h2>
            <label for="Inicio">Título del desplegable<select name="Inicio" id="Inicio">
                    <option value="i1">En proceso</option>
                    <option value="i2">Asesores ocupados</option>
                    <option value="i3">Asesora de wpp</option>
                    <option value="i4">Vendedor indica un horario</option>
                    <option value="i5">Beneficio</option>
                </select></label>
                <input type="button" value="Generar" onclick="Comentario()">
                <p id="comentario"></p>
        </main>

    </section>

    <!--Medio de pago-->
    <section>
        <main>
            <h2 class="MP">Medio de pago</h2>
            <div class="MP1">
                <h3>Cuenta bancaria</h3>
                <div class="bloque">
                    <div>
                        <label for="DNI1">DNI del titular <br><input type="number" name="DNI1" id="DNI1"></label> <br>
                    </div>
                    <div>
                        <label for="DNI2">DNI de la cuenta <br><input type="number" name="DNI2" id="DNI2"></label> <br>
                    </div>
                    <p id="pmp"></p>
                </div>

                <label for="NBanco">Nombre del banco <br><input type="text" name="NBanco" id="NBanco"></label>
                <p id="ppla"></p>

                <label for="Fecha_ticket">Fecha del ticket <input type="date" name="Fecha_ticket"
                        id="Fecha_ticket"></label><br>
                <p id="pFT"></p>
                <label for="Com"><input type="checkbox" name="Com" id="Com">Comprobante válido</label><br>
                <label for="hoja"><input type="checkbox" name="hoja" id="hoja">Hoja de débito</label>
                <br>
                <p id="checkmp1"></p>
                <input type="button" value="Validar cuenta" onclick="Cuenta()"><br>

                <h3 class="MP1">Tarjeta de crédito</h3>
                <label for="em">Empresa de la tarjeta <input type="text" name="em" id="em"></label> <br>
                <p id="empresa"></p>
                <p id="Plataforma"></p>
                <label for="fecha_t">Fecha de vencimiento<input type="date" name="fecha_t" id="fecha_t"></label>
                <p id="pfecha"></p>
                <div class="bloque">
                    <div>
                        <label for="tit_plan">Titular del plan <br><input type="text" name="tit_plan"
                                id="tit_plan"></label>
                    </div>
                    <div>
                        <label for="tit_tar">Titular de tarjeta <br><input type="text" name="tit_tar"
                                id="tit_tar"></label>
                    </div>
                    <p id="Titulares"></p>

                    <div>
                        <label for="tipo_tar">Tipo de tarjeta <br><input type="text" name="tipo_tar"
                                id="tipo_tar"></label>
                    </div>
                </div>
                <p id="ptipo"></p>

                <label for="cal_tar">Tarjeta calcada<input type="radio" name="cal_tar" id="cal_tar"></label><br>
                <p id="calcada"></p>

                <input type="button" value="Validar tarjeta" onclick="Tarjeta()">
            </div>
        </main>
    </section>

    <!--Beneficio-->
    <section>
        <main>

            <h2 class="obenef">Beneficio</h2>
            <div class="obenef1">
                <h3>Seleccionar el beneficio que cobra el cliente con el desplegable</h3>
                <label for="Ben">Título del desplegable<select name="Ben" id="Ben">
                        <option value="Otros">Pensión de formosa</option>
                        <option value="Plan inclusión social">Plan inclusión social</option>
                        <option value="Potenciar trabajo">Potenciar trabajo</option>
                        <option value="Aportes">Aportes</option>
                        <option value="A">Asignación</option>
                        <option value="P">Pensión no contributiva</option>
                        <option value="M">Jubilación menor</option>
                        <option value="S">Jubilación mayor</option>
                    </select></label>
                <input type="button" id="botonbe" value="Validar beneficio" onclick="Beneficio()">
                <p id="pben"></p>
            </div>
        </main>
    </section>

    <!--Grupo familiar-->
    <section>
        <main>
            <h2 class="gf1">Grupo Familiar</h2>
            <div class="gf2">
                <label for="familiar1">Datos de SGA <br><input type="text" name="familiar1" id="familiar1"></label><br>
                <label for="familiar2">Datos de dateas <br><input type="text" name="familiar2" id="familiar2"></label>
                <input type="button" value="Validar datos del grupo familiar" onclick="GF()">
                <input type="submit" value="Enviar">
                <p id="gf"></p>
            </div>
        </main>
    </section>

    <!--Fotografías-->
    <section>

        <h2 class="foto1">Fotografías</h2>
        <div class="foto2">
            <h3>Verificar DNI en las siguientes fotografías del sistema:</h3>
            <label for="0"><input type="checkbox" value="comprobante de medio de pago" name="0" id="0">Comprobante del
                medio
                de pago</label> <br>

            <label for="1"><input type="checkbox" name="1" value="DNI en la hoja de débito (parte superior)" id="1">DNI
                en
                hoja de débito
                (parte superior)</label><br>

            <label for="2"><input type="checkbox" name="2" value="DNI en la hoja de débito (parte inferior)" id="2">DNI
                en
                hoja de débito
                (parte inferior)</label><br>

            <label for="3"><input type="checkbox" name="3" value="DNI en la condición general 1" id="3">DNI en condición
                general 1</label><br>

            <label for="4"><input type="checkbox" name="4" value="DNI en la condición general 2" id="4">DNI en condición
                general 2</label><br>

            <label for="5"><input type="checkbox" name="5" value="DNI en la condición general 3" id="5">DNI en condición
                general 3</label><br>

            <label for="6"><input type="checkbox" name="6" value="DNI en la condición general 4" id="6">DNI en condición
                general 4</label><br>


            <h3>Verificar firma en las siguientes fotografías del sistema:</h3>
            <label for="7"><input type="checkbox" name="7" value="Firma en la hoja de débito" id="7">Firma en hoja de
                débito
                (parte superior)</label><br>

            <label for="8"><input type="checkbox" name="8" value="Firma en la hoja de débito" id="8">Firma en hoja de
                débito
                (parte inferior)</label><br>

            <label for="9"><input type="checkbox" name="9" value="Firma en la condición general 1" id="9">Firma en
                condición
                general 1</label><br>

            <label for="10"><input type="checkbox" name="10" value="Firma en la condición general 2" id="10">Firma en
                condición general 2</label><br>

            <label for="11"><input type="checkbox" name="11" value="Firma en la condición general 3" id="11">Firma en
                condición general 3</label><br>

            <label for="12"><input type="checkbox" name="12" value="Firma en la condición general 4" id="12">Firma en
                condición general 4</label><br>

            <h3>Verificar las siguientes fotografías del sistema:</h3>
            <label for="13"><input type="checkbox" name="13" value="Precios/fotografía de la condición general 1"
                    id="13">Precio actualizados en condición general 1</label><br>

            <label for="14"><input type="checkbox" name="14" value="Fotografía de la condición general 2"
                    id="14">Clausulas
                de condición general 2</label><br>

            <label for="15"><input type="checkbox" name="15" value="Fotografía de la condición general 3"
                    id="15">Servicios en la condición general 3</label><br>

            <label for="16"><input type="checkbox" name="16" value="Carencias/Fotografía de la condición general 4"
                    id="16">Carencias en la condición general 4</label><br>

            <input type="button" value="Verificar fotografías" ondblclick="Fotografías()">

            <p id="pcheck"></p>

        </div>
    </section>

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ?>" method="post">
<section>
<fieldset>
    <legend>Datos</legend>
    <label for="A">A<input type="text" name="A" id="A"></label><br>
    <label for="B">B <input type="text" name="B" id="B"></label><br>
    <input type="submit" value="Enviar">
</fieldset>
</section>
</form>


    <script src="Funcionalidades Veri.js?v=<?php echo time(); ?>" defer></script>
<script type="module">
    import a from "./Exportar.js"
    console.log(a)
    
    
</script>
</body>

</html>