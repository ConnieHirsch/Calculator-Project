// calc.js called by calc.html

// initial value in summation box
var sum = parseFloat($('#summation').text());
// value to be added/subtracted/etc to the sum
var MyAddend = 0;
// operand for calculation of sum and addend
var operand;
// holds keypress value from keyboard
var eKeypress;

/*
** If the user clicks or taps the entry buttons on the screen, send the
** value directly to runTheCalc()
*/
$('button').click(function() {
    var myEntry = $(this).text();
    runTheCalc(myEntry);
})


/*
** central calculation engine
** number and decimal values are parsed into operation values
** C means clear summation value
** +,-,x,/ are operands
** = signals end of adding operand, summing up operation, and commences
**      actual calculation.  This runs a parseFloat to get decimal result
** default: somehow something went wrong.
*/
function runTheCalc(myEntry) {
    if (myEntry == "C") {
        sum = 0;
        addend = 0;
        $('#summation').text("0");
        $('#addend').text("");
    } else if (myEntry == "+" || myEntry == "-" || myEntry == "x" || myEntry == "/") {
        MyAddend = sum;
        operand = myEntry;
        $('#addend').text(myEntry + " " + MyAddend);
        sum = 0;
        $('#summation').text("0");
    } else if (myEntry == "=") {
        // show the first half of the calculation -- I can forget the number!
        console.log("addend: " + MyAddend);
        console.log("sum for operation: " + sum);
        // show the calculation in the addend section.
        var product = MyAddend + operand + sum;
        $('#addend').text(product);
        // now we actually calculate and handle result.
        sum = Calculate(operand);
        // onto the closing act!
        floatedString = parseFloat(sum);
        // Sooner or later, someone will try dividing by 0
                if (floatedString.toString() == "Infinity") {
                    alert("Are you crazy?  \nYou're not allowed to divide by ZERO! \n You could have blown up the computer!");
                }
        $('#summation').text(floatedString.toString());
        $('.ticker').prepend(product + " = " + floatedString.toString() + "<br/>").show();
        sum = 0;
        addend = 0;

    } else {
        // We are pressing a number key
        // Put each number in the Summation box until we hit an Op Key.
        // if there is no value, put a 0 in the summation box, but
        // when we start a new calculation, no leading zero.
        sum === 0 ? sum = myEntry: sum = sum + myEntry;
        $('#summation').text(sum);
    }

}

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

// Calculate!
function Calculate(operand){
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
                console.log("Problem with myEntry: " + myEntry);
        }
        return sum;
}

// Check for a keypress -- if we want to run this like a calculator
//  on a desktop, must be able to use number pad.
//  If the keycode is matched to the e.which, send the value on to runtheCalc()
//  NOTE: all other keys only go to console.
$(function(){
    $(document).on('keypress', function(e){
        console.log(e.which);
        switch(e.which){
            case 48:
                runTheCalc("0");
                break;
            case 49:
                runTheCalc("1");
                break;
            case 50:
                runTheCalc("2");
                break;
            case 51:
                runTheCalc("3");
                break;
            case 52:
                runTheCalc("4");
                break;
            case 53:
                runTheCalc("5");
                break;
            case 54:
                runTheCalc("6");
                break;
            case 55:
                runTheCalc("7");
                break;
            case 56:
                runTheCalc("8");
                break;
            case 57:
                runTheCalc("9");
                break;
            case 13:
            case 61:
                runTheCalc("=");
                break;
            case 47:
                runTheCalc("/");
                break;
            case 43:
                runTheCalc("+");
                break;
            case 42:
                runTheCalc("x");
                break;
            case 45:
                runTheCalc("-");
                break;
            case 46:
                runTheCalc(".");
                break;
            default:
                console.log("I didn't get that? " + e.which);
                break;
        }
    });
});