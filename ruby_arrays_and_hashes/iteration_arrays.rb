# iteration through elements of an array
arr = ['a', 'b', 'c', 'c']

# using a for loop

for element in arr do
  # puts element
end

arr2 = [1,2,3,4,5,6,7]

# .each

# one of the most common ways to iterate over an array
# the method expects a block with an argument
# blocks are a new concept here
# blocks are aq piece of code that you can pass in as an argument to a method
# blocks start after the "do" statement... arguments are written inside of the pipes | |

# In ruby, there is no such things as functions, instead ruby just uses methods.
# And methods may take a block of code as an argument. We no longer pass functions around. We pass blocks around

# do end, is similar to {} in JS, so similar scope as it would be in JS

# The argument x represents the value of each element in the array in this case

# the block starts after the 'do' statement. Arguments are within the two pipes '|x|'. Multiple arguments are seperated by commas '|x,y|'
arr2.each do |x|
  y = x * 2
  # p y
end

arr3 = [1,2,3,4,5]

arr3.each do |element|
  y = element * 2
  # puts y
end

# Build, Loop and Print
arr4 = [1,2,3,4,5]

arr3.each do |element|
  y = element ** 2
  # puts y
end

# .map.with_index
['a', 'b', 2, 'd', 'e'].map.with_index do |element, index|
  # p "element: #{element}, index: #{index}"
end

# Ruby string interpolation is "my string #{variable}"

# Printing multiple 
arr5 = [[1,7,3], [4,4,6], [7,2,9]]

arr5.each do |sub_array|
  sub_array.each do |val|
    p val * val
  end
end

# Alternate ways to write code blocks:
arr6 = [1,5,6,7]

arr6.each do |val|
  puts val
end

# Same as above:
arr6.each { |val|
  puts val
}

# Alternate
# arr6.each {|val| puts val}

# Alternate
# arr6.each {val puts val}

# A nice thing about ruby is that you don't need to explicitly return. The last line in a block will automatically return
# Remember... everything in ruby is an object... the .map method is an object that has a method called .with_index
# calling .with_index will give you the map method but the block has an additional argument as the index