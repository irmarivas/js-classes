class Patient {
  constructor(
    name,
    diagnosis,
    paid,
    daysStayed,
    isCovered
  ) {
    this.name = name;
    this.diagnosis = diagnosis;
    this.paid = paid;
    this.daysStayed = daysStayed;
    this.isCovered = isCovered;
    this.prescriptions = [];
  }
}


export {
  Patient
}
