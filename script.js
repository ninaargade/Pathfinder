
// create table

var body = document.getElementsByTagName("body")[0];    // body variable
var table = document.createElement("table");            // table variable  
var tHead = document.createElement("thead")             // table head variable
var tBody = document.createElement("tbody");            // table body variable

var row = document.createElement("tr");                 // row variable
var headerRow = tHead.appendChild(row);                 // header row variable

// rows with cells
for (var i = 0; i < 5; i++) {                           // create table rows

    var row = document.createElement("tr");             // row variable

  for (var j = 0; j < 5; j++) {                         // create table cells

    var cell = document.createElement("td");            // cell variable
    cell.textContent = " ";      
    cell.style.padding = "20px";                    // create text
    cell.style.width = "20%"
    cell.style.width = "20%"
    cell.style.textAlign = "center"
    cell.setAttribute("id", "Cell"+ (i+1) + (j+1));     // assign an ID to each cell
    cell.setAttribute("name", "empty")
    row.appendChild(cell);                              // append cell to row
  }
  tBody.appendChild(row);                               // append row to table body
}

table.appendChild(tHead);                               // append table header to table
table.appendChild(tBody);                               // append table body to table

body.appendChild(table);                                // append table to body

table.setAttribute("border", "2");   

let blockedSpaces = []  
document.getElementById("Cell22").textContent = "X";  
blockedSpaces.push("Cell22")     
document.getElementById("Cell33").textContent = "X";      
blockedSpaces.push("Cell33")       
document.getElementById("Cell45").textContent = "X";  
blockedSpaces.push("Cell45") 
document.getElementById("Cell42").textContent = "X";  
blockedSpaces.push("Cell42")   
document.getElementById("Cell54").textContent = "X"; 
blockedSpaces.push("Cell54")        

table.style.marginBottom = "30px"

// when page is loaded, select upper left non-header cell
var currentCell = document.getElementById("Cell11")     // set default currenCell to upper left
currentCell.style.border = "2px solid black";           // thicker border denotes selction of cell
currentCell.style.backgroundColor = "green"; 
currentCell.textContent = "START";  


// create buttons

