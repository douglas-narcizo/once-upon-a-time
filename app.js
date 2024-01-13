// --- Link to DOM elements ------
const storyDom = document.querySelector('.story');
const generate = document.getElementById('generate');

generate.onclick = generateStory;


// Select a random item from a given array
const randomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Database section - text pieces
const mainCharacters = [['mouse','he','his'], ['boy','he','his'], ['girl','she','her'], ['duck','he','his']];
const vilains = [['wolf','Mr. Wolf'], ['snake','Mrs. Snake'], ['fox','dear Fox'], ['witch','Madam']];
const relatives = ['grandma', 'grandpa', 'aunt', 'uncle'];
const environments = ['forest', 'hill', 'farm'];
const times = ['morning', 'afternoon', 'night'];
const baits = ['apple', 'candy', 'cookie'];

const intro = [`Once upon a time,`, `Long, long ago,`, `In a land of giggles and sunshine,`, `It's used to say… that`];
const goodAdjective = ['beautiful', 'gorgeous', 'cheerful', 'pacific', 'peaceful'];
const scaryFeature = ['suspicious', 'scary', 'hunchbacked', 'frightening'];
const cuteAdjective = ['little','lovely','sweet','pretty'];
const tastyAdjective = ['delicious','tasty','luscious'];
const vilainExcuse = [`I've just remembered how to return to my way. Thanks and bye!`, `I think I have found the way to get back home. Bye bye!!`,
                        `I have to go now. Nice to meet you… bye!`];
const ending = [`And so, they lived happily ever after!`, `After this, they never met each other again, and lived forever in happiness!`,
                        `And so they went their way happily, and never met again!`];


// --- The Story Generator Function ----

function generateStory() {
    // Characters and places definitions
    const mainCharacter = randomItem(mainCharacters);
    const theVilain = randomItem(vilains);
    const theRelative = randomItem(relatives);
    const theEnvironment = randomItem(environments);
    const theTime = randomItem(times);
    const theBait = randomItem(baits);
    
    // Main array - THE STORY!!
    const story = [
        `${randomItem(intro)} in a ${randomItem(goodAdjective)} ${theEnvironment}, lived a little ${mainCharacter[0]}.`,
        `On a certain ${theTime}, ${mainCharacter[1]} went out to visit ${mainCharacter[2]} ${theRelative}.`,
        `While ${mainCharacter[1]} walked through the ${theEnvironment}, the ${mainCharacter[0]} met a ${randomItem(scaryFeature)} ${theVilain[0]}.`,
        `The ${theVilain[0]} said – "Hello, ${randomItem(cuteAdjective)} ${mainCharacter[0]}!", and continued…`,
        `"I got lost, and now I reached this ${randomItem(goodAdjective)} ${theEnvironment}…\n
            If you help me, I will give you this ${randomItem(tastyAdjective)} ${theBait}!"`,
        `But the smart ${mainCharacter[0]} then responded:`,
        `"Thank you, ${theVilain[1]}! But I can't accept your ${theBait}.\n
            I agreed to have a snack with a Gruffalo in a little while."`,
        `And the ${theVilain[0]}, that had already heard about the Gruffalo's reputation, then said:`,
        `"A Gruffalo?!! Well… excuse me, ${randomItem(cuteAdjective)} ${mainCharacter[0]}… but ${randomItem(vilainExcuse)}"`,
        `${randomItem(ending)}`
    ];
    
    // Render to the DOM
    while (storyDom.firstChild) {
        storyDom.removeChild(storyDom.firstChild);
    }
    for (p of story) {
        const paragraph = storyDom.appendChild(document.createElement("p"));
        paragraph.textContent = p;
    }
}
