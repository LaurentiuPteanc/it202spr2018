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
        tileClone.find('#tileImg').attr('src',"./img/items/"+v.type+".png");
        tileClone.find('#itemDescription').text("+"+v.strength+" "+v.attackType)
        $('#inventoryList').append(tileClone)
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
      $("#toolbar").hide();
      $("#fightCombatMenu").hide();
    }