let normal = 'bart'
let reverse = ''
for (let i = normal.length-1;i>=0;i--)
    {
        reverse = reverse+normal.charAt(i)           
    }
if (normal===reverse)
    {
        console.log(`The provided string ${normal} is a palindrome`);
        
    }
else
    {
        console.log(`The provided string ${normal} is not a palindrome`);
    }