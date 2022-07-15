require 'rails_helper'

RSpec.describe JobPostsController, type: :controller do
    describe "#new" do
        it "requires a render of a new teplate" do
            #GIVEN
            #in render there's not really a given
            #The given is just that the new action is triggered

            #WHEN
            get(:new)
            #We have this get method available from rails-controller-testing gem
            #In the backend it simulates/mocks the behaviour of sending a http get request

            #THEN
            expect(response).to(render_template(:new))
            #response is an object that represents the HTTP-response
        end

        it "requires setting an instance variable with a new job post" do
            #GIVEN
            #in render there's not really a given
            #The given is just that the new action is triggered

            #WHEN
            get(:new)

            #THEN
            #assigns(:job_post) is available from the gem rails-controller-testing
            #it allows you to grab an instance variable, and takes a symbol (:job_post)
            #All models are available to the controller
            expect(assigns(:job_post)).to(be_a_new(JobPost))
            #We check that the instance variable @job_post is a new instance of the model JobPost

        end
    end
end
