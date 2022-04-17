//Adding title
let title = document.createElement('h1');
title.id = 'title1'
title.innerHTML = 'Breweries List';
document.body.appendChild(title);


//Adding image
let img1 = document.createElement('img');
img1.id = 'img1';
img1.class = 'img-fluid';
img1.src = 'cheers.png';
document.body.appendChild(img1)


// api url
const api_url =
    "https://api.openbrewerydb.org/breweries";

// Defining async function
async function getDatafrmApi(url) {

    try {
        // Storing response
        const response = await fetch(url);

        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        if (response) {
            show(data);
        } else {
            response.status;
        }
    } catch (error) {
        alert(`Error: ${error}`);
    }
}
// Calling that async function
getDatafrmApi(api_url).then(() => {
    console.log("Successfully fetched Data");
}).catch((error) => {
    console.log(error.status)
}).finally(() => {
    console.log("function ran successfully");
})

// Function to define innerHTML for HTML table
function show(data) {
    let column =
        `<tr>
             <th>Name</th>
             <th>Type</th>
             <th>Address</th>
             <th>URL</th>
             <th>Phone No.</th>
             </tr>`;

    // Loop to access all rows
    for (let element of data) {
        column += `<tr>
         <td>${element.name}</td>
         <td>${element.brewery_type}</td>
         <td>${element.address_2}</td>
         <td>${element.website_url}</td>
         <td>${element.phone}</td>
         </tr>`
    }
    // Setting innerHTML as table variable
    let table = document.createElement('table');
    table.id = 'myTable';
    table.className = 'table table-hover';
    document.body.appendChild(table);
    document.getElementById("myTable").innerHTML = column;
}

//Creating search bar

let searchBar = document.createElement('input');
searchBar.type = 'text';
searchBar.name = 'search';
searchBar.id = 'myInput';
searchBar.placeholder = 'Brewery Name';
searchBar.setAttribute("onkeyup", 'myFunction()')
document.body.appendChild(searchBar);

//Function to complete seaching in search bar
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    //tr = table.getElementsByTagName("tr");
    tr = document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
