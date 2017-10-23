names = [ "Donald", "Daisy", "Huey", "Duey", "Luey" ]
names.each do |name|
  puts "Hello #{name}!"
end

puts '------------------------------------'


numbers = [ 1, 3, 9, 11, 100 ]
numbers.each do |number|
  puts number * number
end

puts '------------------------------------'

fahrenheit_temps = [ -128.6, 0, 32, 140, 212 ]
fahrenheit_temps.each do |f_number|
    puts (f_number - 32) * (5.0 / 9)
end

puts '------------------------------------'

cart = ["shoes", "watch", "computer"]
uppercase = cart.each do |product|
  caps_product = product.upcase
  puts caps_product
  caps_product
end
puts uppercase.join(", ")
puts '------------------------------------'
cart = ["shoes", "watch", "computer"]
uppercase = cart.map do |product|
  caps_product = product.upcase
  puts caps_product
  caps_product
end
puts uppercase.join(", ")
puts '------------------------------------'
puts '------------------------------------'

first_names = [ "Donald", "Daisy", "Daffy"]
new_names = first_names.map do |names|
    "#{names} Duck"
end
puts new_names
puts '------------------------------------'
numbers = [ 1, 3, 9, 11, 100 ]
numbers.map do |number|
  puts number * number
end
puts '------------------------------------'
fahrenheit_temps = [ -128.6, 0, 32, 140, 212 ]
fahrenheit_temps.map do |f_number|
    puts (f_number - 32) * (5.0 / 9)
end
