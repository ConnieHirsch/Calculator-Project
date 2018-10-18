// calc.js called by calc.html

// initial value in summation box
var sum = parseFloat($('#summation').text());
// value to be added/subtracted/etc to the sum
var MyAddend = 0;
// operand for calculation of sum and addend
var operand;

/*
** central calculation engine
** C means clear summation value
** +,-,x,/ are operands
** = signals end of adding operand, summing up operation, and commences
**      actual calculation.  This runs a parseFloat to get decimal result
** default: somehow something went wrong.
*/
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
        // show the first half of the calculation -- I can forget the number!
        console.log("addend: " + MyAddend);
        console.log("sum for operation: " + sum);
        // show the calculation in the addend section.
        var product = MyAddend + operand + sum;
        $('#addend').text(product);
        // now we actually calculate and handle result.
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

        floatedString = parseFloat(sum);
        // Sooner or later, someone will try dividing by 0
                if (floatedString.toString() == "Infinity") {
                    alert("Are you crazy?  \nYou're not allowed to divide by ZERO! \n You could have blown up the computer!");
                }
        $('#summation').text(floatedString.toString());
        $('.ticker').prepend(product + " = " + floatedString.toString() + "<br/>").show();
        // sum = 0;
        // addend = 0;

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