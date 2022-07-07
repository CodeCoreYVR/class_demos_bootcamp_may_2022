class RemoveLikeCountFromQuestions < ActiveRecord::Migration[7.0]
  def change
    remove_column :questions, :like_count, :integer
  end
end

#remove_column -> method available through ActiveRecord
#:questions -> the table we're adding to
#:like_count -> the column we're removing
#:integer -> the type of the column

#Alternatively, you could do rails db:rollback
#If you want to rollback to a specific migration, you can do:
#rails db:rollback STEP=2 (which would rollback 2 migrations, for example)

#You can find more information about migrations here: http://edgeguides.rubyonrails.org/active_record_migrations.html