// "Up" button
var upButton = document.createElement("button");
upButton.style.marginLeft = "50px"
upButton.style.width = "5%"
upButton.textContent = "Up";
body.appendChild(upButton);
// button function
upButton.addEventListener("click", function () {
    if (currentCell == document.getElementById("Cell34")) {                     // ID current cell
        document.getElementById("Cell24").style.border = "2px solid black";     // ID cell that is being moved to and assign thicker border
        document.getElementById("Cell34").style.border = "1px solid black";     // normal border for prior cell
        currentCell = document.getElementById("Cell24");                        // update current cell
    }
    else if (currentCell == document.getElementById("Cell24")) {
        document.getElementById("Cell14").style.border = "2px solid black";
        document.getElementById("Cell24").style.border = "1px solid black";
        currentCell = document.getElementById("Cell14");
    }
    else if (currentCell == document.getElementById("Cell33")) {
        document.getElementById("Cell23").style.border = "2px solid black";
        document.getElementById("Cell33").style.border = "1px solid black";
        currentCell = document.getElementById("Cell23");
    }
    else if (currentCell == document.getElementById("Cell23")) {
        document.getElementById("Cell13").style.border = "2px solid black";
        document.getElementById("Cell23").style.border = "1px solid black";
        currentCell = document.getElementById("Cell13");
    }
    else if (currentCell == document.getElementById("Cell32")) {
        document.getElementById("Cell22").style.border = "2px solid black";
        document.getElementById("Cell32").style.border = "1px solid black";
        currentCell = document.getElementById("Cell22");
    }
    else if (currentCell == document.getElementById("Cell22")) {
        document.getElementById("Cell12").style.border = "2px solid black";
        document.getElementById("Cell22").style.border = "1px solid black";
        currentCell = document.getElementById("Cell12");
    }
    else if (currentCell == document.getElementById("Cell31")) {
        document.getElementById("Cell21").style.border = "2px solid black";
        document.getElementById("Cell31").style.border = "1px solid black";
        currentCell = document.getElementById("Cell21");
    }
    else if (currentCell == document.getElementById("Cell21")) {
        document.getElementById("Cell11").style.border = "2px solid black";
        document.getElementById("Cell24").style.border = "1px solid black";
        currentCell = document.getElementById("Cell11");
    }
    else if (currentCell == document.getElementById("Cell44")) {
        document.getElementById("Cell34").style.border = "2px solid black";
        document.getElementById("Cell44").style.border = "1px solid black";
        currentCell = document.getElementById("Cell34");
    }
    else if (currentCell == document.getElementById("Cell54")) {
        document.getElementById("Cell44").style.border = "2px solid black";
        document.getElementById("Cell54").style.border = "1px solid black";
        currentCell = document.getElementById("Cell44");
    }
    else if (currentCell == document.getElementById("Cell43")) {
        document.getElementById("Cell33").style.border = "2px solid black";
        document.getElementById("Cell43").style.border = "1px solid black";
        currentCell = document.getElementById("Cell33");
    }
    else if (currentCell == document.getElementById("Cell53")) {
        document.getElementById("Cell43").style.border = "2px solid black";
        document.getElementById("Cell53").style.border = "1px solid black";
        currentCell = document.getElementById("Cell43");
    }
    else if (currentCell == document.getElementById("Cell42")) {
        document.getElementById("Cell32").style.border = "2px solid black";
        document.getElementById("Cell42").style.border = "1px solid black";
        currentCell = document.getElementById("Cell32");
    }
    else if (currentCell == document.getElementById("Cell52")) {
        document.getElementById("Cell42").style.border = "2px solid black";
        document.getElementById("Cell52").style.border = "1px solid black";
        currentCell = document.getElementById("Cell42");
    }
    else if (currentCell == document.getElementById("Cell41")) {
        document.getElementById("Cell31").style.border = "2px solid black";
        document.getElementById("Cell41").style.border = "1px solid black";
        currentCell = document.getElementById("Cell31");
    }
    else if (currentCell == document.getElementById("Cell51")) {
        document.getElementById("Cell41").style.border = "2px solid black";
        document.getElementById("Cell51").style.border = "1px solid black";
        currentCell = document.getElementById("Cell41");
    }
    else if (currentCell == document.getElementById("Cell25")) {
        document.getElementById("Cell15").style.border = "2px solid black";
        document.getElementById("Cell25").style.border = "1px solid black";
        currentCell = document.getElementById("Cell15");
    }
    else if (currentCell == document.getElementById("Cell35")) {
        document.getElementById("Cell25").style.border = "2px solid black";
        document.getElementById("Cell35").style.border = "1px solid black";
        currentCell = document.getElementById("Cell25");
    }
    else if (currentCell == document.getElementById("Cell45")) {
        document.getElementById("Cell35").style.border = "2px solid black";
        document.getElementById("Cell45").style.border = "1px solid black";
        currentCell = document.getElementById("Cell35");
    }
    else if (currentCell == document.getElementById("Cell55")) {
        document.getElementById("Cell45").style.border = "2px solid black";
        document.getElementById("Cell55").style.border = "1px solid black";
        currentCell = document.getElementById("Cell45");
    }
})

