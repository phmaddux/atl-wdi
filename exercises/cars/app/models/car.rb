class Car < ApplicationRecord
    validates :make, presence: true
    validates :model, presence: true
    attribute :sunroof, presence: true
    validates :color, presence: true
end
