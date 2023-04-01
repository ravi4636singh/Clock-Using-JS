const clock = () => {
    const dt = new Date()

    let hours = dt.getHours().toLocaleString().padStart(2, '0')
    document.querySelector('.hours').textContent = hours

    let minutes = dt.getMinutes().toLocaleString().padStart(2, '0')
    document.querySelector('.minutes').textContent = minutes
    
    let seconds = dt.getSeconds().toLocaleString().padStart(2, '0')
    document.querySelector('.seconds').innerHTML = seconds
}

setInterval(clock, 1000)