// "Down" Button
var downButton = document.createElement("button");
downButton.style.width = "5%"
//downButton.style.marginLeft = "30px"
downButton.textContent = "Down";
body.appendChild(downButton);
// button function
downButton.addEventListener("click", function () {
    if (currentCell == document.getElementById("Cell11")) {
        document.getElementById("Cell21").style.border = "2px solid black";
        document.getElementById("Cell11").style.border = "1px solid black";
        currentCell = document.getElementById("Cell21");
    }
    else if (currentCell == document.getElementById("Cell21")) {
        document.getElementById("Cell31").style.border = "2px solid black";
        document.getElementById("Cell21").style.border = "1px solid black";
        currentCell = document.getElementById("Cell31");
    }
    else if (currentCell == document.getElementById("Cell12")) {
        document.getElementById("Cell22").style.border = "2px solid black";
        document.getElementById("Cell12").style.border = "1px solid black";
        currentCell = document.getElementById("Cell22");
    }
    else if (currentCell == document.getElementById("Cell22")) {
        document.getElementById("Cell32").style.border = "2px solid black";
        document.getElementById("Cell22").style.border = "1px solid black";
        currentCell = document.getElementById("Cell32");
    }
    else if (currentCell == document.getElementById("Cell13")) {
        document.getElementById("Cell23").style.border = "2px solid black";
        document.getElementById("Cell13").style.border = "1px solid black";
        currentCell = document.getElementById("Cell23");
    }
    else if (currentCell == document.getElementById("Cell23")) {
        document.getElementById("Cell33").style.border = "2px solid black";
        document.getElementById("Cell23").style.border = "1px solid black";
        currentCell = document.getElementById("Cell33");
    }
    else if (currentCell == document.getElementById("Cell14")) {
        document.getElementById("Cell24").style.border = "2px solid black";
        document.getElementById("Cell14").style.border = "1px solid black";
        currentCell = document.getElementById("Cell24");
    }
    else if (currentCell == document.getElementById("Cell24")) {
        document.getElementById("Cell34").style.border = "2px solid black";
        document.getElementById("Cell24").style.border = "1px solid black";
        currentCell = document.getElementById("Cell34");
    }
    else if (currentCell == document.getElementById("Cell31")) {
        document.getElementById("Cell41").style.border = "2px solid black";
        document.getElementById("Cell31").style.border = "1px solid black";
        currentCell = document.getElementById("Cell41");
    }
    else if (currentCell == document.getElementById("Cell41")) {
        document.getElementById("Cell51").style.border = "2px solid black";
        document.getElementById("Cell41").style.border = "1px solid black";
        currentCell = document.getElementById("Cell51");
    }
    else if (currentCell == document.getElementById("Cell32")) {
        document.getElementById("Cell42").style.border = "2px solid black";
        document.getElementById("Cell32").style.border = "1px solid black";
        currentCell = document.getElementById("Cell42");
    }
    else if (currentCell == document.getElementById("Cell42")) {
        document.getElementById("Cell52").style.border = "2px solid black";
        document.getElementById("Cell42").style.border = "1px solid black";
        currentCell = document.getElementById("Cell52");
    }
    else if (currentCell == document.getElementById("Cell33")) {
        document.getElementById("Cell43").style.border = "2px solid black";
        document.getElementById("Cell33").style.border = "1px solid black";
        currentCell = document.getElementById("Cell43");
    }
    else if (currentCell == document.getElementById("Cell43")) {
        document.getElementById("Cell53").style.border = "2px solid black";
        document.getElementById("Cell43").style.border = "1px solid black";
        currentCell = document.getElementById("Cell53");
    }
    else if (currentCell == document.getElementById("Cell34")) {
        document.getElementById("Cell44").style.border = "2px solid black";
        document.getElementById("Cell34").style.border = "1px solid black";
        currentCell = document.getElementById("Cell44");
    }
    else if (currentCell == document.getElementById("Cell44")) {
        document.getElementById("Cell54").style.border = "2px solid black";
        document.getElementById("Cell44").style.border = "1px solid black";
        currentCell = document.getElementById("Cell54");
    }
    else if (currentCell == document.getElementById("Cell15")) {
        document.getElementById("Cell25").style.border = "2px solid black";
        document.getElementById("Cell15").style.border = "1px solid black";
        currentCell = document.getElementById("Cell25");
    }
    else if (currentCell == document.getElementById("Cell25")) {
        document.getElementById("Cell35").style.border = "2px solid black";
        document.getElementById("Cell25").style.border = "1px solid black";
        currentCell = document.getElementById("Cell35");
    }
    else if (currentCell == document.getElementById("Cell35")) {
        document.getElementById("Cell45").style.border = "2px solid black";
        document.getElementById("Cell35").style.border = "1px solid black";
        currentCell = document.getElementById("Cell45");
    }
    else if (currentCell == document.getElementById("Cell45")) {
        document.getElementById("Cell55").style.border = "2px solid black";
        document.getElementById("Cell45").style.border = "1px solid black";
        currentCell = document.getElementById("Cell55");
    }
})

