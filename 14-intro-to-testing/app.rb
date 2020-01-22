require 'pry'

def palindrome?(string)
  # returns true if string is a palindrome and false if not

  # string == string.reverse
  # spaces_removed = string.split(" ").join("")
  if (string.class == String)
    sanitized = string.gsub(/[^A-Za-z0-9]/i, "").downcase

    sanitized == sanitized.reverse
  else
    raise ArgumentError
  end
  
end