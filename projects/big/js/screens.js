function showInventory(){
      $("#inventoryScreen").show();
      $("#inventoryTab").addClass('mdc-tab--active')
      $("#mapScreen").hide();
      $("#mapTab").removeClass('mdc-tab--active')
      $("#equipmentScreen").hide();
      $("#equipmentTab").removeClass('mdc-tab--active')
      $("#battleScreen").hide();
      $("#toolbar").show();
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