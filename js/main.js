const allTaps = document.querySelectorAll('.tap-contants');
const allLinks = document.querySelectorAll('.tap-links');
function opentap(tapName) {
    allTaps.forEach(tap => tap.classList.remove('active-tap'));
    allLinks.forEach(link => link.classList.remove('active-link'));
    document.getElementById(tapName).classList.add('active-tap');
    event.currentTarget.classList.add('active-link');
  }


  var sidemenu = document.getElementById('sidemenu')
  function openMenu(){
    sidemenu.style.right= "0"
  }
  function closeMenu(){
    sidemenu.style.right= "-150px"
  }



  const scriptURL = 'https://script.google.com/macros/s/AKfycbyT_eEt5-eFrWbukO0e9pbnCJyAOVMScqRaofKDvKAVimyFIzjrk3EisAAGEDyRtKoL/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById( 'msg' )
  form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
            msg.innerHTML="Your message sent successfully";
            setTimeout(function(){
              msg.innerHTML= ' ';
            },5000)
            form.reset()
  })
          .catch(error => console.error('Error!', error.message))
  })


const darkModeToggle = document.getElementById('darkModeToggle');


    darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});




