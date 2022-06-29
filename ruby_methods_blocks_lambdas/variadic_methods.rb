# Variadic methods are methods that can take any number of arguments
# A method's arity refers to how many arguments it takes
#  the * in ruby is called the splat
# it is similar to ... is JS

def product(*nums)
  nums.reduce(1) do |total, num|
    # reduce takes an optional argument of 1 for the initial value
    # If not given, it will  take the first element of the argument list
    # and make it the initial value
    total * num
  end
end

# p product(1,2,3,4,5,6,7)
# p product(2,2,3)
# p product()

# -----------------------Default Argument types---------------
def multiply(a=2, b)
  a * b
end

p multiply 5 # will return 10 because it will assume the first arg takes the default value of 2

# -------------------Product Exercise-----------------
def product2(n, *nums)
  nums.reduce(1) do |total, num|
    num * n
  end
end

p product2() # raise an error - method expects at least one argument of n

# The reason it is special in ruby, is that if you don't have a variadic method, it will raise an argument error if not the right number of arguments.
# In JS they might just say argument is undefined or null