const excelToJson = require('convert-excel-to-json');

var test = async function () {

    console.log('Test');
    xlsxj = require("xlsx-to-json");
    xlsxj({
        input: "sample.xlsx",
        output: "output.json"
    }, function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    });




};
test();