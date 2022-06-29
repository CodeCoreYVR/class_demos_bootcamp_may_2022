def what_it_is(thing)
  if [String, Array, Integer].include? (thing.class)
    thing.class
  else
    "Something else"
  end
end

p what_it_is "string"
p what_it_is 4
p what_it_is [1,2,3,4]
p what_it_is 5.3