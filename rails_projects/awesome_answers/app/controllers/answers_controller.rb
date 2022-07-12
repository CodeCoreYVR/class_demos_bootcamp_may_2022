class AnswersController < ApplicationController

  before_action :find_question
  before_action :authenticate_user!
  # create / destroy

  def create
    @answer = Answer.new(params.require(:answer).permit(:body))
    @answer.question = @question
    @answer.user = current_user
    if @answer.save
      redirect_to question_path(@question), notice: "Answer created!"
      # if saved successfully then redirect to the show page of the question
      # otherwise still go to this show page but using render
      # the difference between redirect and render
      # redirect is sending a get request '/questions/:id'
      # render is rendering the page
    else
      # we want to stay on this page
      @answers = @question.answers.order(created_at: :desc)
      # '/questions/show' is not the action
      # it's the page /questions/show.html.erb
      render '/questions/show', status: 303
    end
  end

  def destroy
    @answer = Answer.find params[:id]
    @answer.destroy
    redirect_to question_path(@question), notice: "Answer deleted"
  end

  private

  def find_question
    @question = Question.find params[:question_id]
  end
end
