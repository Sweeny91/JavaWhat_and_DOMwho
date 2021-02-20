// from data.js
const tableData = data;

// Create variable to store body
let tbody = d3.select("tbody");

// print tableData for verification
// console.log(tableData);

// Function to Build Table
const buildTable = (table) => {

    // reset table if already exists
    tbody.html("");

    // for each function to loop through "sitings"
    table.forEach(function(siting) {

        // make js variable to append a row to the html tbody
        let row = tbody.append("tr");

        // Create key:value object and append each entry to to current row as such
        Object.entries(siting).forEach(function([key, value]) {

            // append data to row object
            let entry = row.append("td");
            entry.text(value);

        });
    });
}


// run function to build table with provided UFO siting data
buildTable(tableData);

// Implement listener and initiate function to run when the button is clicked on the user side
let button1 = d3.select("#filter-btn");
let button2 = d3.select("#reset-btn");


// Rewrite function to filter the table based on ALL of the keys

// Function to handle what to do when the button is clicked
function filterClick() {

    // prevent page from refreshing
    d3.event.preventDefault();

    // remove anything from, if not empty
    tbody.html("");

    // make variable to store value from "#datetime" input
    let dateInput = d3.select("#datetime");
    let dateValue = dateInput.property("value");

    // make variable to store value from "#city" input
    let cityInput = d3.select("#city");
    let cityValue = cityInput.property("value");

    // make variable to store value from "#state" input
    let stateInput = d3.select("#state");
    let stateValue = stateInput.property("value");

    // make variable to store value from "#country" input
    let countryInput = d3.select("#country");
    let countryValue = countryInput.property("value");

    // make variable to store value from "#shape" input
    let shapeInput = d3.select("#shape");
    let shapeValue = shapeInput.property("value");


    // Build function that will recognize type of input and output a filtered table based on that input
    // Rewrite function Below!!

    let filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    if (filteredData.length === 0) {
        buildtable(tableData)
    } else buildtable(filteredData)
}


// Turn button click on to initiate filter
button1.on("click", filterClick);


// Reset button configuration
// function to handle reset
function resetClick() {
    tbody.html("");
    buildtable(tableData)
    document.getElementById("datetime").value = ""
    document.getElementById("city").value = ""
    document.getElementById("state").value = ""
    document.getElementById("country").value = ""
    document.getElementById("shape").value = ""
}

// Initiate Reset
button2.on("click", resetClick);