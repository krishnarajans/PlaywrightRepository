enum environment
{
    testin,
    dev = 'Development',
    sim = 0,
    prod
}

function runTst(process:environment):void
{
    console.log(`The test is carried out in ${process} enviropnment`);
        
}
runTst(environment.prod);