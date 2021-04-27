const POP_UP = document.getElementById('popUp');
let uzdevumi = [];

window.addEventListener('load', () => {
    uzdevumi = JSON.parse(localStorage.getItem("uzdevumi") || "[]");
    console.log(uzdevumi)
    render();
});

document.getElementById('pievienotSarakstam').addEventListener('click', () => {
    POP_UP.style.display = 'block';

})

document.getElementById('pievienotUzdevumu').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let uzdevums1 = {uzdevums: uzdevums.value, termins: termins.value};

    uzdevums.value = "";
    termins.value = "";
    
    uzdevumi.push(uzdevums1);

    render();
})

function render() {
    let list = document.getElementById('list');
    list.innerHTML = "";

    for(let i = 0; i < uzdevumi.length; i++) {
        let uzdevums1 = `
        <div class="uzdevums2">
            <h3>Uzdevums: ${uzdevumi[i].uzdevums}</h3>
            <h4>Termiņš: ${uzdevumi[i].termins}</h4>
            <button id="dzestUzdevumu">Dzēst</button>
        </div>`;

        list.innerHTML += uzdevums1;
    }

    localStorage.setItem("uzdevumi", JSON.stringify(uzdevumi))

     dzestUzdevumu = document.getElementById('dzestUzdevumu');
}



