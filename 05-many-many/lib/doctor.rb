class Doctor
  attr_reader :name
  attr_accessor :certified, :specialty

  @@all = []

  def initialize(name, certified, specialty)
    @name = name
    @certified = certified
    @specialty = specialty

    @@all << self
  end

  def appointments
    Appointment.all.select do |appt|
      appt.doctor == self
    end
  end

  def patients
    appointments.map do |appt|
      appt.patient
    end
  end


  def self.all
    @@all
  end
end