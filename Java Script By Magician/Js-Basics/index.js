//magicWizard();

function magicWizard()
{
console.log('Hello Magician...I\'m from Another Js file');
let name = 'Magician';
console.log(name);
let isCart = true;
let color =null;
let box;
let magicWords = 
{
    attack: 'old',
    defence: 'save'

};
let magician = {
    name: 'Mj',
    age: 21,
    level: 'wizard',
    spell: magicWords,

};
magicWords.attack = 'Enter the Dragon';
console.log(magician);
magicWords.defence = 'release the dragon';
console.log(magician);
let like = ['food','magic','jump','jog'];
like[3] = 'Run Fast'
console.log(like[3]);
let India =
{
    captain:'MSD',
    viceCaptain:'Shewag',
    destructor:'Yuvi',
    rank:1
}
let Australia =
{
    captain:'GhilChrist',
    viceCaptain:'Mathew Hayden',
    destructor:'Symonds',
    rank:2
}
let Windes =
{
    captain:'Pollard',
    viceCaptain:'DJ Bravo',
    destructor:'Russel',
    rank:3
}
let players = [India,Australia,Windes];

console.log(players);
}

function hello(name)
{
    console.log('hi '+ name);
}
hello('Magician');

let employee = 
{
    basicWage: 30_000,
    overTime: 10,
    rate: 20,
    getwage: function()
    {
        return this.basicWage+(this.overTime*this.rate+5);
    }
};
let wage=employee.getwage();
console.log(wage);
const circle = 
{
  radius: 12,
  draw: function()
{
   return (3.14*this.radius);
}
}
 console.log(circle.draw());

 function createCircle(radius)
 {
     console.log('Hi Magician '+radius)
    return{
         
        area: function(radius)
        {
            return radius*radius*3.14;
        },

    }
 }

 console.log(createCircle(5).area(10));
 
function printInfinite()
{
    let n =100 ;
    let i=0;
    while(n!=0)
    {
         console.log(i++);
         n--;
    }
}

// printInfinite();

let human ={
  
    name,
    age:21,
    gender:'male',
}

human.name = 'Manikandan';
human.age = 22;
human.gender = 'male';
human.location = 'Kovilpatti';
console.log(human);
user();
function user()
{
delete human.gender;
console.log(human);
}

let color = 
{
    name: 'hate',
    nippon: 'paint',
    ad: 'hate',
    rate: 23,
};
for(let basket in color)
{
   console.log(color[basket]);
if(typeof color[basket] !== 'string')
{
    console.log(color[basket]);
}

else{
    console.log('This is the black Sheep' + color[basket]);
}
}

console.log(color[5]);
console.log(Object.keys(color));
