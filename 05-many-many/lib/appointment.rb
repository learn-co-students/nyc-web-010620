class Appointment
  attr_accessor :patient, :doctor, :time, :type, :status
  
  @@all = []

  def initialize(patient, doctor, time, type = "General", status = "Confirmed")
    @patient = patient
    @doctor = doctor
    @time = time
    @type = type
    @status = status

    @@all << self
  end

  def self.all
    @@all
  end

end