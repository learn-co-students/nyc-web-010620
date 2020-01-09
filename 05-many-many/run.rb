require 'pry'
require_relative './lib/patient'
require_relative './lib/doctor'
require_relative './lib/appointment'


patient1 = Patient.new("Tony", "uninsured")
patient2 = Patient.new("Xx_Reddarkness_xX", "uninsured")
patient3 = Patient.new("Natalia", "Aetna")
patient4 = Patient.new("NHLhockee1990", "Blue Cross, Self Insured")

doctor1 = Doctor.new("Smith", false, "Cardiologist")
doctor2 = Doctor.new("Kim", true, "Podiatrist")
doctor3 = Doctor.new("Sam", true, "Dentist")
doctor4 = Doctor.new("Gamma", false, "Radiologist")


appointment1 = Appointment.new(patient1, doctor4, "Tomorrow")
appointment2 = Appointment.new(patient1, doctor1, "Day after Tomorrow")
appointment3 = Appointment.new(patient4, doctor2, "Sunday")


binding.pry

patient1.appointments