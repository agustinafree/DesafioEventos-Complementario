//-----Variables----//
let subtotal = 0;
let carrito=[];
const contenedor_productos = document.getElementById('contenedor-productos');
const contenedor_carrito = document.getElementById('contenedor-carrito');


//---- llamado a las funciones y metodos----//

function show_products(productos) {
	for (producto of productos) {
		const div = document.createElement('div');
		div.className = 'producto';
		//Definir el innerHTML del elemento 
		div.innerHTML = `
		<div class='card'>
			<h3>
				${producto.marca}
			</h3>
			<img src=${producto.imagen}
				width="300px"
    			height="autopx"/>
    		<h4>
				$${producto.precio}
			</h4>
			<h5>
				Stock: ${producto.stock}
			</h5>
			<button class='btn' onclick="capturar('${producto.id}')">Añadir a Carrito</button>
			<br/>
			<br/>
			<hr></hr>
		</div>`;
		contenedor_productos.appendChild(div);
	}
}


show_products(productos);
	


function capturar(id){
    console.log(id);
    productoAgregar=productos.find(e=>e.id==id);
    console.log(productoAgregar);
    carrito.push(productoAgregar);
    console.log(carrito);
    carritoGuardar = localStorage.setItem("carrito",JSON.stringify(carrito));
    console.log(JSON.parse(localStorage.getItem("carrito")));
	push_cart(id); 
}


//-------------hasta acá me fue re bien------------//

//---- crear otra cart generada al apretar añadir al carrito que tenga el boton, "eliminar del carrito"---- no funciona por ahora ////Ya arreglé el error estaba en el div.id = producto.id y la llamada al producto, me falta poder eliminar del Array además del html// Lo conversado en el workshop, proximamente el carrito estará en otra pagina! ---//


function push_cart(item) {
	const div = document.createElement('div');
	div.id = producto.id;
	div.className = 'producto-carrito';
	//Definir innerHTML
	div.innerHTML = `				
				<h3>
					${producto.nombre}${producto.marca} 
				</h3>
				<img src=${producto.imagen}
				width="50px"
    			height="auto"/>
				<h4>
					$${producto.precio}					
				</h4>
				<h5></h5>
				<button class='btn' onclick='Remove_From_Cart(${producto.id})'>
					Eliminar del Carrito
				</button>
			`;
	contenedor_carrito.appendChild(div);
}
function Remove_From_Cart(item) {
	carrito.splice(carrito.indexOf(item));
	contenedor_carrito.removeChild(document.getElementById(item));

}
//--Lo conversado en el workshop, proximamente el carrito estará en otra pagina! ---//