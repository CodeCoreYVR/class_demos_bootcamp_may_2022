class Api::V1::QuestionsController < Api::ApplicationController
    def index
        questions = Question.order(created_at: :desc)
        render(json: questions)
    end
end
