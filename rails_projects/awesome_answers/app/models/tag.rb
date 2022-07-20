class Tag < ApplicationRecord
    before_validation :downcase_name

    #ASSOCIATIONS
    has_many :taggings, dependent: :destroy
    has_many :questions, through: :taggings#, source: :question

    #VALIDATIONS
    validates :name, presence: true, uniqueness: true
     
    #the case_sensitive option will make uniqueness validation
    #ignore case, for example two records with names "SCIENCES" and "Sciences" can't co-exist

    private

    def downcase_name
        self.name&.downcase!
    end

end
