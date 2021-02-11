function levelOfService(ride) {
  let levelOfService
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  } else if (ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {
    levelOfService = 'Noober X'
  }
  return levelOfService
}

function renderRides(ridesArray) {
  
  //------Ryan's additional code start-----------
  //let ride = []
  //ride.splice(0, ride.length)

  //------Ryan's additional code end-----------
  
  for (let i = 0; i < ridesArray.length; i++) {
    let ride = ridesArray[i]
    //ride = ridesArray[i]


    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService(ride)}</span>
      </h1>
    `)

    let borderClass
    let backgroundClass
    if (levelOfService(ride) == 'Noober Purple') {
      borderClass = 'border-purple-500'
      backgroundClass = 'bg-purple-600'
    } else {
      borderClass = 'border-gray-900'
      backgroundClass = 'bg-gray-600'
    }

    for (let i = 0; i < ride.length; i++) {
      let leg = ride[i]

      document.querySelector('.rides').insertAdjacentHTML('beforeend', `
        <div class="border-4 ${borderClass} p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl ${backgroundClass} text-white p-2">
                ${leg.numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${leg.pickupLocation.address}</p>
              <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${leg.dropoffLocation.address}</p>
              <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
      `)
    }
  }
  
}

window.addEventListener('DOMContentLoaded', function() {
  // YOUR CODE


  // find all the ride buttons using querySelectorAll and a selector matching all of the desired elements
  let allButtons = document.querySelectorAll('.filter-button')

  // loop through each ride button - ***is this the right place for this?
  for (let i = 0; i < allButtons.length; i++) {
    let rideButton = allButtons[i];
    
    


    

    // add the event listener and function to each ride button
    rideButton.addEventListener('click', async function(event) {
      event.preventDefault() // supress the browser's default click behavior

      

      let rideType = event.target.innerHTML
      //rideType = event.target.innerHTML

      //output which ride button was pushed to the console
      //console.log(rideType)


      // get all of the ride data
      let response = await fetch('https://kiei451.com/api/rides.json')
      let json = await response.json()
      let rides = json

      // initialize new blank arrays to hold the filtered results, depending on which button was clicked
      let NooberPurpleFilteredRides = []
      let NooberPoolFilteredRides = []
      let NooberXFilteredRides = []
      let NooberXLFilteredRides = []
      let AllFilteredRides = []

      // depending on which button was clicked, filter the results that will display by adding to the new blank array
      if(rideType == 'Noober Purple') {
        console.log(rideType)
        //filteredRides.length = 0

        for(i = 0; i < rides.length; i++){
          if(levelOfService(rides[i]) == 'Noober Purple') {
            NooberPurpleFilteredRides.push(rides[i])
            

          }
        }
        renderRides(NooberPurpleFilteredRides)

      } else if(rideType == 'Noober Pool') {
        console.log(rideType)
        //filteredRides.length = 0

        for(i = 0; i < rides.length; i++){
          if(levelOfService(rides[i]) == 'Noober Pool') {
            NooberPoolFilteredRides.push(rides[i])
            
          }
          
        }
        renderRides(NooberPoolFilteredRides)

      } else if(rideType == 'Noober X') {
        console.log(rideType)
        //filteredRides.length = 0

        for(i = 0; i < rides.length; i++){
          if(levelOfService(rides[i]) == 'Noober X') {
            NooberXFilteredRides.push(rides[i])
            
          }
          
        }
        renderRides(NooberXFilteredRides)

      } else if(rideType == 'Noober XL') {
        console.log(rideType)
        //filteredRides.length = 0

        for(i = 0; i < rides.length; i++){
          if(levelOfService(rides[i]) == 'Noober XL') {
            NooberXLFilteredRides.push(rides[i])
            

          }
          
        }
        renderRides(NooberXLFilteredRides)

      } else if(rideType == 'All Rides') {
        console.log(rideType)
        //filteredRides.length = 0

        for(i = 0; i < rides.length; i++){
          AllFilteredRides.push(rides[i])
        
        }
        renderRides(AllFilteredRides)

      } 



      // outputing the filtered list to the screen
      //renderRides(filteredRides)
      //filteredRides = []
      
        
    })

  }


})

