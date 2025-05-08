const gelasA = document.getElementById('gelasA')
const gelasB = document.getElementById('gelasB')
const gelasC = document.getElementById('gelasC')

const arrayGelas = [gelasA, gelasB, gelasC]

function clickCup() {
    for (let i = 0; i < arrayGelas.length; i++){
        let gelas = arrayGelas[i]
        if (gelas.className == 'gelas teh' || gelas.className == 'gelas kopi') {
            gelas.addEventListener('click', moveContent)
        }else{
            gelas.removeEventListener('click', moveContent)
        }
    }
}

function moveContent(event){
    const gelasBerisi = event.target
    let gelasKosong;
    for (let i = 0; i < arrayGelas.length; i++){
        if (arrayGelas[i].className=='gelas kosong'){
            gelasKosong = arrayGelas[i]
        }
    }
    gelasKosong.className = gelasBerisi.className
    gelasKosong.textContent = gelasBerisi.textContent
    gelasBerisi.className = 'gelas kosong'
    gelasBerisi.textContent = 'Kosong' 

    clickCup()
}

clickCup()