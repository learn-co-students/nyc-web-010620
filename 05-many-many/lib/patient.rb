class Patient
  attr_reader :name
  attr_accessor :insurance_name, :dob

  @@all = []

  def initialize(name, insurance_name, dob = nil)
    @name = name
    @insurance_name = insurance_name
    @dob = dob

    @@all << self
  end

  # each   -> general purpose go throw each one, returns the original
  # map    -> transforms lists
  # select -> filters lists
  # find   -> returns the first thing that matches the criteria

  def appointments
    Appointment.all.select do |appt|
      appt.patient == self
    end

    # look at each one
    # if the name matches "MY name" keep this one
    # if the name does not match, throw it away
  end

  def doctors
    self.appointments.map do |appt|
      appt.doctor
    end
  end

  def self.all
    @@all
  end

end