require 'rails_helper'

RSpec.describe JobPostsController, type: :controller do
    describe "#new" do
        
        context "with signed in user" do
            before do
                session[:user_id] = FactoryBot.create(:user).id
            end

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
        
    end

    describe "#create" do
        def valid_request
            post(:create, params: {
                job_post: FactoryBot.attributes_for(:job_post)
            })
        end
        context "with signed in user" do
            before do
                session[:user_id] = FactoryBot.create(:user).id
            end

            context "with valid parameters" do
        
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

        context "without signed in user" do
            it "should redirect to the sign in page" do
            valid_request
            expect(response).to redirect_to(new_session_path)
            end
        end
                
    end

    describe "#show" do
        it "requires a render of the show template" do
            #GIVEN
            job_post = FactoryBot.create(:job_post)

            #WHEN
            get(:show, params: {id: job_post.id})

            #THEN
            expect(response).to render_template(:show)
        end

        it "requires setting an instance variable @job_post for the shown object" do
            #GIVEN
            job_post = FactoryBot.create(:job_post)

            #WHEN
            get(:show, params: {id: job_post.id})

            #THEN
            expect(assigns(:job_post)).to eq(job_post)
        end
    end

    describe "#index" do
        it "requires a render of the index template" do
            #GIVEN
            #triggers the index action

            #WHEN
            get(:index)

            #THEN
            expect(response).to(render_template(:index))
        end

        it "requires assigning an instance variable @job_posts which contains all the job posts in the db" do
            #GIVEN
            job_post_1 = FactoryBot.create(:job_post)
            job_post_2 = FactoryBot.create(:job_post)
            job_post_3 = FactoryBot.create(:job_post)

            #WHEN
            get(:index)

            #THEN
            expect(assigns(:job_posts)).to eq([job_post_3, job_post_2, job_post_1])
    
        end
    end

    describe "#edit" do

        context "with signed in user" do
            context "as owner" do
                before do
                    current_user = FactoryBot.create(:user)
                    session[:user_id] = current_user.id
                    @job_post = FactoryBot.create(:job_post, user: current_user)
                end
                
                it "requires the render of the edit template" do
                    #GIVEN
        
                    #WHEN
                    get(:edit, params: {id: @job_post.id})
        
                    #THEN
                    expect(response).to render_template(:edit)
                end
            end


        end
        
    end

    describe "#update" do

        context "with signed in user" do
            before do
                session[:user_id] = FactoryBot.create(:user).id
                @job_post = FactoryBot.create(:job_post)
            end

            context "with valid parameters" do
                it "requires an update to the job post record with new attributes" do
                    #part of GIVEN
                    new_title = "#{@job_post.title} Plus some changes"
    
                    #WHEN
                    patch(:update, params: {id: @job_post.id, job_post: {title: new_title}})
    
                    #THEN
                    expect(@job_post.reload.title).to eq(new_title)
                end
    
                it "requires a redirect to the show page of the updated job post" do
                    #part of GIVEN
                    new_title = "#{@job_post.title} Plus some changes"
    
                    #WHEN
                    patch(:update, params: {id: @job_post.id, job_post: {title: new_title}})
    
                    #THEN
                    expect(response).to redirect_to(@job_post)
                end
            end
    
            context "with invalid parameters" do
                it "requires the job post record not to be updated in the database" do
                    #WHEN
                    patch(:update, params: {id: @job_post.id, job_post: {title: nil}}) #we will grab the job_post and make it invalid
                    job_post_after_update = JobPost.find(@job_post.id)
    
                    #THEN
                    expect(job_post_after_update.title).to eq(@job_post.title)
                    #it should remain the same because change not saved in db
                end
            end
        end
        
    end

    describe "#destroy" do
        context "with signed in user" do
            context "as owner" do
                
                before do
                    current_user = FactoryBot.create(:user)
                    session[:user_id] = current_user.id
                    #GIVEN
                    @job_post = FactoryBot.create(:job_post, user: current_user)
                    
                    #WHEN
                    delete(:destroy, params: {id: @job_post.id})
                end
    
                it "requires a record of job post to be removed from the database" do
                    #THEN
                    expect(JobPost.find_by(id: @job_post.id)).to be(nil)
                end
                
                it "requires a redirect to the job posts index page" do
                    #THEN
                    expect(response).to redirect_to(job_posts_path)
                end
    
                it "requires a flash message that the record was deleted" do
                    #THEN
                    expect(flash[:danger]).to be #asserts that the danger property of the flash message exists
                end
            end
            context "not owner" do
                it "the job post shouldn't be removed" do
                    # Given
                    # 1. need to have a job post
                    # 2. need to have a user signed in
                    # 3. this current user should not be the owner of this job post
                    job_post = FactoryBot.create(:job_post)
                    session[:user_id] = FactoryBot.create(:user).id

                    # When send a destory request
                    delete(:destroy, params:{id: job_post.id})

                    # Then this job post should still inside the db
                    expect(JobPost.find_by(id: job_post.id)).to eq(job_post)
                end
            end
        end
    end
end
