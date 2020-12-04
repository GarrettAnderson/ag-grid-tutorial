const loading = () => {

          if (document.querySelector('h1.hello-world')) {
                document.querySelector('h1.hello-world').textContent = 'Hello from ag-grid!'
              }

    // const main = () => {
    //   if (document.querySelector('h1.hello-world')) {
    //     document.querySelector('h1.hello-world').textContent = 'Hello from ag-grid!'
    //   }
    // }


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

    // Use fetch() to get data and then add that data to corresponding rows in grid (gridOptions)
    // rowData is created in the gridOpions Object

    let api = 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json'
    agGrid.simpleHttpRequest({url: api})
        .then(function(data) {
          console.log(data)
          gridOptions.api.setRowData(data);
    });


    let gridContainer = document.querySelector('#myGrid')
    console.log(gridContainer)

    /*
          ENABLE FILTERING AND SELECTING

  // Filtering and Selecting the data columns are easy:
      // const columnDefs = [
      //     {headerName: "Make", field: "make", sortable: true, filter: true },
      //     {headerName: "Model", field: "model", sortable: true, filter: true },
      //     {headerName: "Price", field: "price", sortable: true, filter: true }
      // ];

// With ag-grid, it is just a matter of adding and changing couple of properties:

        */




        // specify the columns
            let columnDefs = [
              {headerName: "Make", field: "make", checkboxSelection: true },
              {headerName: "Model", field: "model"},
              {headerName: "Price", field: "price"}
            ];

        // let the grid know which columns and what data to use
            let gridOptions = {
              columnDefs: columnDefs,
              rowSelection: 'multiple'
            };



    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(gridContainer, gridOptions);



        const filterBtn = document.querySelector('button')
        console.log(filterBtn)

        filterBtn.addEventListener('click', function() {
          console.log('testing button functionality')
          let selectedNodes = gridOptions.api.getSelectedNodes()
          let selectedData = selectedNodes.map( function(node) {
              return node.data
            })

          let selectedDataStringPresentation = selectedData.map( function(node) {
              return node.make + ' ' + node.model
            }).join(', ')

          alert('Selected nodes: ' + selectedDataStringPresentation); // You can substitute that bit with a real-world application logic in order to communicate with the server
        })


 }


 /*

 The only thing we have to add is a button that gets the selected data and sends it to the server. To do this, we need the following change:

 */

 // function getSelectedRows() {
 //
 //   console.log('testing')
     // let selectedNodes = gridOptions.api.getSelectedNodes()
     // let selectedData = selectedNodes.map( function(node) {
     //     return node.data
     //   })
     //
     // let selectedDataStringPresentation = selectedData.map( function(node) {
     //     return node.make + ' ' + node.model
     //   }).join(', ')
     //
     // alert('Selected nodes: ' + selectedDataStringPresentation); // You can substitute that bit with a real-world application logic in order to communicate with the server
 // }

document.addEventListener('DOMContentLoaded', loading)
// document.addEventListener('DOMContentLoaded', main)
