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

  resources :questions

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
