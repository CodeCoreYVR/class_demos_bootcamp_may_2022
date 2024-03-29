class Question < ApplicationRecord
  #This file was generated with: rails g model question
  #A model Question has been created, which is a respresentation of an instance of a Question
  #Models are always singular, at it is convention to capitalize the name

  #Also, a corresponding migration file was generated when generating the model
  #To add properties to an instance of Question you can add it to the terminal or
  #add it to the migration file: rails g model question title:string body:text
  #To run the migration, do: rails db:migrate
  #Never make changes to the migration file after migrating it
  #Instead, run: rails db:rollback
  #OR create a new migration to make changes to the existing table

  #--------------------Naming Conventions----------------------------->
  # A model is always singular and database tables are always plural

  #==============CALLBACKS================>
  #Example of a cycle in ActiveRecord:
  # Initialize > Validate > Save > Commit
  after_initialize :set_defaults
  #this callback is executed after you have q = Question.create(....setting attributes...)
  #if you give a value for the specific attribute, it will be set to that value, otherwise
  #this method will set the value to the default value

  before_save :capitalize_title
  #q = Question.create(title:"hello", body:"World", view_count:2)
  #before_save will turn title into "Hello" before saving into the database

  has_many :answers, dependent: :destroy

  belongs_to :user
  # dependent :destroy / :nullify
  # :destroy will delete the records in answers table that related to the question
  # :nullify will set question_id to null for the records that related to the question 

  has_many :likes, dependent: :destroy
  has_many :likers, through: :likes, source: :user 

#   has_and_belongs_to_many(
#     :likers, #The name we can set it whatever we want
#     {
#         class_name: "User", # the model that associating to
#         join_table: "likes", # the join table
#         association_foreign_key: "user_id", # the foreign key for the associated table
#         foreign_key: "question_id" # foreign key for the current table(Question)
#     }
#   )  

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings#, source: :tag
  #if the name of the association (i.e. tags) is the same as the source but singularized
  # (i.e. tag) then 'source' named argument can be omitted

  #==============VALIDATIONS===============>
  # Create validations by using the 'validates' method
  # The arguments are (in order):
  # - A column name as a symbol 
  # - Named arguments, corresponding to the validation rules

  # validates :title, presence: { message: "must be provided" }, uniqueness: {scope: :body}, length: { minimum: 2, maximum: 200 }
  validates :title, presence: { message: "Title must be provided" }, uniqueness: true, length: { minimum: 2, maximum: 200, too_short: "Title must be 2 characters minimum." }

  #passing a default message
  #alternative for passing a message would be to use .errors.full_messages in console
  #unique to the scope of body means title doesn't need to be unique 
  #on its own, but does have to be unique in combination to the body

  validates :body, presence: { message: "Body must be provided" }
  validates :view_count, numericality: { greater_than_or_equal_to: 0 }

  #=============CUSTOM VALIDATION===========>
  # Custom Validation
  # Be careful, the method for custom validations is
  # singular and its almost exactly same the method
  # for regular validations.
  #we use the "validate" instead of "validates" for custom validations
  validate :no_monkey

  #============SCOPES===========>
  # Create a scope with a class method
  # https://edgeguides.rubyonrails.org/active_record_querying.html#scopes

  scope :recent_ten, lambda { order(created_at: :DESC).limit(10)}

  #below same as above:
  # def self.recent_ten
  #     order(created_at: :DESC).limit(10
  # end

  # Scopes are such a commonly used feature that there's a way to 
  # create them quicker. It takes a name and a lambda as a callback
  scope :wildcard_search, ->(search_query) { where("title ILIKE '%#{search_query}%' or body ILIKE '%#{search_query}%' ") }

  # def self.wildcard_search(search_query)
  #     where("title ILIKE ? OR body ILIKE ?","%#{search_query}%","%#{search_query}%")
  # end

  # select * from questions where title ilike %??% and body ilike %???%;

  #-------------ADD CUSTOM TAG METHODS TO GET OR SET TAGS WITH SELECTIZE---------------->

  #Getter Method
  def tag_names
    self.tags.map(&:name).join(", ")
    #The & symbol is used to tell Ruby that the following argument
    #should be given as a block to the method. So the line
    #self.tags.map(&:name).join(", ") is equal to
    #self.tags.map { |t| t.name.join(", ")}
    #So the above will iterate over the collection of self.tags
    #and build an array of results of the name method
    #called on every item
  end

  #Setter
  #This is simnilar to implementing an attribute writer "attr_writer"
  #Appending = at the end of a method name allows us to implement a setter
  #A setter is a method that is assignable, for example:
  #q.tag_names = 'another new tag name'
  def tag_names=(rhs)
    self.tags = rhs.strip.split(/\s*, \s*/).map do |tag_name|
      Tag.find_or_initialize_by(name: tag_name)
    end
  end

  private

  def no_monkey
      if body&.downcase&.include?("monkey") 
          # &. is the safe navigation operator. It's used like . operator
          # to call methods of the object
          # If the body doesn't exist,
          # this will return nil instead of getting an error
          self.errors.add(:body, "Must not have monkey")
          # To make a record invalid. You must add a 
          # validation error using the 'errors' 'add' method
          # It's arguments (in order):
          # - A symbol for the invalid column
          # - An error message as a string
      end
  end

  def set_defaults
      # self.view_count = 0 if self.view_count.nil?
      # self.view_count = self.view_count || 0
      self.view_count ||= 0
  end

  def capitalize_title
      self.title.capitalize!
  end

