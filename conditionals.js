function calculateSum() {
    let number = parseInt(document.getElementById('number').value);
    let sum = 0;
        if(isNaN(number) || number < 0 || number > 1000000){
             alert('Invalid number');
        } else{
            sum = (number * (number + 1)) / 2;
            alert('Sum of numbers up to ' + number + ' is ' + sum);
        }
}