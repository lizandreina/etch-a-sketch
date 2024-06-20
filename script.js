let container = document.querySelector('.container');

function getRandomColor(){
    let randomNumber = () => Math.floor(Math.random() * 255);
    let rgbColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    return rgbColor;
}

function addSquares(number){
    for (let i = 0; i < number ; i++){
    const row = document.createElement('div');
    row.classList.add('row');
        for (let j = 0; j < number ; j++){
            const col = document.createElement('div');
            col.classList.add('col');
            row.appendChild(col);

            let timesHovered = 0;

            col.addEventListener('mouseenter', () => {
                let color = getRandomColor();
                if (timesHovered === 0){
                    col.style.backgroundColor = color;
                    col.style.opacity = 0;
                    timesHovered += 1;
                } else if (timesHovered === 1) {
                    col.style.opacity = 0.1;
                    timesHovered += 1;
                } else if (timesHovered === 2) {
                    col.style.opacity = 0.2;
                    timesHovered += 1;
                } else if (timesHovered === 3) {
                    col.style.opacity = 0.3;
                    timesHovered += 1;
                } else if (timesHovered === 4) {
                    col.style.opacity = 0.4;
                    timesHovered += 1;
                } else if (timesHovered === 5) {
                    col.style.opacity = 0.5;
                    timesHovered += 1;
                } else if (timesHovered === 6) {
                    col.style.opacity = 0.6;
                    timesHovered += 1;
                } else if (timesHovered === 7) {
                    col.style.opacity = 0.7;
                    timesHovered += 1;
                } else if (timesHovered === 8) {
                    col.style.opacity = 0.8;
                    timesHovered += 1;
                } else if (timesHovered === 9) {
                    col.style.opacity = 0.9;
                    timesHovered += 1;
                } else {
                    col.style.opacity = 1;
                }
            });
        container.appendChild(row);
        }
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