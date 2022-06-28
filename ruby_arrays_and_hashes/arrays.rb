# Array
a = [[1,2,3, true, "Hey", "Bye"]]

# To access
a[2]

aa = [[1,2,3],[1,2,3],[1,2,3],[1,2,3]]

aa[1] # [1,2,3] in index 1 (second array)

aa[1][2] # 3 the second index in the second array

# ------------METHODS------------------

# Methods on arrays

# .push
a.push([4,5,6])
p a

# Shovel operator
# <<
a << "Hola"
p a

# .include?
array = [1,2,3]
array.include?(4) # false
array.include?(2) # true

p array.length #3
p array.count # 3
p array.size #3

# To turn a multi-dimensional array into a one-dimensional array
multi_array = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]
p multi_array.flatten

d3_array = [[[1], [2], [3]],[[4], [5], [6]],[[7], [8], [9]]]
p d3_array.flatten(1)
p d3_array.flatten(2)

# Add and remove elements from the beginning of arrays

# shift removes the first element in the array and returns the removed element
# it permanently mutates the original array
a1 = ["a", "b", "c", "d", "e"]
p a1.shift
p a1

# unshift adds a new element to the beginning of the array and returns the new array
a1.unshift("a2")
p a1

# Drop the first 2 elements 
# returns a new array without dropped elements
p a1.drop 2
# The original array remains the same
p a1

# Convert a string to array of words:
str = "Hello everyone, why are you sleeping?"

p str.split ' ' # ["Hello", "everyone,", "why", "are", "you", "sleeping?"]
p str.split(' ')

# Convert an array into a string sentence:
arr = ["Hello", "everyone,", "why", "are", "you", "sleeping?"]
p arr.join(' ')

# Swap elements
a3 = ['Hello', "CodeCore", "Students"]
a3 = a3[1], a3[2], a3[0]
p a3

# Replace elements based on their index position
a4 = [0,1,2]
# replace index 0 and 1 with the value of 4,4,4
a4[0..1] = [4,4,4]
p a4

# To see in which index position the value resides
p a3.index('Students') #index 1, so returns 1
