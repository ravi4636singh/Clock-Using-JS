const form = document.querySelector('#form_input')
const personName = document.querySelector('#name')
let displayName = ''

const clock = () => {
    const dt = new Date()

    let hours = dt.getHours().toLocaleString().padStart(2, '0')
    let minutes = dt.getMinutes().toLocaleString().padStart(2, '0')
    let seconds = dt.getSeconds().toLocaleString().padStart(2, '0')
    let greetingMsg = ''

    if(hours >= 0 && hours < 12){
        greetingMsg = 'Good Morning'
    }else if(hours >= 12 && hours < 16){
        greetingMsg = 'Good Afternoon'
    }else{
        greetingMsg = 'Good Evening'
    }
    
    document.querySelector('.greeting').textContent = `${greetingMsg}, ${displayName}`
    document.querySelector('.hours').textContent = hours
    document.querySelector('.minutes').textContent = minutes
    document.querySelector('.seconds').innerHTML = seconds
    
    setInterval(clock, 1000)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(personName === ''){
        alert('Please! Enter Name')
    }else{
        displayName = personName.value
        clock()
        document.querySelector('.form').style.display = 'none'
        document.querySelector('.main-screen').style.display = 'block'
    }
})