    if (x === 0) {
        // Add a new line to arbrestruct and containerStruct
        const newRowIndex = containerStruct.length;
        treeStruct.push([]);
        containerStruct.push([]);

        // Copy the elements from the previous line to the new line
        for (let j = 0; j < containerStruct[newRowIndex - 1].length; j++) {
            treeStruct[newRowIndex][j] = treeStruct[newRowIndex - 1][j];
            containerStruct[newRowIndex][j] = containerStruct[newRowIndex - 1][j];
        }

        // Set the elements in the previous line to null
        for (let j = 0; j < containerStruct[newRowIndex - 1].length; j++) {
            treeStruct[newRowIndex - 1][j] = null;
            containerStruct[newRowIndex - 1][j] = null;
        }

        for (let i = 0; i < containerStruct.length; i++) {
            for (let j = 0; j < containerStruct[i].length; j++) {
                if (containerStruct[i][j]) {
                    const container = containerStruct[i][j];
                    container.style.left = `${100 + j * 163.867}px`;
                    container.style.top = `${200 + i * 297.8}px`;
                }
            }
        }
    }

    treeStruct[0].splice(y, 0, newTree);
    containerStruct[0].splice(y, 0, container);


    console.log(containerStruct);
    document.body.appendChild(container, parentElement);
    container.style.position = "absolute";
    container.style.left = `${100 + y * 163.867}px`;
    container.style.top = `${200}px`;

    // Loop to update the horizontal positions of other containers in the same row
    for (let i = y + 1; i < containerStruct[0].length; i++) {
        const currContainer = containerStruct[0][i];
        
        currContainer ? currContainer.style.left = `${parseInt(currContainer.style.left) + 297.8}px` : "";
        
    }

    newTree.button2.style.display = "none";
    origin.style.display = "none";



    } else if (position === "right") {

        const hasFather = !!treeStruct[x][y] && treeStruct[x][y].pere !== -1;

    if (hasFather) {
        // Add a sibling to the right of the current tree who has a father
        newTree.pere = treeStruct[x][y].pere;
        newTree.button1.style.display = "none";
        for (const personRow in treeStruct) {
            for (const person in personRow) {
                person.id === newTree.pere ? person.childList.push(newTree.id) : "";
                console.log(person.childList);
            }
        }
    }

    const potentialNeighboor = !!containerStruct[x][y+1];

    if (potentialNeighboor) { 
        // If there is atleast one container to the right of the current container we need to 
        //shift all containers one position to the right
        for (let i = containerStruct[x].length - 1; i >= y+1; i--) {
            containerStruct[x][i+1] = containerStruct[x][i];
            containerStruct[x][i+1].style.left = `${100 + (i+1) * 163.867}px`;
            containerStruct[x][i+1].style.top = `${200 + x * 297.8}px`;
        }
        for (let i = treeStruct[x].length - 1; i >= y+1; i--) {
            treeStruct[x][i+1] = treeStruct[x][i];
        }
    }