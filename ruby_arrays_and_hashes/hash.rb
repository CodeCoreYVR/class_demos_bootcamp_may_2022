# => ruby rocket
# keys in a hash can be strings, integers or symbols

# ruby rocket is older syntax
# h = {:symbol => 1, 'string' => 2, 4 => 3}

# newer syntax:
# h = {jane: 10, jim: 6}

# All keys created using the above syntax are considered symbols

grades = {
  "Jane Doe" => 10,
  "Jim Doe" => 5,
  :lisa => 12, # this can also be written as lisa:12
  "lisa" => 500
}

p grades["Jane Doe"]

grades["Jane Doe"] = 20
p grades["Jane Doe"]

p grades[:lisa]
grades[:lisa] = 20
p grades[:lisa]

# Methods 
# return all the keys of a hash as an array

# .keys
p grades.keys

# return all the values of a hash as an array

# .values
p grades.values
