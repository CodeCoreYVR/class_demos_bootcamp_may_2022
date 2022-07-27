class Api::V1::QuestionsController < Api::ApplicationController
    def index
        questions = Question.order(created_at: :desc)
        render(json: questions, each_serializer: QuestionCollectionSerializer)
    end

    def show
        question = Question.find(params[:id])
        render(json: question)
    end

    def create
        question = Question.new(question_params)
        question.user = User.first #hard code the user for now
        if question.save
            render json: { id: question.id }
        else
            render(
                json: { errors: question.errors.messages },
                status: 422 #unprocessable entity HTTP status code
            )
        end
    end

    private

    def question_params
        params.require(:question).permit(:title, :body, :tag_names)
    end
end
