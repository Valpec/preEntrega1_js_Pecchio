// Carrito de compradocu
function realizar_compra(monto, dto) {
    let salir_compra = false
    do {
        let medio_pago = prompt(`Seleccione un medio de pago
        1. Tarjeta credito
        2. Transferencia
        0. Volver a menu`)

        switch (medio_pago) {
            case "1":
            case "2":
                //si existe algo en el carrito y la bandera de descuento es verdadera
                if (monto > 0 && dto) {
                    alert(`La compra fue realizada con el descuento aplicado. Muchas gracias por comprar productos en nuestro emprendimiento`)
                    salir_menu = true
                }
                //si existe algo en el carrito y no se aplicaron descuentos
                else if (monto > 0 && !dto) {
                    alert(`La compra fue realizada sin descuentos aplicados. Muchas gracias por comprar productos en nuestro emprendimiento`)
                    salir_menu = true
                }
                // si no existe nada en el carrito
                else {
                    alert(`La compra no pudo ser realizada. No hay elementos en el carrito.`)
                    salir_menu = false
                }
                salir_compra = true
                break
                // salir sin seleccionar metodo de pago
            case "0":
                alert('La compra no fue realizada.')
                salir_compra = true
                break
            default:
                alert(`La opción ingresada no es correcta. Intente nuevamente`)
                break
        }
    }
    while (!salir_compra)
    return salir_menu
}


function sumar_montos(monto, prod, precio) {
    let cant_producto = parseInt(prompt(`El valor de cada ${prod} es de $${precio}. 
        Ingrese la cantidad de prductos a agregar:`))

    // validacion de que la cantidad de productos ingresada es un numero valido para poder operar
    while (isNaN(cant_producto)) {
        cant_producto = parseInt(prompt(`El valor ingresado no es un número valido. Intente de nuevo (si desea anular la operacion, ingrese 0):`))
    }
    //acumulacion de monto con valores seleccionados
    monto += (cant_producto * precio)

    alert(`Se agregaron exitosamente ${cant_producto} ${prod} al carrito.
    El monto es agregado es de $${cant_producto * precio}.`)

    return monto
}


function agregar_prods(monto) {
    let salir_prods = false
    do {
        let producto = prompt(`Para agregar productos al carrito, seleccione una de las opciones:
    1. Velas    ($2500 c/u)
    2. Esencia  ($1000 c/u)
    3. Textiles ($3000 c/u)
    4. Decoraciones ($2000 c/u)
    0. Listo`)

        switch (producto) {
            case "1":
                monto = sumar_montos(monto, "vela", 2500)
                break
            case "2":
                monto = sumar_montos(monto, "esencia", 1000)
                break
            case "3":
                monto = sumar_montos(monto, "textil", 3000)
                break
            case "4":
                monto = sumar_montos(monto, "decoración", 2000)
                break
            case "0":
                alert(`Usted será redireccionado al menú principal`)
                salir_prods = true
                break
            default:
                alert(`La opcion ${producto} no es una opción disponible. Intente de nuevo.`)
                break
        }
    }
    while (!salir_prods)
    return monto
}


// funcion principal de menu 
function menu(nombre) {
    // inicializo valores 
    let monto = 0
    let descuento = false
    let salir_menu = false
    do {
        let opcion = prompt(`Nos alegra que quiera comprar con nosotros ${nombre}. Seleccione una de las siguientes opciones
    1. Agregar productos al carrito
    2. Ver monto carrito
    3. Buscar descuentos
    4. Finalizar compra
    0. Cancelar compra`)
        switch (opcion) {
            case "1":
                monto = agregar_prods(monto)
                break
            case "2":
                alert(`El monto actual es ${monto}`)
                break
            case "3":
                // la idea es poder hacer esta parte de codigo como funcion en un futuro con arrays, asi se pueden hacer return de varios valores (el del monto y descuento)
                let monto_viejo = monto
                alert(`Se le aplicará un descuento del 10% a su compra si el monto es superior a $50.000`)
                if (monto >= 50000) {
                    descuento = true
                    monto = monto * 0.9
                    alert(`Se le aplicó el descuento a su compra, su monto anterior es de $${monto_viejo}. Fue actualizado a $${monto}`)
                }
                else {
                    alert(`Su monto actual es de $${monto}. Es inferior a $50.000, por lo que no se aplica el descuento.`)
                }
                break
            case "4":
                salir_menu = realizar_compra(monto, descuento)
                break
            case "0":
                alert(`La compra fue cancelada. Gracias por visitarnos.`)
                salir_menu = true
                break
            default:
                alert(`${opcion} No es una opcion valida. Por favor intente de nuevo`)
                break
        }
    }
    while (!salir_menu)
}


// inicio de simulador. llamada a la funcion principal
let nombre = prompt(`¡Hola! Te damos la bienvenida al carrito de Cattalina DECO-HOME. 
    Ingresa tu nombre para continuar`)

menu(nombre)