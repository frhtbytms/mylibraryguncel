// Genel JS - şimdilik küçük yardımcı fonksiyonlar
document.addEventListener('DOMContentLoaded', function(){
  // Basit: .btn linklerine tıklama davranışı
  document.querySelectorAll('.btn').forEach(function(b){
    b.addEventListener('click', function(e){
      // form submit olan butonlar dışında link davranışı yok
    });
  });
});
