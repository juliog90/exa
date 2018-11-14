var data = {
	photos: [
		{
			id: 1,
			source: 'photos/1001_01.jpg',
			description: 'Front',
    },
		{
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

var activeImageIndex = -1;

function init() {
	// show thumbnails
	let table = document.getElementById('tablethumbnails');
	let row = document.createElement('tr');
	for (let i = 0; i < data.photos.length; i++) {
		let cell = document.createElement('td');
		let image = document.createElement('img');
		image.src = data.photos[i].source;
		image.setAttribute('onclick', 'showPhoto(' + i + ')');
		cell.appendChild(image);
		row.appendChild(cell);
	}
	table.appendChild(row);
	// show first photo
	showPhoto(0);
}

function showPhoto(imageIndex) {
	console.log('showing photo ' + imageIndex);
	document.getElementById('mainphoto').src = data.photos[imageIndex].source;
	document.getElementById('description').innerHTML = data.photos[imageIndex].description;
	activeImageIndex = imageIndex; // update active image index
}

function showPreviousPhoto() {
	activeImageIndex--;
	if (activeImageIndex == -1) activeImageIndex = data.photos.length -1;
	showPhoto(activeImageIndex);
}

function showNextPhoto() {
	activeImageIndex++;
	if (activeImageIndex == data.photos.length) activeImageIndex = 0;
	showPhoto(activeImageIndex);
}
