def filter(arr)
  new_array = []
  for val in arr 
    return p "No block given" unless block_given?
    result = yield(val)
    if result
      new_array << val
    end
  end
  new_array
end

filter [1,2,34]

p filter([1,2,3,4]){|x| x.even?} # or x % 2 == 0