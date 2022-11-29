// code your solution here
function saturdayFun(default_argument="roller-skate")

{
    return default_argument;
}

var default_argument=saturdayFun();
console.log("Default Argument is:",default_argument);

var passed_argument=saturdayFun("Today is on a Tuesday");
console.log("Passed Argument is:",passed_argument);

var default_argument=saturdayFun();
console.log("Default Argument is:",default_argument);

var passed_argument=saturdayFun("Today is on a Tuesday");
console.log("Passed Argument is:",passed_argument);


// example Two
function wrapAdjective(default_argument ="special",visual_flair="*")
      //let result = wrapAdjective('*')
      //let emphatic = result("a hard worker")
{

    // return `You are ${default_argument}`;

    return `You are ${visual_flair} dedicated programmer%! `;
}

    const encouragingPromptFunction = wrapAdjective("!!!")
    console.log(encouragingPromptFunction);