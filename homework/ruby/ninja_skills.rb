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

# puts g + gToNumber
# results in
# ninja_skills.rb:45:in `+': no implicit conversion of Integer into String (TypeError)
# from ninja_skills.rb:45:in `<main>'

# Strings and Integers cannot be added together properly. I would have to convert the string to an integer. Probably using .oct
# Input Output

puts "Give me a number and I'll double it!"
num = gets.to_i
puts num * 2

puts "Hi there. What's your name?"
name = gets.chomp
puts "And what is your favorite thing to do?"
hobby = gets.chomp
puts "So you're #{name} and you like to #{hobby}. I'll try to remember."


puts "---------------------"
# Arrays
myFirstArray = []
myFirstArray = ["a", "b", "c", "d", "e", 1, 2, 3, 4]
puts myFirstArray.last
puts myFirstArray.first
myFirstArray[1] = "Joe"
myFirstArray[2] = 3
myFirstArray.push("true")
puts myFirstArray[3].class

puts "---------------------"
# Hashses
myFavoriteAnimals = {
    "Edgar" => "Donkey",
    "John" => "Dragon",
    "Nilla" => "Cat",
    "Hunter" => "Human",
    "Heather" => "Flamingo"
}
myFavoriteAnimals["Edgar"] = "Bear"
favoriteMovie = {}
favoriteMovie["Movie"] = "Die Hard"
puts favoriteMovie

puts "---------------------"
#  Ranges
firstRange = (1...10)
firstRange = firstRange.to_a
secondRange = (1...999)
secondRange = secondRange.to_a
# loop problem
for i in firstRange do
    print i.to_s
end
x = 0
puts ""
while x < 50
    print secondRange[x]
    x = x + 1 
end




