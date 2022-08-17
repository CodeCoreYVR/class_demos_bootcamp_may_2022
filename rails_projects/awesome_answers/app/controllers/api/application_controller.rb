class Api::ApplicationController < ApplicationController
    #Rails expects that any POST request made to any of its controllers will include a CSRF token
    #This is used to prevent cross-site request forgery attacks
    #With our API, we expect to have our data and requests public, so no need for this token

    # Use this controller to share methods among only the api controllers.

    # When making POST, PATCH, and DELETE requests to controllers, 
    # the rails authenticity token will be provided. This isn't
    # needed for public HTTP apis, so we'll skip it.
    
    skip_before_action :verify_authenticity_token

    #Error messaging handling
    #To send a json error message when user types in the wrong path
    #for example: localhost:3000/api/v1/somethingwrong

    def not_found
        render(
            json: {
                errors: [
                    {
                        type: "Not found"
                    }
                ]
            },
            status: :not_found  #alias for 404 in rails
        )
    end

    private
    def authenticate_user!
        redirect_to new_session_path, notice: "Please sign in" unless user_signed_in?
    end
end
