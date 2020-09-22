
const address = document.getElementById('address');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const name = document.getElementById('name');
var id = document.getElementById('id');
const image = document.getElementById('image');
const database = firebase.database();


/* var ref = database.ref('/playground/');
ref.once("value")
  .then(function(snapshot) {
    count = snapshot.numChildren();   
  });*/

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
    id = document.getElementById('id');
    
  database.ref('/playground/' + id.value).set({
    Address: address.value,
    Lat: latitude.value,
    Lng: longitude.value,
    Name: name.value,
    Id: id.value,
    Pic: image.value,
  });
    var slides = document.getElementById('slides');
    var carousel = document.getElementById('carousel');
    var grass = document.getElementById('grass');
    var ladder = document.getElementById('ladder');
    var parking = document.getElementById('parking');
    var ropes = document.getElementById('ropes');
    var sand = document.getElementById('sand');
    var shade = document.getElementById('shade');
    var sitting = document.getElementById('sitting');
    var swings = document.getElementById('swings');
    var water = document.getElementById('water');
    var check_slides;
    var check_carousel;
    var check_grass;
    var check_parking;
    var check_ropes;
    var check_sand;
    var check_shade;
    var check_sitting;
    var check_swings;
    var check_water;
    var check_ladder;
    if(slides.checked)
        {
          check_slides= "יש";
        }
    else
       {
              check_slides= "אין";                             
         }
    if(carousel.checked)
        {
          check_carousel= "יש";
        }
    else
       {
              check_carousel= "אין";                             
         }
    if(grass.checked)
        {
          check_grass= "יש";
        }
    else
       {
              check_grass= "אין";                             
         }
    if(parking.checked)
        {
          check_parking= "יש";
        }
    else
       {
              check_parking= "אין";                             
         }
    if(ropes.checked)
        {
          check_ropes= "יש";
        }
    else
       {
              check_ropes= "אין";                             
         }
    if(sand.checked)
        {
          check_sand= "יש";
        }
    else
       {
              check_sand= "אין";                             
         }
    if(shade.checked)
        {
          check_shade= "יש";
        }
    else
       {
              check_shade= "אין";                             
         }
    if(sitting.checked)
        {
          check_sitting= "יש";
        }
    else
       {
              check_sitting= "אין";                             
         }
    if(swings.checked)
        {
          check_swings= "יש";
        }
    else
       {
              check_swings= "אין";                             
         }
    if(water.checked)
        {
          check_water= "יש";
        }
    else
       {
              check_water= "אין";                             
         }
    if(ladder.checked)
        {
          check_ladder= "יש";
        }
    else
       {
              check_ladder= "אין";                             
         }
    database.ref('/features/' + id.value).set({
        Slides : check_slides,
        Carousel : check_carousel,
        Grass : check_grass,
        Parking : check_parking,
        Ropes :check_ropes,
        Sand : check_sand,
        Shadow : check_shade,
        Sitting : check_sitting,
        Swings : check_swings,
        Water : check_water,
        Ladder : check_ladder,
        Id : id.value,
        
  });
    window.alert('הגן נשמר בהצלחה');
});

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
 
    id = document.getElementById('id');
    var database = firebase.database().ref().child('playground');
            database.once('value', function(snapshot){
                if(snapshot.exists()){
                    
                    snapshot.forEach(function(data){
                        if(id.value == data.val().Id){
                           // name.value = data.val().Name;
                            $('#address').val(data.val().Address);
                            $('#latitude').val(data.val().Lat);
                            $('#longitude').val(data.val().Lng);
                            $('#name').val(data.val().Name);
                            $('#image').val(data.val().Pic);
                            
                        }
    
                  });

                };
            });
    
    var database = firebase.database().ref().child('features');
            database.once('value', function(snapshot){
                if(snapshot.exists()){
                    
                    snapshot.forEach(function(data){
                        if(id.value == data.val().Id){
                           if(data.val().Slides == "יש")
                               {
                                   slides.checked = true;
                               }
                            if(data.val().Carousel == "יש")
                               {
                                   carousel.checked = true;
                               }
                            if(data.val().Grass == "יש")
                               {
                                   grass.checked = true;
                               }
                            if(data.val().Ladder == "יש")
                               {
                                   ladder.checked = true;
                               }
                            if(data.val().Parking == "יש")
                               {
                                   parking.checked = true;
                               }
                            if(data.val().Water == "יש")
                               {
                                   water.checked = true;
                               }
                            if(data.val().Ropes == "יש")
                               {
                                   ropes.checked = true;
                               }
                            if(data.val().Sand == "יש")
                               {
                                   sand.checked = true;
                               }
                            if(data.val().Shadow == "יש")
                               {
                                   shade.checked = true;
                               }
                            if(data.val().Sitting == "יש")
                               {
                                   sitting.checked = true;
                               }
                            if(data.val().Swings == "יש")
                               {
                                   swings.checked = true;
                               }
                            
                        }
    
                  });

                };
            });
    
    
});

$('#clearBtn').click(function(){
    
    $('#id').val('');
    $('#address').val('');
    $('#latitude').val('');
    $('#longitude').val('');
    $('#name').val('');
    $('#image').val('');
    slides.checked = false;
    carousel.checked = false;
    grass.checked = false;
    ladder.checked = false;
    parking.checked = false;
     water.checked = false;
    ropes.checked = false;
    sand.checked = false;
    shade.checked = false;
    sitting.checked = false;
    swings.checked = false;
});

deleteBtn.addEventListener('click', (e) => {
  e.preventDefault();
  id = document.getElementById('id');
    
  database.ref('/playground/' + id.value).remove();
    database.ref('/features/' + id.value).remove();
    window.alert('הגן נמחק בהצלחה');
});




