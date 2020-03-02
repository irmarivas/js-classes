
class Hospital {
  constructor( // It is a class method that assigns parameters to the object properties
    name,
    mailingStreet,
    mailingCity,
    mailingState,
    mailingZip,
    generalPhoneNumber,
    departments
  ) {
    this.name = name;
    this.mailingStreet = mailingStreet;
    this.mailingCity = mailingCity;
    this.mailingState = mailingState;
    this.mailingZip = mailingZip;
    this.generalPhoneNumber = generalPhoneNumber
    this.departments = departments;
  }
}

const hospitalInstance = new Hospital(); // use the 'new' keyword and invoke the constructor to make an instance/copy, arguments are optional
console.log (hospitalInstance.mailingStreet); // This is how to access properties of an instance using the dot operator

export {
  Hospital
}
