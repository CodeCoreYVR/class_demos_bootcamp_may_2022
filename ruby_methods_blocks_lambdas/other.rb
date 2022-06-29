#ternary operator
a = true

# puts a ? "a is true" : "a is not true"

# Or equals ||=
a ||= 5

#x = true   # x's value will remain true
x = false # x's value willl be 5

x ||=5

# p x

#CASE

puts "Hello there! Please enter a language"

language = gets.chomp

case language
    when "English"
        puts "Hello"
    when "Spanish"
        puts "Hola"
    when "French"
        puts "Bonjour"
    when "Russian"
        puts "Privet"
    when "Arabic"
        puts "Salam"
    when "Korean"
        puts "안녕하세요"
    when "Vietnamese"
        puts "Chào"
    when "Hindi"
        puts "Namaste"
    when "Afrikaans"
        puts "Goeie Dag"
    else
        puts "What was that?"
    end

