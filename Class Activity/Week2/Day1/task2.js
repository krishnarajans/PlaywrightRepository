//Call Back Function

function add(a,b,x)
    {
        console.log("Addition:",a+b);
        x(b,a)
    }
function sub(b,a) // The variables can be interchanged
    {
        console.log("Subtraction:",b-a);
    }

add(20,30,sub)