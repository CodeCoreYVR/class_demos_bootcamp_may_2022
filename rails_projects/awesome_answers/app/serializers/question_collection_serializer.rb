class QuestionCollectionSerializer < ActiveModel::Serializer
  #If the serializer name does not match the model (like question_serializer matches question.rb),
  #then we need to specify in the specific controller actions which serializer to use
  #with the method "each_serializer" - see api/v1/questions_controller#index
  attributes :id, :title
end
