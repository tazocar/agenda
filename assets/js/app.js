$(document).ready(function(){

  $('#add').click(function(){
    var name = $('#name').val();
    var phone = $('phone').val();
    $('phone').val("");
    $('#name').val("");
    var contenedor = $('#contacts');
    contenedor.append('<div> <h2>' + name + '</h2><i class= "fa fa-trash trash"></i></i></div>');
  })
})