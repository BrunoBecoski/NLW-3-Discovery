// create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg", 
  iconSize: [58, 68],
  iconAnchor: [29, 68]
});

let marker;

// create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon 
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon })
    .addTo(map);
}); 

// add the photo field
function addPhotoField() {
  // get photo container #images
  const container = document.querySelector('#images');

  // get the container to duplicate .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload');

  // clone the last image added
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  // check if the field is empty, if yes, do not add it to the image container
  const input = newFieldContainer.children[0]

  if ( input.value == "") {
    return;
  }
  
  // clear the field before adding to the images container
  input.value = "";

  // add the clone to the container #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {

  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if(fieldsContainer.length < 2) {
    // clear the field value
    span.parentNode.children[0].value = "";
    return;
  }

  // delete the field
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  // remove the class .active from the buttons
  document.querySelectorAll('.button-select button')
    .forEach(function(button) {
      button.classList.remove('active')
    });
  // put class .active on that clicked button
  const button =event.currentTarget;
  button.classList.add('active');
  
  // update my hidden input with the selected value
  const input = document.querySelector('[name="open_on_weekends"]');
 
  input.value = button.dataset.value;
}

