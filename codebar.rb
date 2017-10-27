class Member
    attr_reader :first_name, :last_name

    def initialize(first_name:, last_name:)
        @first_name = first_name.capitalize
        @last_name = last_name.capitalize
    end

    def full_name
        return "#{@first_name.capitalize} #{@last_name.capitalize}"
    end

    def intoduce
        puts "Hey there! I'm #{first_name} #{last_name}."
    end
end

guy = Member.new(first_name: "Guy", last_name: "Generic")

puts guy.first_name
puts guy.last_name
guy.intoduce


class Student < Member
    
    attr_reader :reason

    def initialize(first_name:, last_name:, reason:)
        super(first_name: first_name, last_name: last_name)
        @reason = reason
    end
end

gary = Student.new(first_name: "Gary", last_name: "Good", reason: "Because.")
puts gary.first_name
puts gary.last_name
gary.intoduce
puts gary.reason


# class Instructor < Member
    
#     attr_reader :bio, :skills
    

#     def initialize(bio:, skills:)
#         @bio = bio
#         @skills = skills        
#     end

#     def add_skill
        
#     end
# end