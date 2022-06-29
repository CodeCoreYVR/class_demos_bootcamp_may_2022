def map(arr)
  output = []
  for val in arr do
    output << yield(val)
  end
  output
end

p map([1,2,3,4]){|x| x * 5}

map(["Hi", "Hola", "Hello"]) do |x|
  puts x + ", Students"
end