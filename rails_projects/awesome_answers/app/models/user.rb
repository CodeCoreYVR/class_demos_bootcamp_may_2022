class User < ApplicationRecord

  has_secure_password
  # provide 2 attributes here: password, password_confirmation
  # add a validation for password field
  # provides us a method named "authentication"

  has_many :questions, dependent: :nullify
  has_many :answers, dependent: :nullify
  has_many :job_posts, dependent: :nullify

  has_many :likes, dependent: :destroy
  has_many :liked_questions, through: :likes, source: :question

  # has_and_belongs_to_many(
  #   :liked_questions, #The name we can set it whatever we want
  #   {
  #       class_name: "Question", # the model that associating to
  #       join_table: "likes", # the join table
  #       association_foreign_key: "question_id", # the foreign key for the associated table
  #       foreign_key: "user_id" # foreign key for the current table(Question)
  #   }
  # )

  def full_name
    self.first_name + " " + self.last_name
  end

end
