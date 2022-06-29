def my_yield_method
  p "I'm a yield method"
  yield if block_given?
  puts "bye"
end

# my_yield_method

# my_yield_method {puts "Hello World"}

def print_once
  yield # expects a block to be passed to it
end

# print_once # if a block is not given, an error will be raised saying "no block given" it expects a block because of the yield keyword

# print_once{puts "Block is given"}

# print_once do
#   p "This do block is also displayed"
# end

def my_method
  x = 15
  yield(x) if block_given?
  puts "bye"
end

my_method do |my_arg|
  puts "I received #{my_arg} from method"
end

def print_twice
  yield
  yield
end

print_twice{puts "Block is being printed twice"}