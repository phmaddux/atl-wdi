
def hash_switcher input
    if input.class == Hash
        return input.invert
    elsif input.class == Array
        new_arr = input.map do |item|
            item.invert
        end
        return new_arr
    end
    reutrn hash_to_return
end


hash_switcher({"hello" => "world"})
# => {"world" => "hello"}
hash_switcher([ {"hello" => "world"}, {"yo" => "lo"} ])
# => [{"world" => "hello"}, {"lo" => "yo"}]