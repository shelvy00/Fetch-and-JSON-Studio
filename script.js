// TODO: add code here
//const container1 = document.getElementById("container");
window.addEventListener("load", (event) => {
    async function fetchData() {
        const response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');
        const data = await response.json();
        const container1 = document.getElementById("container");

        for(let i = 0; i < data.length; i++) {
            /*debugg trick console.log(container1.innerHTML)*/
            container1.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                    <h3>${data[i].firstName}</h3>
                    <ul>
                        <li>Hours in space: ${data[i].hoursInSpace}</li>
                        <li>Active: ${data[i].active}</li>
                        <li>Skills: ${data[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${data[i].picture}>
            </div>`
        }

        //container1.innerHTML = `<h3>${data.firstName}</h3>`

        console.log(data);
        console.log(data[0].firstName)
    }
    
    // let container = (data) => {
    //   container1.innerHTML = data.firstname
    // }

    fetchData()
  });