# def one
#     1
# end

# def two
#     2
# end

# def three
#     3
# end

#.... etc

# puts one
# puts two
# puts three

#=====Meta programming to reduce redundancy=====>

numbers = {
  1 => "one",
  2 => "two",
  3 => "three",
  #etc
}

numbers.each do |number, number_name|
  define_method(number_name) do
      #When using the define_method, the first arg 
      #is the name of the method being defined
      #The body of the method is the block that is used
      #for the defined method
      number
  end
end

puts one
puts two
puts three

#Another example

define_method("hello_world") do
  puts "Hello World"
end

hello_world


#Eval

#The eval method takes a string as an argument
# and will attempt to evaluate as ruby code.
# THIS METHOD IS VERY DANGEROUS. AVOID USING AT WORK
# WHEREVER POSSIBLE.


# p eval("1 + 2 + 3") # => 6
# p eval("two + three") # => 5