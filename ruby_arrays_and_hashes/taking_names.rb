# Solution 1

names = []

while name = gets.chomp
  if name == 'exit'
    break
  else
    names << name
  end
end

names.each do |x|
  p x.capitalize
end

# Alternative way to write 
# Solution 2

names = []
name = gets.chomp
while name != 'exit'
  p 'type in names'
  names << name.capitalize
  name = gets.chomp
end

p names