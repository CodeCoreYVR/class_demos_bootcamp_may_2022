# Lambdas are part of the Procs class, it is a special kind of proc

# Differences between Procs and Lambdas:

# a = Proc.new {|x,y| puts "I don't care about arguments" }
# a.call(4) # even if there are not the expected amount of arguments,
# a proc will not raise an exception (throw an error)
# but a lambda would

# Procs and Lambdas return differently

# A Lambda returns like a regular method
# Procs will return from the method enclosing the Proc

def test_procs_and_lambdas
  yield
  puts "hello"
end

l = lambda do
  puts "Lambda"
  return
end

p = Proc.new do
  puts "Proc"
  return
end

# test_procs_and_lambdas(&l)
test_procs_and_lambdas(&p)

# Procs are selfish - if it encounters it's own return, it will stop right thee and ignore the return of the method that called it

# --------Differences-----------
# How we create them
# lambdas are defined with ->{}/ lambda{} and procs are defined with Proc.new{} / proc {}
# Procs don't care about arguments
# Proc returns from it's own return and doesn care about the rest of the method's code