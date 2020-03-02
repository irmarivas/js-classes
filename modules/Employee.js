class Employee {
  constructor(
    department,
    wage,
    benefits,
    yearsWorked
  ) {
    this.department = department;
    this.wage = wage;
    this.benefits = benefits;
    this.yearsWorked = yearsWorked;
  }
}

// TODO: create 3 super classes (Doctor, Consultant, Administrator) with 'extends' keyword
// 1) Each super class calls the 'super()' method with base classes' params
// 2) Each super class should have unique props (attributes and methods)

export {
  Employee
}
