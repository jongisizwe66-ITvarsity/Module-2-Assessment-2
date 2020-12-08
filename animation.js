//defult load store
$(document).ready(function(){
  $(".store-list-content").load(function(){
    $("#clothes-list").hide(1000);
  });
});
 
// display clothes stores
$(document).ready(function(){
  $(".store-col1").click(function(){
    $("#clothes-list").show(1000);
    $("#grocery-list").hide(1000);
    $("#electronic-list").hide(1000);
    $("#movies-list").hide(1000);
    $("#food-list").hide(1000);
  });
});

// display grocery stores
$(document).ready(function(){
  $("#store-grocery").click(function(){
      $("#grocery-list").show(1000);
      $("#clothes-list").hide(1000);
      $("#electronic-list").hide(1000);
      $("#movies-list").hide(1000);
      $("#food-list").hide(1000);
  });
});

// display electronic stores
$(document).ready(function(){
  $("#store-tech").click(function(){
    $("#electronic-list").show(1000);
    $("#clothes-list").hide(1000);
    $("#grocery-list").hide(1000);
    $("#movies-list").hide(1000);
    $("#food-list").hide(1000);
  });
});

// display movies stores
$(document).ready(function(){
  $("#store-movies").click(function(){
    $("#movies-list").show(1000);
    $("#electronic-list").hide(1000);
    $("#clothes-list").hide(1000);
    $("#grocery-list").hide(1000);
    $("#food-list").hide(1000);
  });
});

// display resturante stores
$(document).ready(function(){
  $(".store-col3").click(function(){
    $("#food-list").show(1000);
    $("#movies-list").hide(1000);
    $("#electronic-list").hide(1000);
    $("#clothes-list").hide(1000);
    $("#grocery-list").hide(1000);
  });
});

