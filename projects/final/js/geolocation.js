var id, options;

function success(pos) {
    console.log(pos);
    updatePlayerLocation(pos);
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

options = {
  enableHighAccuracy: false ,
  timeout: 600000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(success, error, options);
