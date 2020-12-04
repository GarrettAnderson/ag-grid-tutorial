const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello from ag-grid!'
  }
}

/*

// Create simple grid of three columns

// specify the columns
 // let columnDefs = [
 //   {headerName: "Make", field: "make"},
 //   {headerName: "Model", field: "model"},
 //   {headerName: "Price", field: "price"}
 // ];

// To sort and filter data in a grid
 var columnDefs = [
     {headerName: "Make", field: "make", sortable: true, filter: true },
     {headerName: "Model", field: "model", sortable: true, filter: true },
     {headerName: "Price", field: "price", sortable: true, filter: true }
 ];

 // specify the data
 let rowData = [
   {make: "Toyota", model: "Celica", price: 35000},
   {make: "Ford", model: "Mondeo", price: 32000},
   {make: "Porsche", model: "Boxter", price: 72000}
 ];

 // let the grid know which columns and what data to use
 let gridOptions = {
   columnDefs: columnDefs,
   rowData: rowData
 }

 let gridContainer = document.querySelector('#grid')
 console.log(gridContainer)

 // create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);



// API call to external data source
agGrid.simpleHttpRequest(
  { url: 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json' })
    .then(function(data) {
      gridOptions.api.setRowData(data);
});

*/



/* ==============================================
            GETTING DATA USING FETCH()
   ============================================== */


var columnDefs = [
    {headerName: "Make", field: "make", sortable: true, filter: true },
    {headerName: "Model", field: "model", sortable: true, filter: true },
    {headerName: "Price", field: "price", sortable: true, filter: true }
];

// specify the data
let rowData = [
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxter", price: 72000}
];

// let the grid know which columns and what data to use
let gridOptions = {
  columnDefs: columnDefs,
}

let gridContainer = document.querySelector('#grid')
console.log(gridContainer)

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);


// Use fetch() to get data and then add that data to corresponding rows in grid (gridOptions)
// rowData is created in the gridOpions Object
agGrid.simpleHttpRequest({url: 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json'})
    .then(function(data) {
      gridOptions.api.setRowData(data);
});


/*

ENABLE selection

Being a programmer is a hectic job. Just when we thought that we are done with our assignment, the manager shows up with a fresh set of requirements! It turned out that we need to allow the user to select certain rows from the grid and to mark them as flagged in the system. We will leave the flag toggle state and persistence to the backend team. On our side, we should enable the selection and, afterwards, to obtain the selected records and pass them with an API call to a remote service endpoint.

*/

// With ag-grid, it is just a matter of adding and changing couple of properties:


// specify the columns
    // var columnDefs = [
    //   {headerName: "Make", field: "make", checkboxSelection: true },
    //   {headerName: "Model", field: "model"},
    //   {headerName: "Price", field: "price"}
    // ];

// let the grid know which columns and what data to use
    // var gridOptions = {
    //   columnDefs: columnDefs,
    //   rowSelection: 'multiple'
    // };


document.addEventListener('DOMContentLoaded', main)
