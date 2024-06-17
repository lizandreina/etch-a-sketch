const container = document.querySelector('.container');

function addSquares(number){
    for (let i = 0; i < number ; i++){
    const row = document.createElement('div');
    row.classList.add('row');
        for (let j = 0; j < number ; j++){
            const col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);

            col.addEventListener('mouseenter', () => col.style.backgroundColor = 'yellow');
        }
    container.appendChild(row);
    }
}

addSquares(16);