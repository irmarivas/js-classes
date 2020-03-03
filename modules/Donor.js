class Donor {
  constructor(
    name,
    affiliation
  ){
    this.name = name;
    this.affiliation = affiliation;
  }

  // TODO: add a class method called 'donate' 
  // 1) Donate takes three params (lastDonationDate, amount, department)
  donate(lastDonationDate, amount, department){
    // 2) Donate updates the 'department' budget property by the amount param
    department.budget = department.budget + amount;
    // 3) Update the donation date on the department object to the last donation date
    department.lastDonationDate = lastDonationDate;
    return department;
  }
}


export {
  Donor
}
