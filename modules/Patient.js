class Patient {
  constructor(
    name,
    diagnosis,
    paid,
    daysStayed,
    covered
  ) {
    this.name = name;
    this.diagnosis = diagnosis;
    this.paid = paid;
    this.daysStayed = daysStayed;
    this.covered = covered;
  }
}


export {
  Patient
}