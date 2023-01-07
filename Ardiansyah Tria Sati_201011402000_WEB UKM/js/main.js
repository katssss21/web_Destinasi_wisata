
// // Initialize and add the map// Initilize map
function initMap(){
	//location of the map default
	const loc = {lat: -6.200000, lng: 106.816666};
	//Map on location
	const map = new google.maps.Map(document.querySelector('.map')
		,{
		zoom:14,
		center: loc
	});
	// marker
	const marker = new google.maps.Marker({
		position: loc, map: map
	});
}
// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      850
    );
  }
});

function validateForm() {
  if (document.forms["formPendaftaran"]["nama"].value == "") {
      alert("Nama Tidak Boleh Kosong");
      document.forms["formPendaftaran"]["nama"].focus();
      return false;
  }
  if (document.forms["formPendaftaran"]["nim"].value == "") {
      alert("Email Tidak Boleh Kosong");
      document.forms["formPendaftaran"]["nim"].focus();
      return false;
  }
  if (document.forms["formPendaftaran"]["tempatLahir"].value == "") {
      alert("Email Tidak Boleh Kosong");
      document.forms["formPendaftaran"]["tempatLahir"].focus();
      return false;
  }
  if (document.forms["formPendaftaran"]["tanggal"].value == "") {
      alert("Email Tidak Boleh Kosong");
      document.forms["formPendaftaran"]["tanggal"].focus();
      return false;
  }
  if (document.forms["formPendaftaran"]["agama"].selectedIndex < 1) {
      alert("Pilih Jurusan.");
      document.forms["formPendaftaran"]["agama"].focus();
      return false;
  }
  if (document.forms["formPendaftaran"]["alamat"].value == "") {
      alert("Email Tidak Boleh Kosong");
      document.forms["formPendaftaran"]["alamat"].focus();
      return false;
  }
  if (document.forms["formPendaftaran"]["noHp"].value == "") {
      alert("Email Tidak Boleh Kosong");
      document.forms["formPendaftaran"]["noHp"].focus();
      return false;
  }
  if (document.forms["formPendaftaran"]["Ukm"].selectedIndex == "") {
      alert("Email Tidak Boleh Kosong");
      document.forms["formPendaftaran"]["Ukm"].focus();
      return false;
  }
  if (document.forms["formPendaftaran"]["kegiatan"].value == "") {
      alert("Email Tidak Boleh Kosong");
      document.forms["formPendaftaran"]["kegiatan"].focus();
      return false;
  }
  if (document.forms["formPendaftaran"]["foto"].value == "") {
      alert("Email Tidak Boleh Kosong");
      document.forms["formPendaftaran"]["foto"].focus();
      return false;
  }
   alert("Pedaftaran Berhasil");
};