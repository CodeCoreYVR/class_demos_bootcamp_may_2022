class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :created_at, :updated_at, :view_count, :random_stuff, :like_count

  #====Custom attributes=====>
  def random_stuff
    "You can add anything to your json response. This is an example"
  end

  def like_count
    #object refers to the instance of the model being serialized. Kind of like the "this" in JS or "self" in Ruby
    object.likes.count
  end
end
