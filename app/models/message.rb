# frozen_string_literal: true

class Message < ApplicationRecord
  validates :text, presence: true
end
