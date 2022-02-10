const express = require('express');
const app     = express();
const fs      = require('fs');

app.listen(4600,(req,res) => {
  console.log('Running');
});

let xlsx            = require("xlsx");
let details         = xlsx.readFile("./src/assets/details.xlsx");
let sheet_name_list = details.SheetNames;
let employeeArray;

  sheet_name_list.forEach( y =>  {
    let worksheet = details.Sheets[y];
    let headers   = {};
    let data      = [];

    for(z in worksheet) {
     if (z[0] === '!') continue;
        //parse out the column, row, and value
        let tt     = 0;

        for (let i = 0; i < z.length; i++) {
         if (!isNaN(z[i])) {
                tt = i;
                break;
            }
         };
         let col   = z.substring(0,tt);
         let row   = parseInt(z.substring(tt));
         let value = worksheet[z].v;

         //store header names
         if (row == 1 && value) {
            headers[col] = value;
            continue;
        }

        if (!data[row]) data[row] = {};
        data[row][headers[col]]  = value;
    }
    //drop those first two rows which are empty
    data.shift();
    data.shift();
    employeeArray = data ;

    fs.writeFile("./src/assets/employees.json",JSON.stringify(employeeArray,null,2),err => {
      if (err) console.log("Error writing file:", err);
    });

});

