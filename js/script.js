function sendMessage(event){

    event.preventDefault()

    const name = document.getElementById('name').value
    const message = document.getElementById('message').value
    const cellphone = '11989190286'
    const text = `Olá, meu nome é ${name} , ${message}`
    const url = `https://api.whatsapp.com/send?phone=${cellphone}&text=${encodeURIComponent(text)}`
    window.open(url, '_blank').focus()


};     


document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.services-box');

  const options = {
    root: null,
    threshold: 0.4
  };

  const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, delay) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${delay * 0.3}s`;
        entry.target.classList.add('show');
        console.log('Visível:', entry.target);
        
       
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, options);

  boxes.forEach((div) => myObserver.observe(div));
});