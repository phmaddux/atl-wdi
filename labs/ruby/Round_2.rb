array_to_test = [ ["Husker","Adama"], ["DrRobotmck"], [] ]

def hasher(arr)
    returned_hash = {}
    arr.each do |item|
        next if item.length == 0
        if item.length == 2 
            returned_hash[item.first] = item.last
        else
            returned_hash[item[0]] = nil
        end
    end
    puts returned_hash
end

hasher(array_to_test)
