import {Patient_data} from "../data/patient_data.interface";

export class PatientService{
  private patients: Patient_data[] = [];

  deletePatient(patient: Patient_data){

  }
  createPatient(patient: Patient_data){

  }
  closePatient(patient: Patient_data){
    const position = this.patients.findIndex((patientEl: Patient_data) =>{
      return patientEl.p_id ==   patient.p_id;
    })
    this.patients.splice(position, 1);
  }

  addPatient(){

  }
}
