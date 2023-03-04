// event pada saat link di klik

$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);   

    // mencari jarak antara sebuah elemen
    // console.log(elemenTujuan.offest().top); 
    
    // pindahkan scroll
    $('html, body').animate({
        scrollTop : elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    // mematikan a
    e.preventDefault();
});