class Api::V1::QuestionsController < Api::ApplicationController
    before_action authenticate_user!, except: [:index, :show]
    
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
        # question.user = User.first #hard code the user for now
        question.user = current_user
        if question.save
            render json: { id: question.id }
        else
            render(
                json: { errors: question.errors.messages },
                status: 422 #unprocessable entity HTTP status code
            )
        end
    end

    def update
        question = Question.find(params[:id])
        if question.update(question_params)
            render json: {id: question.id}
        else
            render(
                json: { errors: question.errors.messages },
                status: 422 #unprocessable entity HTTP status code
            )
        end
    end

    def destroy
        question = Question.find(params[:id])
        if question.destroy
            # head :ok
            render( json: {status: 200 })
        else
            #head :bad_request
            render( json: {status: 500 })
        end
    end

    private

    def question_params
        params.require(:question).permit(:title, :body, :tag_names)
    end
end
