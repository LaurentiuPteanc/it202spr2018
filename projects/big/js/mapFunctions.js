function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 30,
          center: player.latlng,
          styles: mapStyle,
          disableDefaultUI:true,
          tilt:45
        });
        
        getLocation();
        player.icon = {url:"./img/player.png",
                      scaledSize: new google.maps.Size(50, 50), // scaled size
                      origin: new google.maps.Point(0,0), // origin
                      anchor: new google.maps.Point(0, 0) // anchor
                    };
        player.marker = new google.maps.Marker({
          position: player.latlng,
          map: map,
          title: 'Player',
          icon: player.icon
        });
        getCrimes();
        animate();
      }
    function getLocation() {
      if (navigator.geolocation) {
        console.log('here');
        navigator.geolocation.getCurrentPosition(updatePlayerLocation);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    function updatePlayerLocation(position){
      console.log(position)
      console.log(player)
      player.latlng = {lat:position.coords.latitude,lng:position.coords.longitude}
      console.log(player);
      player.marker.setMap(null);
      player.marker = new google.maps.Marker({
          position: player.latlng,
          map: map,
          title: 'Player',
          icon: player.icon
        });
        
      getDistrict(player.latlng);
        
      map.panTo(player.latlng);
    }
    