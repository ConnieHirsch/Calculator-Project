// calc.js called by calc.html

var sum = parseInt($('#summation').text());
var MyAddend = 0;
var operand;

$('button').click(function() {
    var MyValue = $(this).text();

    if (MyValue == "C") {
        sum = 0;
        addend = 0;
        $('#summation').text("0");
        $('#addend').text("");
    } else if (MyValue == "+" || MyValue == "-" || MyValue == "x" || MyValue == "/") {
        MyAddend = sum;
        operand = MyValue;
        $('#addend').text(MyAddend);
        sum = 0;
        $('#summation').text("0");
    } else if (MyValue == "=") {
        console.log("addend: " + MyAddend);
        console.log("sum added: " + sum);

        switch (operand) {
            case "+":
                sum = parseInt(MyAddend) + parseInt(sum);
                break;
            case "-":
                sum = parseInt(MyAddend) - parseInt(sum);
                break;
            case "x":
                sum = parseInt(MyAddend) * parseInt(sum);
                break;
            case "/":
                sum = parseInt(MyAddend) / parseInt(sum);
                //sum = sum.toFixed(5);
                //console.log("handled: " + handleDecimals(sum));
                sum =  handleDecimals(sum);
                break;
            default:
                console.log("Problem with MyValue: " + MyValue);
        }

        $('#summation').text(sum);
        $('#addend').text("");
        sum = 0;
        addend = 0;

    } else {
        // We are pressing a number key
        // Put each number in the Summation box until we hit an Op Key.
        sum = sum + MyValue;
        $('#summation').text(sum);
    }

})

function handleDecimals(value) {
  if (value % 1 === 0) {
    console.log(value + ' is a whole number');
    return value;
  } else {
    console.log(value + ' is not a whole number');
    value = value.toFixed(3);
    console.log(value + ' is not a whole number');
    return value;
  }
}