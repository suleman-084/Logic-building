let personDetails = {
    name: "Yuvraj",
    age: 22,
    address: {
      street: "22nd",
      city: "Chennai",
      state: "Tamil Nadu"
    }
  }
  //i have to change only city to bengaluru using spread operator


  personDetails = {...personDetails, address:{...personDetails.address, city:"Bengaluru"}}
  console.log(personDetails)