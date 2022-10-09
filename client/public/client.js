let cityResults = document.getElementById('city')

let typeResults = document.getElementById('sportType')
let teamResults = document.getElementById('teamName')

fetch('http://127.0.0.1:3000/api/sportsteam')
.then(response=> response.json())
// .then(data => {return data})
.then(data => {
   let teamObj;
   for (let i = 0; i < data.length; i++) {
      teamObj = data[i]
      let newDiv = document.createElement('div');
      newDiv.textContent = teamObj.city +'     '+ teamObj.sports_type+ '    ' + teamObj.team_name 
      cityResults.append(newDiv)
   
   }
})






let button = document.getElementById('submit')

button.addEventListener('click', blah)
  

   // const options = {
   //    method: 'POST',
   //    mode:'no-cors',
   //    headers: {
   //    'Accept': 'application/json',
   //    'Content-Type': 'application/json',
      
   //    },
   //   body:update
  
   // };



 

// .then(data => {
//    console.log(data)
//    teamObj = data
   
//    let newDiv = document.createElement('div');
//    newDiv.textContent = teamObj.city +'     '+ teamObj.sports_type+ '    ' + teamObj.team_name 
// })

async function blah() {

let input = document.getElementById('Input')
let input1 = document.getElementById('Input1')
let input2 = document.getElementById('Input2')
   let update = {
      'city': input.value,
      'sports_type':input1.value ,
      'team_name':input2.value
   }
   console.log(update)
   try {
   const response = await fetch("http://localhost:3000/api/sportsteam", {
   method:'POST',
  
   headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(update)
   })
   const data = await response;
console.log(data)
}
catch(error) {
   console.log(error)
}
}