// "Left" Button
var leftButton = document.createElement("button");
leftButton.style.width = "5%"
//leftButton.style.marginLeft = "30px"
leftButton.textContent = "Left";
body.appendChild(leftButton);
// button function
leftButton.addEventListener("click", function () {
    if (currentCell == document.getElementById("Cell14")) {
        document.getElementById("Cell13").style.border = "2px solid black";
        document.getElementById("Cell14").style.border = "1px solid black";
        currentCell = document.getElementById("Cell13");
    }
    else if (currentCell == document.getElementById("Cell13")) {
        document.getElementById("Cell12").style.border = "2px solid black";
        document.getElementById("Cell13").style.border = "1px solid black";
        currentCell = document.getElementById("Cell12");
    }
    else if (currentCell == document.getElementById("Cell12")) {
        document.getElementById("Cell11").style.border = "2px solid black";
        document.getElementById("Cell12").style.border = "1px solid black";
        currentCell = document.getElementById("Cell11");
    }
    else if (currentCell == document.getElementById("Cell24")) {
        document.getElementById("Cell23").style.border = "2px solid black";
        document.getElementById("Cell24").style.border = "1px solid black";
        currentCell = document.getElementById("Cell23");
    }
    else if (currentCell == document.getElementById("Cell23")) {
        document.getElementById("Cell22").style.border = "2px solid black";
        document.getElementById("Cell23").style.border = "1px solid black";
        currentCell = document.getElementById("Cell22");
    }
    else if (currentCell == document.getElementById("Cell22")) {
        document.getElementById("Cell21").style.border = "2px solid black";
        document.getElementById("Cell22").style.border = "1px solid black";
        currentCell = document.getElementById("Cell21");
    }
    else if (currentCell == document.getElementById("Cell34")) {
        document.getElementById("Cell33").style.border = "2px solid black";
        document.getElementById("Cell34").style.border = "1px solid black";
        currentCell = document.getElementById("Cell33");
    }
    else if (currentCell == document.getElementById("Cell33")) {
        document.getElementById("Cell32").style.border = "2px solid black";
        document.getElementById("Cell33").style.border = "1px solid black";
        currentCell = document.getElementById("Cell32");
    }
    else if (currentCell == document.getElementById("Cell32")) {
        document.getElementById("Cell31").style.border = "2px solid black";
        document.getElementById("Cell32").style.border = "1px solid black";
        currentCell = document.getElementById("Cell31");
    }
    else if (currentCell == document.getElementById("Cell15")) {
        document.getElementById("Cell14").style.border = "2px solid black";
        document.getElementById("Cell15").style.border = "1px solid black";
        currentCell = document.getElementById("Cell14");
    }
    else if (currentCell == document.getElementById("Cell25")) {
        document.getElementById("Cell24").style.border = "2px solid black";
        document.getElementById("Cell25").style.border = "1px solid black";
        currentCell = document.getElementById("Cell24");
    }
    else if (currentCell == document.getElementById("Cell35")) {
        document.getElementById("Cell34").style.border = "2px solid black";
        document.getElementById("Cell35").style.border = "1px solid black";
        currentCell = document.getElementById("Cell34");
    }
    else if (currentCell == document.getElementById("Cell45")) {
        document.getElementById("Cell44").style.border = "2px solid black";
        document.getElementById("Cell45").style.border = "1px solid black";
        currentCell = document.getElementById("Cell44");
    }
    else if (currentCell == document.getElementById("Cell44")) {
        document.getElementById("Cell43").style.border = "2px solid black";
        document.getElementById("Cell44").style.border = "1px solid black";
        currentCell = document.getElementById("Cell43");
    }
    else if (currentCell == document.getElementById("Cell43")) {
        document.getElementById("Cell42").style.border = "2px solid black";
        document.getElementById("Cell43").style.border = "1px solid black";
        currentCell = document.getElementById("Cell42");
    }
    else if (currentCell == document.getElementById("Cell42")) {
        document.getElementById("Cell41").style.border = "2px solid black";
        document.getElementById("Cell42").style.border = "1px solid black";
        currentCell = document.getElementById("Cell41");
    }
    else if (currentCell == document.getElementById("Cell55")) {
        document.getElementById("Cell54").style.border = "2px solid black";
        document.getElementById("Cell55").style.border = "1px solid black";
        currentCell = document.getElementById("Cell54");
    }
    else if (currentCell == document.getElementById("Cell54")) {
        document.getElementById("Cell53").style.border = "2px solid black";
        document.getElementById("Cell54").style.border = "1px solid black";
        currentCell = document.getElementById("Cell53");
    }
    else if (currentCell == document.getElementById("Cell53")) {
        document.getElementById("Cell52").style.border = "2px solid black";
        document.getElementById("Cell53").style.border = "1px solid black";
        currentCell = document.getElementById("Cell52");
    }
    else if (currentCell == document.getElementById("Cell52")) {
        document.getElementById("Cell51").style.border = "2px solid black";
        document.getElementById("Cell52").style.border = "1px solid black";
        currentCell = document.getElementById("Cell51");
    }
})

