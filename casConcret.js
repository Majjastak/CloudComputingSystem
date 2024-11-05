    if (x === 0) {
        // Add a new line to arbrestruct and containstruct
        const newLineIndex = containstruct.length;
        arbrestruct.push([]);
        containstruct.push([]);

        // Copy the elements from the previous line to the new line
        for (let j = 0; j < containstruct[newLineIndex - 1].length; j++) {
            arbrestruct[newLineIndex][j] = arbrestruct[newLineIndex - 1][j];
            containstruct[newLineIndex][j] = containstruct[newLineIndex - 1][j];
        }

        // Set the elements in the previous line to null
        for (let j = 0; j < containstruct[newLineIndex - 1].length; j++) {
            arbrestruct[newLineIndex - 1][j] = null;
            containstruct[newLineIndex - 1][j] = null;
        }

        for (let i = 0; i < containstruct.length; i++) {
            for (let j = 0; j < containstruct[i].length; j++) {
                if (containstruct[i][j]) {
                    const container = containstruct[i][j];
                    container.style.left = `${100 + j * 163.867}px`;
                    container.style.top = `${200 + i * 297.8}px`;
                }
            }
        }
    }

    arbrestruct[0].splice(y, 0, newTree);
    containstruct[0].splice(y, 0, container);


    console.log(containstruct);
    document.body.appendChild(container, parentElement);
    container.style.position = "absolute";
    container.style.left = `${100 + y * 163.867}px`;
    container.style.top = `${200}px`;

    // Loop to update the horizontal positions of other containers in the same row
    for (let i = y + 1; i < containstruct[0].length; i++) {
        const currContainer = containstruct[0][i];
        if(currContainer){
            currContainer.style.left = `${parseInt(currContainer.style.left) + 297.8}px`;
        }
    }

    newTree.button2.style.display = "none";
    origin.style.display = "none";



    } else if (position === "right") {



    if (arbrestruct[x][y] && arbrestruct[x][y].pere !== -1) {
        newTree.pere = arbrestruct[x][y].pere;
        newTree.button1.style.display = "none";
        for (let i = 0; i < arbrestruct.length; i++) {
            for (let j = 0; j < arbrestruct[i].length; j++) {
                if (arbrestruct[i][j] && arbrestruct[i][j].id === newTree.pere) {
                    arbrestruct[i][j].childlist.push(newTree.id);
                    console.log(arbrestruct[i][j].childlist);
                }
            }
        }
    }

    if (containstruct[x][y+1]) {
        // Shift elements in containstruct[x] from y+1 to the end
        for (let i = containstruct[x].length - 1; i >= y+1; i--) {
            containstruct[x][i+1] = containstruct[x][i];
            containstruct[x][i+1].style.left = `${100 + (i+1) * 163.867}px`;
            containstruct[x][i+1].style.top = `${200 + x * 297.8}px`;
        }
        for (let i = arbrestruct[x].length - 1; i >= y+1; i--) {
            arbrestruct[x][i+1] = arbrestruct[x][i];
        }
    }