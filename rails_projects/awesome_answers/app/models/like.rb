class Like < ApplicationRecord
  # if you generated the migration file first, then you can use rails g model like --skip to skip the migration file
  belongs_to :user
  belongs_to :question

  # validates(:question_id, uniqueness: true) #wrong way!
  validates(:question_id, uniqueness: {scope: :user_id, message: "Has already been liked!"})

end
