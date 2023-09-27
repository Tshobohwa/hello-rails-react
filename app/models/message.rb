class Message < ApplicationRecord
  validates :text, presence: true
end
