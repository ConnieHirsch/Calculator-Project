// alert("Yes!");

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
                sum = sum.toFixed(3);
                console.log("decimal added: " + sum);
                break;
            default:
                console.log("Problem with MyValue: " + MyValue);
        }

        $('#summation').text(sum);
        $('#addend').text("");
        sum = 0;
        addend = 0;


    } else {
        // alert("Clicked on " + MyValue);
        //alert("Sum now " + sum);
        sum = sum + MyValue;
        $('#summation').text(sum);
    }

})