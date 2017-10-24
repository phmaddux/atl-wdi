# 100.times do |i| (this goes from 0 - 99)
1.upto(100) do |i|
    if i % 5 == 0 and i % 3 == 0
        puts "FizzBuzz"
      elsif i % 5 == 0
        puts "Buzz"
      elsif i % 3 == 0
        puts "Fizz"
      else
    puts "Sorrels"
      end
end