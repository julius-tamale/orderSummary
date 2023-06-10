//take control of the buttons
const payBtn = document.getElementById('pay')

const cancelBtn = document.getElementById('cancel')

// take control of main
const mainUpdate = document.querySelector('main')



//add event listens
payBtn.addEventListener('click', handleClick)
cancelBtn.addEventListener('click', handleClick)

//click function
function handleClick (event) {
    if(event.target.id === payBtn.id) {
        mainUpdate.innerHTML = `
                <div class='after-click'><p class='after-click-text'>Thank you</p></div>`        
    } else if(event.target.id === cancelBtn.id) {
        mainUpdate.innerHTML = `
                <div class='after-click sad'><p class='after-click-text'>Sad<br> to see you cancel</p></div>`
    }
}