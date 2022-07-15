require 'rails_helper'

RSpec.describe JobPostsController, type: :controller do
    describe "#new" do
        it "requires a render of a new template" do
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

    describe "#create" do
        context "with valid parameters" do
            def valid_request
                post(:create, params: {
                    job_post: FactoryBot.attributes_for(:job_post)
                })
            end
    
            it "requires a new creation of job post in the database" do
                #GIVEN
                count_before = JobPost.count #the number of all the records in the JobPost table in the db
    
                #WHEN
                valid_request
    
                #THEN
                count_after = JobPost.count
                expect(count_after).to(eq(count_before + 1))
            end
    
            it "requires a redirect to the show page for the new job post" do
                #GIVEN
                #we are creating a new job post
    
                #WHEN
                valid_request
    
                #THEN
                job_post = JobPost.last
                expect(response).to(redirect_to(job_post_path(job_post.id)))
            end
    
        end

        context "with invalid parameters" do
            #mock a post request to the create method with invalid parameters
            def invalid_request
                post(:create, params: {
                    job_post: FactoryBot.attributes_for(:job_post, title:nil)
                })
            end

            it "requires that the database does not save the new record of the job post" do
                #GIVEN
                count_before = JobPost.count

                #WHEN
                invalid_request

                #THEN
                count_after = JobPost.count
                expect(count_after).to(eq(count_before)) 
            end

            it "requires no redirect and should render the new page" do
                #GIVEN
                #on the new template of creating a new record of job post

                #WHEN
                invalid_request #invalid params given

                #THEN
                expect(response).to render_template(:new)
            end
        end
        
    end
end
