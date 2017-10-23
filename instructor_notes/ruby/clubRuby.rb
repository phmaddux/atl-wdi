people_in_line = [
    { name: "Jack", age: 16 },
    { name: "Sam", age: 21 },
    { name: "Jill", age: 23 },
    { name: "Paul", age: 20 },
    { name: "Mike", age: 16 },
    { name: "Stan", age: 70 },
    { name: "Chris", age: 17 },
    { name: "Julie", age: 45 },
    { name: "Suzy", age: 65 },
    { name: "Eli", age: 28 },
    { name: "Katie", age: 50 },
    { name: "Ben", age: 33 }
  ]

people_in_club = []
people_denied = []    

counter = 0
while people_in_club.length < 8 do
    person = people_in_line[counter]
        counter += 1
    if person[:age] < 18
        people_denied.push(person)
    else
        person[:served] = true if person[:age] >= 21
        people_in_club.push(person)
    end
end

puts '--------------'
puts 'People Denied'
puts people_denied
puts '--------------'
puts 'People in Line'
puts people_in_line
puts '--------------'
puts 'People in Club'
puts people_in_club