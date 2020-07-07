$(document).ready(function () {
    
//! Rumus mencari Berat per Teken

//? Lilitan 
//* Panjang / (Ukuran kawat + Hang)

    
$("#btn-hasil-lilitan").click(function (e) {
  

    var panjang = parseInt($("#panjang").val());
    var ukuranKawat = parseInt($("#ukuran-kawat").val());
    var hang = parseInt($("#hang").val());
    var lingkarLuar = parseInt($("#lingkar-luar").val());
    
    var hasilLilitan = panjang / ( ukuranKawat + hang);
  
  $(".hasil-lilitan").text(hasilLilitan);
  console.log(hasilLilitan);
 



//? Berat
//* 3,14 * Lingkar luar * Lilitan

  var hasilBerat = 3.14 * lingkarLuar * hasilLilitan;

  $(".hasil-berat").text(hasilBerat);
  console.log(hasilBerat);

  e.preventDefault();
});








//! Rumus mencari Berat per Tarik
// ? #Lilitan = panjang / ukuran kawat + 2
// ? #Berat = 3,14 * lingkar luar * lilitan



$("#btn-hasil-lilitan-pt").click(function (e) {
  

  var panjang = parseInt($("#panjang-pt").val());
  var ukuranKawat = parseInt($("#ukuran-kawat-pt").val());
  var hang = parseInt($("#hang-pt").val());
  var lingkarLuar = parseInt($("#lingkar-luar-pt").val());
  
  var hasilLilitan = panjang / ukuranKawat + 2;

$(".hasil-lilitan-pt").text(hasilLilitan);
console.log(hasilLilitan);




//? Berat
//* 3,14 * Lingkar luar * Lilitan

var hasilBerat = 3.14 * lingkarLuar * hasilLilitan;

$(".hasil-berat-pt").text(hasilBerat);
console.log(hasilBerat);

e.preventDefault();
});








});