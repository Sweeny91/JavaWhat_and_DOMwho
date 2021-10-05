// Importing data from data.js
// This looks like a list of dictionaries but is a javascript object

var tableData = data;

// Create variable to store body
let tbody = d3.select("tbody");

// print tableData for verification
// console.log(tableData);

// Function to Build Table
function buildTable(table) {
    // general for each function where placeholer "siting", refers to an entry in the given data set
    table.forEach(function(siting) {

        // console.log(siting);

        // make js variable to append a row to the html tbody
        let row = tbody.append("tr");

        // Create key:value object and append each entry to to current row as such
        // This will iterate through each item in every object
        Object.entries(siting).forEach(function([key, value]) {

            // console.log(key, value);
            // make variable for the cell in order for value to be added
            let cell = row.append("td");

            // enter the value of this entrie into the corressponding cell
            cell.text(value);
        });
    });
}

buildTable(tableData);

// Implement listener and initiate function to run when the button is clicked on the user side
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

    // Create object to filter data by date
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
button2.on("click", resetClick);