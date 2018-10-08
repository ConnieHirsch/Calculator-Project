// calc.js called by calc.html

var sum = parseFloat($('#summation').text());
var MyAddend = 0;
var operand;

$('button').click(function() {
    var myNumber = $(this).text();

    if (myNumber == "C") {
        sum = 0;
        addend = 0;
        $('#summation').text("0");
        $('#addend').text("");
    } else if (myNumber == "+" || myNumber == "-" || myNumber == "x" || myNumber == "/") {
        MyAddend = sum;
        operand = myNumber;
        $('#addend').text(myNumber + " " + MyAddend);
        sum = 0;
        $('#summation').text("0");
    } else if (myNumber == "=") {
        console.log("addend: " + MyAddend);
        console.log("sum for operation: " + sum);

        switch (operand) {
            case "+":
                sum = handleDecimals(parseFloat(MyAddend) + parseFloat(sum));
                break;
            case "-":
                sum = handleDecimals(parseFloat(MyAddend) - parseFloat(sum));
                break;
            case "x":
                sum = handleDecimals(parseFloat(MyAddend) * parseFloat(sum));
                break;
            case "/":
                sum = handleDecimals(parseFloat(MyAddend) / parseFloat(sum));
                break;
            default:
                console.log("Problem with myNumber: " + myNumber);
        }

        parseString = parseFloat(sum);
        $('#summation').text(parseString.toString());
        $('#addend').text("");
        sum = 0;
        addend = 0;

    } else {
        // We are pressing a number key
        // Put each number in the Summation box until we hit an Op Key.
        // if there is no value, put a 0 in the summation box, but
        // when we start a new calculation, no leading zero.
        sum === 0 ? sum = myNumber: sum = sum + myNumber;
        $('#summation').text(sum);
    }

})

// fixed so whole number returns get no decimal,
// decimal returns are rounded to 3
function handleDecimals(value) {
  if (value % 1 === 0) {
    console.log(value + ' is a whole number');
    return value;
  } else {
    console.log(value + ' is not a whole number');
    value = value.toFixed(3);
    return value;
  }
}