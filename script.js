const containerColumn = document.querySelector('.container');

function addDivs(rows, columns){
    for (let i = 0; i < rows ; i++){
    const row = document.createElement('div');
    row.classList.add('row');
        for (let j = 0; j < columns ; j++){
            const col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);
        }
    containerColumn.appendChild(row);
    }
}

addDivs(16, 16);