const container = document.querySelector('.container');

function addDivs(columns){
    for (let i = 1; i < columns ; i++){
        const col = document.createElement('div');
        col.classList.add('col');
        container.appendChild(col);
    }
}

addDivs(17);