console.log("in Monster");

function addMonster(){
    var mLatlng = {lat:player.latlng.lat + Math.random() * (.0001-(-.0001)) -.0001,lng:player.latlng.lng + Math.random() * (.0001-(-.0001)) -.0001};
        var mIcon = {url:"./img/monster.png",
                      scaledSize: new google.maps.Size(50, 50), // scaled size
                      origin: new google.maps.Point(0,0), // origin
                      anchor: new google.maps.Point(0, 0) // anchor
                    };
        var mMarker = new google.maps.Marker({
          position: mLatlng,
          map: map,
          title: 'Monster',
          icon: mIcon
        });
        
        mMarker.addListener('click',function(){
          showBattle();
          curAnimation = 'battle';
          
          
          battleContext.canvas.height = window.screen.height*.5;
          battleContext.canvas.width = window.screen.width;
          
          $.each(monsters,function(i,v){
            if(v.marker==mMarker){
              curMonster = i;
              console.log('Found Monster Marker') 
              
            }
            else{
              console.log('Not this marker')
            }
          })

        })
        
        var mLevel = Math.floor(Math.random()*3+1);
        var mAttack = mLevel;
        var mDefense = mLevel+10;
        var mGold = 3*mLevel;
        var mHealth = mLevel*20;
        var mTimeout = Math.floor(Math.random()*100+30)
        
        monsters.push({
          latlng:mLatlng,
          marker:mMarker,
          icon:mIcon,
          level:mLevel,
          health:mHealth,
          attack:mAttack, 
          defense:mDefense,
          gold:mGold,
          timeout:mTimeout
        })
}