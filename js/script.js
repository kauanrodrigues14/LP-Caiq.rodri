/*const sections = document.querySelectorAll('section')

const MyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    }   )
}
, {})  */  

function sendMessage(event){

    event.preventDefault()

    const name = document.getElementById('name').value
    const message = document.getElementById('message').value
    const cellphone = '11231231231231'
    const text = `Olá, meu nome é ${name} , ${message}`
    const url = `https://api.whatsapp.com/send?phone=${cellphone}&text=${encodeURIComponent(text)}`
    window.open(url, '_blank').focus()


}