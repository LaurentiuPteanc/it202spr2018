function showInventory(){
      $("#inventoryScreen").show();
      $("#inventoryTab").addClass('mdc-tab--active')
      $("#mapScreen").hide();
      $("#mapTab").removeClass('mdc-tab--active')
      $("#equipmentScreen").hide();
      $("#equipmentTab").removeClass('mdc-tab--active')
      $("#battleScreen").hide();
      $("#toolbar").show();
      
      $('tileTemplate').show();
      
      $('#tileTemplate').siblings().remove();
      
      console.log(player.inventory);
      $.each(player.inventory,function(i,v){
        console.log(v)
        var tileClone = $('#tileTemplate').clone();
        console.log(tileClone.find('#tileImg'));
        tileClone.find('#tileImg').attr('src',"./img/items/"+v.subType+".png");
        tileClone.find('#itemDescription').text(v.description);//"+"+v.strength+" "+v.attackType)
        tileClone.attr("ind",i)
        tileClone.attr("type",v.type)
        $('#inventoryList').append(tileClone)
        tileClone.on('click',function(){
          console.log($(this).attr('ind'))
          var item = $(this);
          if(item.attr('type')=='food'){
            player.health += player.inventory[item.attr('ind')].strength;
            player.inventory.splice(item.attr('ind'),1);
            showInventory();
          }
          
        });
        tileClone.show();
      })
      $('#tileTemplate').hide();
    }
    
    function showMap(){
      $("#inventoryScreen").hide();
      $("#inventoryTab").removeClass('mdc-tab--active')
      $("#mapScreen").show();
      $("#mapTab").addClass('mdc-tab--active')
      $("#equipmentScreen").hide();
      $("#equipmentTab").removeClass('mdc-tab--active')
      $("#battleScreen").hide();
      $("#toolbar").show();
    }
    
    function showEquipment(){
      $("#inventoryScreen").hide();
      $("#inventoryTab").removeClass('mdc-tab--active')
      $("#mapScreen").hide();
      $("#mapTab").removeClass('mdc-tab--active')
      $("#equipmentScreen").show();
      $("#equipmentTab").addClass('mdc-tab--active')
      $("#battleScreen").hide();
      $("#toolbar").show();
    }
    
    function showBattle(){
      $("#inventoryScreen").hide();
      $("#mapScreen").hide();
      $("#equipmentScreen").hide();
      $("#battleScreen").show();
      $("#mainCombatMenu").show(); 
      $("#toolbar").hide();
      $("#fightCombatMenu").hide();
    }
    
    function inventoryItemEventHandler(item,index){
      if(item.type == 'food'){
        console.log('here')
        player.health += item.strength;
        player.inventory.splice(index,1)
        $('this').remove();
        showInventory();
      }
      else if(item.type == 'weapon'){
        
      }

  
    }