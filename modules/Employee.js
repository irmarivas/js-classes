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
class Doctor extends Employee {
  // 1) Each super class calls the 'super()' method with base classes' params
  constructor(
    department,
    wage,
    benefits,
    yearsWorked,
    isResident
  ) {
    super(department, wage, benefits, yearsWorked, isResident);
    this.isResident = isResident;
  }

  // 2) Each super class should have unique props (attributes and methods)
  prescribe(instructions, medication, patient) {
    patient.prescriptions = [...patient.prescriptions, { instructions, medication }];
    return patient;
  }

}
class Consultant extends Employee {
  constructor(
    department,
    wage,
    benefits,
    yearsWorked,
    setUpPump,
    bottleFeed
  ) {
    super(department, wage, benefits, yearsWorked, setUpPump, bottleFeed);
    this.setUpPump = setUpPump;
    this.bottleFeed = bottleFeed;
  }
}
class Administrator extends Employee {
  constructor(
    department,
    wage,
    benefits,
    yearsWorked,
    sizeOfTeam,
    meetings
  ){
    super( department, wage, benefits, yearsWorked)
    this.sizeOfTeam = sizeOfTeam;
    this.meetings = meetings;
  }
}

export {
  Employee,
  Doctor,
  Consultant,
  Administrator
}
