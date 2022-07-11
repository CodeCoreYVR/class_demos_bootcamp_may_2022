class Answer < ApplicationRecord
  belongs_to :question

  validates :body, length: {minimum: 3, maximum:200}
end
