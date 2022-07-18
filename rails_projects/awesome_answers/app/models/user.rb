class User < ApplicationRecord

  has_secure_password
  # provide 2 attributes here: password, password_confirmation
  # add a validation for password field
  # provides us a method named "authentication"

  has_many :questions, dependent: :nullify
  has_many :answers, dependent: :nullify
  has_many :job_posts, dependent: :nullify

  def full_name
    self.first_name + " " + self.last_name
  end

end
