var menu1 = `
    SELECT A OPTION:
    (1) Table generator
    (2) Bhaskara
    (3) Square root
    (4) Geometric forms
`;

var option1 = prompt (menu1);

switch (option1) {

case `1`:
    var menu2 = `
    SELECT A OPERATOR:
    (1) Sum
    (2) Diference
    (3) Product
    (4) Quotient
    `;

    var option2 = prompt (menu2);
    var num1 = Number(prompt(`Type a number.`));
    var num2 = 0;

    switch (option2){
        case `1`:
        while (num2 < 10){
            (num2 ++);
            var  result = num1 + num2;
            console.log (`${num1} + ${num2} = ${result}`);
        }
        break;

        case `2`:
        while (num2 < 10){
            (num2 ++);
            var result = num1 - num2;
            console.log (`${num1} - ${num2} = ${result}`);
        }
        break;

        case `3`:
        while (num2 < 10){
            (num2 ++);
            var result = num1 * num2;
            console.log (`${num1} * ${num2} = ${result}`);
        }
        break;

        case `4`:
        while (num2 < 10){
            (num2 ++);
            var result = num1 / num2;
            console.log (`${num1} / ${num2} = ${result}`);
        }
        break;

       default:
            console.log (`Invalid option.`);
    };
break;

case `2`:
    var a = prompt (`Type de value of A`);
    var b = prompt (`Type de value of B`);
    var c = prompt (`Type de value of C`);
    var delta = b * b - (4 * a * c);
        
    var x1, x2;

    if (delta > 0){
        x1 = (-b + Math.sqrt (delta)) / 2 * a;
        x2 = (-b - Math.sqrt (delta)) / 2 * a;
        console.log (`
        The calculation of x1 is ${Math.fround(x1)};
        The calculation of x2 is ${Math.fround(x2)}`);
        } else {
            if (delta === 0){
                x1 = -b/2*a;
                console.log (`The calculation of x1 is ${Math.fround(x1)}`);
            }else{
                if (delta < 0){
                    console.log (`The equation has no real results.`);
                }
            }
        }   
break;

case `3`:
    var num1 = prompt (`Type a number.`);
    console.log (`The square root of ${num1} is ${Math.sqrt(num1)}.`);
    break;

case `4`:
    var menu2 = `
    Choose a geometric form:
    (1) Circle
    (2) Triangle
    (3) Square
    `

    var option2 = prompt (menu2)

    switch (option2){

        case `1`:
            var radius = Number(prompt (`Type the radius of the circle.`));
            var area = Math.PI * (radius * radius);
            var perimeter = 2 * Math.PI * radius;
            console.log (`The area of the circle is ${Math.fround(area)} and perimeter is ${Math.fround(perimeter)}.`);
            break;

        case `2`:
            var base = Number(prompt (`Type the base of the triangle.`))
            var altura = Number(prompt (`Type the height of the triangle.`))
            var area = (base * altura) / 2
            console.log (`The triangle area is ${Math.fround(area)}.`)

        case `3`:
            var side = Number(prompt (`Type one square side.`))
            var area = side * side
            console.log (`The square area is ${Math.fround(area)}.`)
            break;


    default:
        console.log (`Invalid option`);
    }

break;

default:
    console.log (`Invalid option.`);
}