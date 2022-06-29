def add(first: 0, second: 1)
  #the first arg has a default of zero
  #the second has a default of 1
  p first + second
end

add
add(first: 10, second: 10)
add
add(second: 30)
# add(4,5) this will raise an exception because named arguments must be called by their names
add(first: 4)