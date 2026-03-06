//Conditional Statement

//If Else Statement
let browser='safari'
function launchbrowser(browser)
{
    if(browser ==='chrome')
    {
        console.log(`Launch the ${browser} Browser`);
    }else if(browser==='firefox')
    {
    console.log("Launch the "+browser+" Browser");
    }
    else{
    console.log("No Browser is launched");
    }
}
launchbrowser(browser)// Function should be called

//Switch Statement
let testtype='sanity'
function runTests(testtype)
{
    switch (testtype) {
        case 'sanity':
            console.log(testtype+" testing is being performed")
            break;
        case 'regression':
            console.log(`${testtype} testing is being performed`)
            break;
        default:
            console.log("Smoke testing is being performed")
            break;
    }
}
runTests(testtype)// Function should be called