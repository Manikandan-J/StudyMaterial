function AbstractionLearnConstructor(name)
{

    this.name = name;
    this.addPoints = function(points)
    {
        console.log(name+' scored'+ points);
    }
}


let obj = new AbstractionLearnConstructor('Magician');
let obj2 = new AbstractionLearnConstructor('MjWizard');
obj.addPoints(23);
obj2.addPoints(56);
obj = obj2;
// console.log(obj.addPoints(126));

function AccountDetails()
{
  let name;
  let defaultCollege = { cName: 'MSEC',address: 'Sivakasi'}
  

   this.getDefaultCollege = function()
   {
       return defaultCollege;
   }
  Object.defineProperty(this,'name',{
      get: function()
      {
          return name;
      },
      set: function(name)
      {
          name = name;

      }
  }
  );

  Object.defineProperty(this,'defaultCollege',{
   get: function()
   {
       return defaultCollege;
   },
   set: function(defaultcollege)
   {
       defaultCollege = defaultCollege;
   }
  });
  console.log(name+' and '+defaultCollege); 

}

let college = {
    cName: 'MSEC',
    address: 'Sivakasi',
}

const account = new AccountDetails();
account.name = 'MjWizard';
account.defaultCollege = college; 



