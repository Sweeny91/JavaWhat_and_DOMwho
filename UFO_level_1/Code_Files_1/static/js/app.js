<<<<<<< HEAD
// Importing data table from data.js
var tableData = data;

// Create variable to store body
let tbody = d3.select("tbody");

// print tableData for verification
// console.log(tableData);

// Function to Build Table
function buildTable(table) {
    table.forEach(function(siting) {

        // console.log(siting);
        let row = tbody.append("tr");

        Object.entries(siting).forEach(function([key, value]) {

            // console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });
}

buildTable(tableData);

// implement listener and initiate function to run when the button is clicked on the user side
let button = d3.select("#filter-btn");
let button2 = d3.select("#reset-btn");

// Function to handle what to do when the button is clicked
function handleClick() {

    // prevent page from refreshing
    d3.event.preventDefault();

    // remove anything from, if not empty
    tbody.html("");

    // make variable to store value from "#datetime" input
    let inputField = d3.select("#datetime");
    let inputValue = inputField.property("value");

    // console.log(inputValue);


    let filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    if (filteredData.length === 0) {
        buildtable(tableData)
    } else buildtable(filteredData)
}


// Turn button click on
button.on("click", handleClick);


// Reset button configuration
// function to handle reset
function resetClick() {
    tbody.html("");
    buildtable(tableData)
    document.getElementById("datetime").value = ""
}

// Initiate Reset
=======
// Importing data table from data.js
var tableData = data;

// Create variable to store body
let tbody = d3.select("tbody");

// print tableData for verification
// console.log(tableData);

// Function to Build Table
function buildTable(table) {
    table.forEach(function(siting) {

        // console.log(siting);
        let row = tbody.append("tr");

        Object.entries(siting).forEach(function([key, value]) {

            // console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });
}

buildTable(tableData);

// implement listener and initiate function to run when the button is clicked on the user side
let button = d3.select("#filter-btn");
let button2 = d3.select("#reset-btn");

// Function to handle what to do when the button is clicked
function handleClick() {

    // prevent page from refreshing
    d3.event.preventDefault();

    // remove anything from, if not empty
    tbody.html("");

    // make variable to store value from "#datetime" input
    let inputField = d3.select("#datetime");
    let inputValue = inputField.property("value");

    // console.log(inputValue);


    let filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    if (filteredData.length === 0) {
        buildtable(tableData)
    } else buildtable(filteredData)
}


// Turn button click on
button.on("click", handleClick);


// Reset button configuration
// function to handle reset
function resetClick() {
    tbody.html("");
    buildtable(tableData)
    document.getElementById("datetime").value = ""
}

// Initiate Reset
>>>>>>> 155554bd8c85279eb0082a633bcad2c9f7a6315d
button2.on("click", resetClick);