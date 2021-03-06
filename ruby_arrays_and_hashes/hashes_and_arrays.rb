# hashes can store arrays as key values pairs
example_hash_with_array = {"abc" => [1,2,3], "xyz" => [4,5]}

# arrays can store hashes as elements
example_array_with_hash = ['abc', { 'a' => 1, 'b' => 2}, false]

my_hash = {"BC" => ['Vancouver', 'Richmond'], 'AB' => ['Edmonton', 'Calgary']}

my_hash.each do |key, values|
  puts "#{key}:#{values.join(', ')}"
end

