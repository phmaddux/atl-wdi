# Boolean Skills:

a = true
b = false

puts a == b 

puts a != b

# Nil Skills:

n = nil

puts n.to_s + " was here."
# Not sure how to get that to show up...

puts n.nil?

puts n.class

# Integer Skills:

d = 100

puts d

e = 100.0

puts e

d = e

puts d

# Strings Skills:

christine = "Hi, I'm Christine"
likesTo = "long walks on the beach, kinda."
tims = " and I like "
puts christine << tims << likesTo

g = "2"
gToNumber = 2

puts g + gToNumber
# results in
# ninja_skills.rb:45:in `+': no implicit conversion of Integer into String (TypeError)
# from ninja_skills.rb:45:in `<main>'

# Strings and Integers cannot be added together properly. I would have to convert the string to an integer. Probably using .oct

