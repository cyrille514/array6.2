
        let carrito = []; // Ahora guardará objetos { nombre: string, precio: number }

        const inputProducto = document.getElementById('input-producto');
        const inputPrecio = document.getElementById('input-precio');
        const inputPosicion = document.getElementById('input-posicion');
        const listaUl = document.getElementById('lista-ul');
        const displayTotal = document.getElementById('display-total');

        function actualizarInterfaz() {
            listaUl.innerHTML = '';
            
            carrito.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = "border-b border-blue-100 py-1 uppercase";
                // Formato pedido: 0. PRODUCTO, €0.00
                li.textContent = `${index}. ${item.nombre}, €${item.precio.toFixed(2)}`;
                listaUl.appendChild(li);
            });

            document.getElementById('contador').textContent = carrito.length;
        }

        function agregarProducto() {
            const nombre = inputProducto.value.trim();
            const precio = parseFloat(inputPrecio.value);

            if (nombre !== "" && !isNaN(precio)) {
                // Guardamos como objeto
                carrito.push({ nombre: nombre, precio: precio });
                
                inputProducto.value = "";
                inputPrecio.value = "";
                inputProducto.focus();
                actualizarInterfaz();
            } else {
                alert("Por favor, introduce nombre y precio válido.");
            }
        }

        // Función con el bucle FOR-OF solicitado
        function calcularTotal() {
            let total = 0;
            
            for (const item of carrito) {
                total += item.precio;
            }

            displayTotal.textContent = `Total: €${total.toFixed(2)}`;
            alert(`El total de tu compra es: €${total.toFixed(2)}`);
        }

        function eliminarPorPosicion() {
            const pos = parseInt(inputPosicion.value);
            if (pos >= 0 && pos < carrito.length) {
                carrito.splice(pos, 1);
                actualizarInterfaz();
            } else {
                alert("Esa posición no existe en la lista.");
            }
        }

        function vaciarCarrito() {
            if (confirm("¿Limpiar toda la lista?")) {
                carrito = [];
                displayTotal.textContent = "Total: €0.00";
                actualizarInterfaz();
            }
        }
    
        