// "Right" Button
var rightButton = document.createElement("button");
rightButton.style.width = "5%"
//rightButton.style.marginLeft = "30px"
rightButton.textContent = "Right";
body.appendChild(rightButton);
// button function
rightButton.addEventListener("click", function () {
    if (currentCell == document.getElementById("Cell11")) {
        document.getElementById("Cell12").style.border = "2px solid black";
        document.getElementById("Cell11").style.border = "1px solid black";
        currentCell = document.getElementById("Cell12");
    }
    else if (currentCell == document.getElementById("Cell12")) {
        document.getElementById("Cell13").style.border = "2px solid black";
        document.getElementById("Cell12").style.border = "1px solid black";
        currentCell = document.getElementById("Cell13");
    }
    else if (currentCell == document.getElementById("Cell13")) {
        document.getElementById("Cell14").style.border = "2px solid black";
        document.getElementById("Cell13").style.border = "1px solid black";
        currentCell = document.getElementById("Cell14");
    }
    else if (currentCell == document.getElementById("Cell21")) {
        document.getElementById("Cell22").style.border = "2px solid black";
        document.getElementById("Cell21").style.border = "1px solid black";
        currentCell = document.getElementById("Cell22");
    }
    else if (currentCell == document.getElementById("Cell22")) {
        document.getElementById("Cell23").style.border = "2px solid black";
        document.getElementById("Cell22").style.border = "1px solid black";
        currentCell = document.getElementById("Cell23");
    }
    else if (currentCell == document.getElementById("Cell23")) {
        document.getElementById("Cell24").style.border = "2px solid black";
        document.getElementById("Cell23").style.border = "1px solid black";
        currentCell = document.getElementById("Cell24");
    }
    else if (currentCell == document.getElementById("Cell31")) {
        document.getElementById("Cell32").style.border = "2px solid black";
        document.getElementById("Cell31").style.border = "1px solid black";
        currentCell = document.getElementById("Cell32");
    }
    else if (currentCell == document.getElementById("Cell32")) {
        document.getElementById("Cell33").style.border = "2px solid black";
        document.getElementById("Cell32").style.border = "1px solid black";
        currentCell = document.getElementById("Cell33");
    }
    else if (currentCell == document.getElementById("Cell33")) {
        document.getElementById("Cell34").style.border = "2px solid black";
        document.getElementById("Cell33").style.border = "1px solid black";
        currentCell = document.getElementById("Cell34");
    }
    else if (currentCell == document.getElementById("Cell14")) {
        document.getElementById("Cell15").style.border = "2px solid black";
        document.getElementById("Cell14").style.border = "1px solid black";
        currentCell = document.getElementById("Cell15");
    }
    else if (currentCell == document.getElementById("Cell24")) {
        document.getElementById("Cell25").style.border = "2px solid black";
        document.getElementById("Cell24").style.border = "1px solid black";
        currentCell = document.getElementById("Cell25");
    }
    else if (currentCell == document.getElementById("Cell34")) {
        document.getElementById("Cell35").style.border = "2px solid black";
        document.getElementById("Cell34").style.border = "1px solid black";
        currentCell = document.getElementById("Cell35");
    }
    else if (currentCell == document.getElementById("Cell41")) {
        document.getElementById("Cell42").style.border = "2px solid black";
        document.getElementById("Cell41").style.border = "1px solid black";
        currentCell = document.getElementById("Cell42");
    }
    else if (currentCell == document.getElementById("Cell42")) {
        document.getElementById("Cell43").style.border = "2px solid black";
        document.getElementById("Cell42").style.border = "1px solid black";
        currentCell = document.getElementById("Cell43");
    }
    else if (currentCell == document.getElementById("Cell43")) {
        document.getElementById("Cell44").style.border = "2px solid black";
        document.getElementById("Cell43").style.border = "1px solid black";
        currentCell = document.getElementById("Cell44");
    }
    else if (currentCell == document.getElementById("Cell44")) {
        document.getElementById("Cell45").style.border = "2px solid black";
        document.getElementById("Cell44").style.border = "1px solid black";
        currentCell = document.getElementById("Cell45");
    }
    else if (currentCell == document.getElementById("Cell51")) {
        document.getElementById("Cell52").style.border = "2px solid black";
        document.getElementById("Cell51").style.border = "1px solid black";
        currentCell = document.getElementById("Cell52");
    }
    else if (currentCell == document.getElementById("Cell52")) {
        document.getElementById("Cell53").style.border = "2px solid black";
        document.getElementById("Cell52").style.border = "1px solid black";
        currentCell = document.getElementById("Cell53");
    }
    else if (currentCell == document.getElementById("Cell53")) {
        document.getElementById("Cell54").style.border = "2px solid black";
        document.getElementById("Cell53").style.border = "1px solid black";
        currentCell = document.getElementById("Cell54");
    }
    else if (currentCell == document.getElementById("Cell54")) {
        document.getElementById("Cell55").style.border = "2px solid black";
        document.getElementById("Cell54").style.border = "1px solid black";
        currentCell = document.getElementById("Cell55");
    }
})

