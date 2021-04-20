console.log("JavaScripit is working!")

document.getElementById('pievienotSarakstam').addEventListener('click', () => {
    console.log("Poga nospiesta!");

    let popUp = document.getElementById('popUp');
    
    popUp.style.display = 'block'
})