let cityResults = document.getElementById('city')
console.log(cityResults)
let typeResults = document.getElementById('sportType')
let teamResults = document.getElementById('teamName')

fetch('http://127.0.0.1:3000/api/sportsteam')
.then(response=> response.json())
// .then(data => {return data})
.then(data => {
   let teamObj;
   for (let i = 0; i < data.length; i++) {
      teamObj = data[i]
      console.log(teamObj.city)
      let newDiv = document.createElement('div');
      newDiv.textContent = teamObj.city
      console.log(newDiv)
      console.log(cityResults)
      cityResults.append(newDiv)
      
       let newTypeDiv = document.createElement('div')
       newTypeDiv.textContent = teamObj.sports_type
       typeResults.append(newTypeDiv)
      
       let newTeamDiv = document.createElement('div')
       newTeamDiv.textContent = teamObj.team_name
       teamResults.append(newTeamDiv)
   }
})
