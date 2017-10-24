require 'ostruct'

#  Ruby Map Practice

#  1. Return an array of each Person's full name, upper-cased

people = [
    OpenStruct.new(
        first_name: 'Jamie',
        last_name: 'King'
    ),
    OpenStruct.new(
        first_name: 'Danny',
        last_name: 'Hurley',
    ),
    OpenStruct.new(
        first_name: 'Maren',
        last_name: 'Woodruff',
    )
]

upper_case_full_names = people.map do |person|
    full_name = "#{person.first_name} #{person.last_name}"
    full_name.upcase
end
puts upper_case_full_names


#   2. Find the first order for each user

users = [
    OpenStruct.new(
        name: 'Tim',
        orders: [
            OpenStruct.new(
                description: 'a bike'
            )
        ]
    ),
    OpenStruct.new(
        name: 'Jim',
        orders: [
            OpenStruct.new(
                description: 'bees'
            ),
            OpenStruct.new(
                description: 'fishing rod'
            )
        ]
    ),
    OpenStruct.new(
        name: 'Slim',
        orders: [
            OpenStruct.new(
                description: 'a MacBook'
            ),
            OpenStruct.new(
                description: 'The West Wing DVDs'
            ),
            OpenStruct.new(
                description: 'headphones'
            ),
            OpenStruct.new(
                description: 'a kitten'
            )
        ]
    )
]

first_order_for_each_user = users.map do |user|
    user[:orders].first
end
puts first_order_for_each_user


#   3. Find the average amount spent on coffee, per transaction, for each person

people = [
    OpenStruct.new(
        name: 'Tim',
        transactions: [
            OpenStruct.new(
                type: 'COFFEE',
                amount: 7.43
            ),
            OpenStruct.new(
                type: 'TACOS',
                amount: 14.65
            ),
            OpenStruct.new(
                type: 'COFFEE',
                amount: 4.43
            )
        ]
    ),
    OpenStruct.new(
        name: 'Wim',
        transactions: [
            OpenStruct.new(
                type: 'BIKES',
                amount: 800.00
            ),
            OpenStruct.new(
                type: 'TACOS',
                amount: 14.65
            ),
            OpenStruct.new(
                type: 'COFFEE',
                amount: 4.43
            )
        ]
    ),
    OpenStruct.new(
        name: 'Blim',
        transactions: [
            OpenStruct.new(
                type: 'COFFEE',
                amount: 7.43
            ),
            OpenStruct.new(
                type: 'COFFEE',
                amount: 100.00
            ),
            OpenStruct.new(
                type: 'COFFEE',
                amount: 4.43
            )
        ]
    )
]

coffee_average_per_person = people.map do |person|
    # I need to isolate only the coffee purchases
    coffee_transaction_amounts_for_user = person.transactions.map do |transaction|
        transaction.type == 'COFFEE' ? transaction.amount : 0.00
    end 
    # I need the total amount each person spen on coffee
    coffee_transaction_sum = coffee_transaction_amounts_for_user.reduce(:+)
    # I need the total number of times each person bought coffee
    number_of_coffee_transactions = person.transactions.count do |transaction|
        transaction.type === 'COFFEE'
    end

    OpenStruct.new(
        name: person.name,
        coffee_average: coffee_transaction_sum / number_of_coffee_transactions
    ) 
end
  puts coffee_average_per_person
  
# or
# coffee_average_per_person = people.map do |person|
#     counter = 0
#     sum = 0
#     person.transactions.each do |transaction|
#       if transaction.type == 'COFFEE'
#         counter += 1
#         sum += transaction.amount
#       end
#     end
#     sum/counter
#   end

#   4. Find the most expensive product for each store, with the store name:
# EXAMPLE:
# {
#   store_name: 'Best Buy',
#     most_expensive_product: {
#       description: 'iPhone',
#       price: 799.99
#     }
# }


stores = [
    OpenStruct.new(
        store_name: 'Best Buy',
        products: [
            OpenStruct.new(
                description: 'Titanium',
                price: 9384.33
            ),
            OpenStruct.new(
                description: 'Gold',
                price: 345.54
            )
        ]
    ),
    OpenStruct.new(
        store_name: 'Target',
        products: [
            OpenStruct.new(
                description: 'Ruby',
                price: 323.43
            ),
            OpenStruct.new(
                description: 'Silver',
                price: 654.44
            ),
        ]
    ),
    OpenStruct.new(
        store_name: 'Amazon',
        products: [
            OpenStruct.new(
                description: 'Opal',
                price: 345.43
            ),
            OpenStruct.new(
                description: 'Sapphire',
                price: 899.33
            )
        ]
    )
]



most_expensive_products_by_store = stores.map do |store|
    store.products = store.products.max_by { |product| product.price}
    store
end

puts most_expensive_products_by_store