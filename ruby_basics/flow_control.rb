# CONDITIONALS

# if true
#   puts "happens when true"
# end

# x = 1

# if x > 0
#   puts "x is greater than zero"
# end

# INLINE CONDITIONALS
temp = 10
puts "It's cold" if temp > 15

# UNLESS
puts "It's cold" unless temp > 15

# same as above
unless temp > 15
  puts "It's cold"
end

# ELSE STATEMENT
if false
  puts "condition is false"
else
  puts "condition is true"
end

# ELSIF
puts "how many years old is your car?"
year = gets.chomp.to_i

if year <= 1
  puts "car is future"
elsif year > 2 && year < 5
  puts "car is new"
else
  puts "car is old"
end




   