Rails.application.routes.draw do

  #------------------------RESTful Routes----------------------------------------->
  #A RESTful route provides mapping from HTTP verbs (like GET, POST, PATCH, PUT, DELETE)
  #to the contoller CRUD actions (create, read, update, destroy).
  #It depends on the HTTP verb and the URL, and not just solely on the URL

  #RESTful Routes for Questions resource
  #1 index: GET "/resources" - return all records of that resource
  #2 show: GET "/resources/:id" - returns one instance of the resource
  #3 new: GET "/resources/new" - return a view page with form to create a resource
  #4 create: POST "/resources" - handle the submission to the "new form" and inserts a new resource in the db
  #5 edit: GET "/resources/:id/edit" - returns a view form to edit an existing resource
  #6 update: PATCH "/resources/:id" - handle submission of the "edit form" and update the resource with specific id in the db
  #7 destroy: DELETE "/resources/:id" - delete a record with specific id from the database
  #------------------------------------------------------------------------------->

  get '/', to: 'welcome#new', as: :root
  # # new
  # get 'questions/new'

  # # create
  # post 'questions', to: 'questions#create', as: :create_question

  # # index
  # get 'questions', to: 'questions#index'

  # # show
  # get 'questions/:id', to: 'questions#show', as: :question

  # # edit
  # get 'questions/:id/edit', to: 'questions#edit', as: :edit_question

  # # update
  # patch 'questions/:id', to: 'questions#update'

  # # destroy
  # delete 'questions/:id', to: 'questions#destroy', as: :delete_question

  resources :questions do
    # routes written inside of the block passed a resource method will be prefixed by a path corresponding to the passed in symbol
    # in this case, all the nested routes will be prefixed with '/questions/questions_id'

    # post 'questions', to: 'questions#create', as: :create_question
    # /questions method post
    # /questions/:question_id/answers method post
    resources :answers, only: [:create, :destroy]
    # except: [:show, :new, :edit, :update]

    resources :likes, shallow: true, only: [:create, :destroy]

    get :liked, on: :collection
  end

  resources :users, only:[:new, :create, :show]

  resource :session, only:[:new, :create, :destroy]
  # 'resource' is singular instead of 'resources'
  # Unlike 'resources', 'resource' will create routes that do CRUD operations
  # on only one thing. Also there will be no index routes, and no route
  # will have an ':id' wildcard. But the controller name is still plural

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :job_posts, only: [:new, :create, :show, :index, :edit, :update, :destroy]

  #Delayed Job Routes:
  #We will go to this url to see this route: 'localhost:3000/delayed_job/overview'
  match(
    "/delayed_job",
    to: DelayedJobWeb,
    anchor: false,
    via: [:get, :post]
  )

  # https://guides.rubyonrails.org/active_job_basics.html #👈🏻 Link for active jobs

  #===========API routes=====================>
  #The namespace method in Rails makes it so that your app will automatically
  #look in a directory called api, then in a sub directory called v1 for QuestionsController
  #api/v1/questions

  #The option 'defaults: {format: :json } will set json as the default response 
  #format for all routes contained within the block
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :questions, only: [:index, :show, :create, :update, :destroy]
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create] do
        #get('users/current', {to: 'users#current'})
        #default api/v1/users/:id/current
        get :current, on: :collection #api/v1/users/current
      end
      resources :gifts, only: [:create]
    end

    # namespace v2: do
    #   resources :whatever
    # end

    match "*unmatched_route", to:"application#not_found", via: :all
    #This route will match any URL that hasn't been matched already
    #inside the api namespace
    #The * prefix in the route path allows this wildcard to match anything
    #The via argument is required to specify whcih methods this route applies to
    #example: via: [:get, :post, :patch]
    #via all will match with all possible methods
  end

  #OmniAuth Routes
  get "/auth/github", as: :sign_in_with_github
  get "/auth/:provider/callback", to: "callbacks#index"
  #:provider will aloow us to use the same controller and action for different authentication systems
  #such as github, twittter, facebook, etc.


end
