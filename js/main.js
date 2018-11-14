// este es un objeto json una especie de arreglo con esteroides
// este se puede enviar de diversos lugares osea transporta inforamcion
// entre sistemas
//
// En este caso guarda los datos de las fotos a mostrar
var data = {
  // las fotos
	photos: [
		{
      // una foto
      // su id o lo que la identifica
      id: 1,
      // de donde sale o su ruta (en que carpeta esta pues)
			source: 'photos/1001_01.jpg',
      // de que va la foto
			description: 'Front',
    },
		{
      // otra foto y asi con las demas
			id: 2,
			source: 'photos/1001_02.jpg',
			description: 'Living room',
    },
		{
			id: 3,
			source: 'photos/1001_03.jpg',
			description: 'Kitchen',
    },
		{
			id: 4,
			source: 'photos/1001_04.jpg',
			description: 'Walk-in closet',
    },
		{
			id: 5,
			source: 'photos/1001_05.jpg',
			description: 'Master bathroom',
    },
		{
			id: 6,
			source: 'photos/1001_06.jpg',
			description: 'Master bedroom',
    },
  ],
};

// una especie de global (variable que se puede usar todo el archivo/script) global o en todos lados pues
// guarda la id de la imagen cargada en la foto grande no las fotitos
var activeImageIndex = -1;

// esta funcion arranca todo es como el main digamos
function init() {
  // obtenemos la tabla de los thumbnails miniaturas fotitos QUE YA EXISTE EN HTML no lo creamos
	let table = document.getElementById('tablethumbnails');
  // aqui creamos otro elemento NUEVO no lo sacamos de ningun lado
  // createElement osea crear un elemento en este caso la fila que muestra las miniaturas
	let row = document.createElement('tr');
  // ahora creamos un ciclo para ir creando las celdas de la fila 
  // celdas o td en html
  // tambien las imagenes que van en cada celda
  // osea crea cada foto que va a mostrar y esta limitado
  // por el tamano del objeto json antes explicado el de las fotos
	for (let i = 0; i < data.photos.length; i++) {
    // celda aka td (aka es igual) o celda es igual a td
		let cell = document.createElement('td');
    // la imagen que va en la celda la miniatura vaya
		let image = document.createElement('img');
    // agregamos la fuente al elemento img o imagen, esta fuente o lugar de donde
    // cargar esta en el objeto json
		image.src = data.photos[i].source;
    // agregamos evento aka que cuando demos click en la foto ejecute una funcion
    // esta funcion recibe el id que seria i = la id del json una manera de ahorrar recursos
    // del profe o escribir menos codigo
		image.setAttribute('onclick', 'showPhoto(' + i + ')'); // mete a i como la id
    // appendChild aka agregamos la imagen en la celda o td
    // <td><img></td>
		cell.appendChild(image);
    // aqui la celda a la fila
    // <tr><td><img></td></tr> osea agregamos la celda que asu vez tiene la imagen
		row.appendChild(cell);
	}
  // ya creada la fila con todas las miniaturas
  // la agregamos a la tabla
  // son muchas td asi que no lo pongo pero es lo mismo
  // mete la fila que trae las 6 celdas a la tabla 
	table.appendChild(row);
  // aqui muestra la primera imagen osea
  // le manda el primer elemento del json el 0
  // para que lo muestre en la tabla de abajo
	showPhoto(0);
}

// aqui la funcion muestra la imagen con el indice dado
// osea le mandas 0 y busca el elemento 0 del json de arriba
function showPhoto(imageIndex) {
  // es para mostrar como cambia las imagenes
  // no es necesario pero ayuda a ver mas claro
  // todo muestra el indice y un mensaje para
  // saber que imagen esta mostrandose
	console.log('showing photo ' + imageIndex);
  // obtiene NO CREA la imagen del html que muestra la foto grande
  // y le pone la fuente del json o sea le mando 0 que seria el imageIndex
  // y carga la fuente de ese en main photo
	document.getElementById('mainphoto').src = data.photos[imageIndex].source; // imageIndex es el numero que mandaron y lo busca en el json
                                                                             // en el json saca su source o donde esta la imagen y la pone en la foto de abajo en el html 
  // aqui la descripcion o nombre de la imagen
  // lo mismo pero cambia fuente por descripcion
	document.getElementById('description').innerHTML = data.photos[imageIndex].description;
  // aqui le dices a la global que cambio la imagen de la tabla de abajo
	activeImageIndex = imageIndex; // update active image index
}

// esto explica las flechas
// enta la flecha izquierda
function showPreviousPhoto() {
  // cambia la global osea le quita 1 para avisar que vas para atras o 
  // sea estas en la 2 y presionas la flecha izquierda el numero disminute a 1
  // y cargas la imagen con el indice 1
	activeImageIndex--;
  // pero si estas en la posicion 0 aka la primera ocupas redirijirlo a la ultima
  // para evitar que truene el codigo
	if (activeImageIndex == -1) activeImageIndex = data.photos.length -1;
  // aqui pues le dices que carges la imagen con el nuevo id (disminuido en 1 o el ultimo)
	showPhoto(activeImageIndex);
}

// lo mismo pero al reves
function showNextPhoto() {
	activeImageIndex++;
  // aqui obvio si estas en el ultimo indice te regresas al primero
	if (activeImageIndex == data.photos.length) activeImageIndex = 0;
	showPhoto(activeImageIndex);
}
