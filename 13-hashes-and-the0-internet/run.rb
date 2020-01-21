require 'pry'
require 'rest-client'
require 'tty-prompt'

prompt =  TTY::Prompt.new
URL = "https://www.googleapis.com/books/v1/volumes?q="



# puts "Welcome to Google Books! What're you looking for?"
# user_input = gets.chomp

user_input = prompt.ask("Welcome to Google Books! What're you looking for?")

response = RestClient.get(URL + user_input + "&maxResults=40")
# # ruby doesn't know what format this response is in - but you do
data = JSON.parse(response)

# data["items"].each do |book|
#   puts book["volumeInfo"]["title"]
# end

prompt.select('What book do you want to see?') do |menu|
  data["items"].each do |book|
    menu.choice book["volumeInfo"]["title"], -> do 

      puts "Here's all the info about '#{book["volumeInfo"]["title"]}'"
      puts book["volumeInfo"]["description"]

      # system("say '#{book["volumeInfo"]["title"]}'")

      # Book.create(
      #   title: book["volumeInfo"]["title"],
      #   description: book["volumeInfo"]["description"]
      # )
    end
  end
end

# binding.pry
