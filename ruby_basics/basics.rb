# https://ruby-doc.org/
# https://ruby-doc.org/core-3.0.0/

# COMMENTS
# Ruby comments use # to start a single line comment

=begin
  I'm a multiline comment
  this is the syntax
=end

# CONSOLE PRINTING

# print("Hello World")
# print("Goodbye World")

# puts("Hello world")
# puts("Goodbye world")

# p("Hello world")
# p("Goodbye world")

# methods in ruby don't require parantheses

# In ruby we don't use backticks
# p `hello\n`

# VARIABLES
# We use snake_case

# first_name = "Sam"
# p first_name

# a = 1
# b = a + 5
# c = a + b

# a1 = 11

# 2a = not acceptable

# variables with all caps are considered contants
# MAX_PASSWORD_ATTEMPTS = 5

# below is possible but not good practice
# MAX_PASSWORD_ATTEMPTS = 6

# gets method allows you to prompt a user for input
# puts "Please enter your name"
# user_input = gets
# puts "your name is #{user_input}"

# puts "input a number?"
# number = gets.chomp
# puts number.to_i

# puts "Please enter your first name?"
# first_name = gets.chomp
# puts "what's your last name?"
# last_name = gets.chomp
# print first_name + " " + last_name

# Everything in Ruby is an object
1.class # Integer (class of integer)
3.14.class # Float
"I am a string".class # String

# STRINGS
# "I'm a string"
# 'I\'m also a string'
# "I'm a string with string interpolation #{my_variable}"

name = "Brett"
puts "Hello #{name}"
puts name

name[0] = "F"
puts name

# Strings are mutable!!