end


#---------------------------- A C T I V E    R E C O R D -------------------------->
  # Fetch All Questions
  # questions = Question.all 👈 this will give us back the list of questions as an object
  # the object behaves like an array so you can call methods on it like (.each) and you
  # can also chain it with other methods to do other types of operations and queries

  # Creating a new question
  # To create a new question object in memory do:
  # q = Question.new
  # you can also pass in a hash to the new method as in:
  # q = Question.new({ title: 'To be or not to be', body: 'is that a question?', view_count: 0 })
  # or for short:
  # q = Question.new title: 'To be or not to be }, body: 'is that a question?', view_count: 0 

  # to save the above question into questions table:
  # q.save 👈 this will save that above question into the questions table (persist it)

  # Creating a record right away
  # you can create a record right away in the database using (.create) method as in:
  # Question.create({ title: 'My Question Title', body: 'My question body', view_count: 1 })

  # Fetching Records
  # .first
  # Question.first 👈 fetches the first record ordered by the id in an ascending order
  # The sql equivalent:
  # SELECT "questions".* FROM "questions" ORDER BY "questions"."id" ASC LIMIT 1;

  # .last
  # Question.last 👈 fetches the last record ordered by the id in an ascending order 
  # The sql equivalent:
  # SELECT "questions".* FROM "questions" ORDER BY "qeustions"."id" DESC LIMIT 1;

  # .find
  # Question.find(1) 👈 finding records by their primary key which is likely id

  # .find_by_x 👈 x is the column name
  # Question.find_by_title('My Last Question') 👈 this finds a question with title 
  # exactly "My Last Question"

  # .where
  # Question.where({ title: 'My Last Question', body: 'The body of the question' })

  # WILDCARD SEARCHING 
  # You can perform  wildcard searching with ActiveRecord using LIKE within "where" method
  # Question.where(['title LIKE ?', '%Last%'])
  # if you are using Postgres client, you can use ILIKE for case-insensitive searching:
  # Question.where(['title ILIKE ?', '%Last%'])
  # Note that in above queries we used a syntax that used '?' to insert variable into a SQL query.
  # this is important to avoid SQL injection if the variable component is actually a user input such
  # as search term.

   # .limit
  # Question.limit(10) 👈 this will give us back 10 first questions that are returned from the query

  # .order
  # Question.order(:created_at) 👈 this will order the fetched records by created_at. by default is ASC and 
  # if you want them in descending order do:
  # Question.order(created_at: :DESC)


  # Chaining
  # You can chain the wher, limit, order, offset, and many others to compose
  # more sophisticated queries for example:
  # Question.where(['view_count > ?', 10]).where(['title ILIKE ?', 'a']).order(id: :DESC).limit(10).offset(10)
  # Note: offset will skip first 10 records from the above query
  # SQL equivalent:
  # SELECT "questions".* FROM "questions" WHERE (view_count > 10) AND (title ILIKE 'a') ORDER BY id DESC LIMIT 10 OFFSET 10
  # another example:
  # Question.where(['view_count < ?', 10]).where(['body ILIKE ?', '%question%']).order(id: :DESC).limit(1).offset(1)

  # UPDATE RECORDS
  # once you've selected one or more records, you have ability to update them
  # Many setting attributes:
  # q = Question.find 10
  # q.title = "Some new title"
  # q.save
  # q.view_count += 1
  # q.save

  # using .update_attributes or .update
  # q = Question.find 10
  # q.update({ title: 'Updated Title', body: 'Updated body' }) or
  # q.update_attribute(:title, 'Updated Title') or
  # q.update_attributes(title: 'Updated Title', body: 'Updated body')

  # DELETING RECORDS
  # using .destroy
  # q = Question.find 10
  # q.destroy

  # using .delete
  # q = Question.find 10
  # q.delete

  # using .delete skips executing callback methods after_destroy and before_destroy 
  # and also skips deleting or nullifying associated records in the :dependant option
  # with associtations. Generally, avoid using ".delete" in favor of ".destroy". there are
  # only few cases when you want to use ".delete"

  # Aggregate functions
  # .count
  # Question.count 👈 counts the number of records in questions model
  # SQL equivalent:
  # SELECT COUNT(*) FROM "questions";

  # .groud
  # Question.select('avg(view_count)) as count').group('title')

  # CALLING RAW QUERIES
  # connection = ActiveRecord::Base.connection
  # result = connection.execute('SELECT * FROM questions WHERE id=1;')
  # result.first 👈 because the result is an array of hashes 