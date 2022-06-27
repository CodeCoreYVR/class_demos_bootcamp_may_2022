# 2 different numbers : integer and float
1
10
100
100_000_000 # same and 100000000. ruby ignores _ as spaces. Modern JS also allows this
# hello_world #sees this as hello world

# INTEGERS
# 5/2 = 2

# FLOAT => must declare float by putting in decimal
# 5.0/2.0 = 2.5

"50".to_i # => 50 string to integer
"50".to_f # => 50 string to float

# To the power of
a = 5
b = 3 ** a

# OPERATIONS
1 + 1
1 - 1
1 * 1
1 / 1
1 % 1 # this is integer, so need float if accurate by decimals
1 ** 1

# Write a piece of code that asks user for 2 numbers and then prints the multiplication result
# puts "enter the first number"
# first_num = gets.chomp
# puts "enter the second number"
# second_num = gets.chomp
# puts first_num.to_f * second_num.to_f

# puts "Enter two numbers"
# num1 = gets.to_i
# num2 = gets.to_i
# puts num1*num2

# LOGICAL OPERATORS
# || OR 
# returns true if either the left or right side expression are true

1 > 4 || 8 > 4 # => true
false || false # => false

# && AND
# return true only if both side expressions are true
false && true # -> false
true && true # -> true
1 > 4 && 8 > 4 # -> false

# equality operator
100 == 100 # true
100 == '100' # false
puts 10.eql?(10.0) # false because it will compare the type