// "Mark Cell" Button
var markCellButton = document.createElement("button");
markCellButton.style.marginBottom = "30px"
markCellButton.style.width = "5%"
markCellButton.textContent = "Select";
markCellButton.setAttribute("id", "mark");
body.appendChild(markCellButton);
// button function
markCellButton.addEventListener("click", function () {      // insert block if space has #
    console.log(currentCell.id)
    console.log(blockedSpaces)
    let isBlocked = blockedSpaces.includes(currentCell.id)
    if (isBlocked === false) {
        console.log("not blocked")
        currentCell.style.backgroundColor = "red";           // change background color of current cell to yellow
        currentCell.textContent = "END";
        currentCell.removeAttribute("name")
        currentCell.setAttribute("tag", "end")
        console.log(currentCell.id)
    
        let endPoint = currentCell.id

        // console.log(endPoint, visitedArr, count_dict, queue)
        findPath(endPoint)
    }
    //setVariables(currentCell.id)

})

//var mycells = document.getElementsByTagName("td")
//console.log(mycells)

//for (cell of mycells){
    //console.log(cell)
    //var value = cell.getAttribute("tag")
    //console.log(value)
    //if (value == "end"){
        //console.log(cell.id)
        //var endPoint = cell.id
        //console.log(endPoint)

//function setVariables(endPoint){
        

function findPath (endPoint) {

    let visitedArr = [];
        visitedArr.push("Cell11");
        //console.log(visitedArr)
    
        // console.log(visitedArr[0])
    
    let count_dict = {}
    //console.log(count_dict)
    for (let k = 1; k < 6; k++) {                           // create table rows
        for (let l = 1; l < 6; l++) {                         // create table cells    
            count_dict["Cell" + k + l] = []
        }
    }
        
        //console.log(count_dict)
    
    let queue = [];
    queue.push("Cell11");

    while (queue.length > 0 && visitedArr.length < 20){
        let cur_node = queue.shift()
        console.log(cur_node)
        //console.log(cur_node, endPoint)
        if (cur_node === endPoint){
            let result = count_dict[endPoint]
            console.log("result:", result)
            for (let i = 0; i < result.length - 1; i ++){
                document.getElementById(result[i]).style.backgroundColor = "yellow"
            }
        return result
        }
        

        let adjCoordList = []
        let coord1 = "Cell" + (cur_node[4]) + (cur_node[5] - 1)
        adjCoordList.push(coord1)
        let coord2 = "Cell" + (cur_node[4]) + (parseInt(cur_node[5]) + 1)
        adjCoordList.push(coord2)
        let coord3 = "Cell" + (cur_node[4] - 1) + (cur_node[5])
        adjCoordList.push(coord3)
        let coord4 = "Cell" + (parseInt(cur_node[4]) + 1) + (cur_node[5])
        adjCoordList.push(coord4)

        console.log(adjCoordList)

        for (let i = 0; i < 4; i++) {
            let coord = adjCoordList[i]
            console.log(coord)
            if (coord in count_dict){
                console.log(coord, "hi")
                if (document.getElementById(coord).textContent == " " || document.getElementById(coord).textContent == "END"){      // not a barrier
                    console.log("hello")
                    console.log(visitedArr)
                    let visited = visitedArr.includes(coord) 
                    console.log(visited)
                    if (visited === false){
                        console.log(coord)
                        queue.push(coord)  
                        console.log(queue)
                        

                        for (k = 0; k < count_dict[cur_node].length; k++){
                            count_dict[coord].push(count_dict[cur_node][k])
                        }

                        console.log(count_dict[cur_node])
                        console.log(count_dict[coord])

                        count_dict[coord].push(coord)   
                        console.log(count_dict[coord])             
                        visitedArr.push(coord)

                        console.log(count_dict)    
                    }  
                }
            }
        }
    }
}

