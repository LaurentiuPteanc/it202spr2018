var id, options;

function success(pos) {
    console.log(pos);
    console.log(pos);
    updatePlayerLocation(pos);
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

options = {
  enableHighAccuracy: false ,
  timeout: 300000,
  maximumAge: 0
};
console.log("before watch position")
id = navigator.geolocation.watchPosition(success, error, options);
