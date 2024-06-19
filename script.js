let container = document.querySelector('.container');

function addSquares(number){
    for (let i = 0; i < number ; i++){
    const row = document.createElement('div');
    row.classList.add('row');
        for (let j = 0; j < number ; j++){
            const col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);

            col.addEventListener('mouseenter', () => col.style.backgroundColor = 'black');
        }
    container.appendChild(row);
    }
}

const firstGrid = addSquares(16);
firstGrid;

const button = document.querySelector('button');

function getSquares(){
    let choice = prompt('How many squares would you like on each side?', 'Max. 100');

    if (choice === null || choice === ''){
    } else {
        choice = parseInt(choice);
        if (isNaN(choice) || choice > 100){
            choice = prompt('Please choose a number below 101');
            if (choice < 101 && choice > 1) {
                container.remove();
    
                container = document.createElement('div');
                container.classList.add('container');
                document.body.appendChild(container);
                addSquares(choice);
            } else if (choice < 2 && choice !== null) {
                choice = prompt('Please choose a number higher than 1');
                if (choice < 100 && choice > 1) {
                    container.remove();
        
                    container = document.createElement('div');
                    container.classList.add('container');
                    document.body.appendChild(container);
                    addSquares(choice);
                }
            }
        } else if (choice < 2) {
            choice = prompt('Please choose a number higher than 1');
            if (choice > 100) {
                choice = prompt('Please choose a number below 101');
                if (choice < 101 && choice > 1) {
                    container.remove();
        
                    container = document.createElement('div');
                    container.classList.add('container');
                    document.body.appendChild(container);
                    addSquares(choice);
                }
            } else if (choice < 101 && choice > 1) {
                container.remove();
    
                container = document.createElement('div');
                container.classList.add('container');
                document.body.appendChild(container);
                addSquares(choice);
            }
        } else {
            container.remove();

            container = document.createElement('div');
            container.classList.add('container');
            document.body.appendChild(container);
            addSquares(choice);
        }
    }
}

button.addEventListener('click', getSquares);
