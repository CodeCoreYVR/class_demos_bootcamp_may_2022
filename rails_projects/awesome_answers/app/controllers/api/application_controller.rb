class Api::ApplicationController < ApplicationController
    #Rails expects that any POST request made to any of its controllers will include a CSRF token
    #This is used to prevent cross-site request forgery attacks
    #With our API, we expect to have our data and requests public, so no need for this token

    # Use this controller to share methods among only the api controllers.

    # When making POST, PATCH, and DELETE requests to controllers, 
    # the rails authenticity token will be provided. This isn't
    # needed for public HTTP apis, so we'll skip it.
    
    skip_before_action :verify_authenticity_token

    #rescue_from PRIORITY
    #The priority of rescue_from is in the reverse order of where the calls are made,
    #meaning that the more specific errors should be rescued last and general errors
    #should be rescued first

    #The StandardError class is an ancestor of all the errors that programmers could possibly
    #cause in their program. Rescuing from it will prevent nearly all errors from crashing the program
    #NOTE: Use this very carefully and make sure to always log the error messages in some form
    rescue_from StandardError, with: :standard_error

    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

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

    protected

    def standard_error(error)
        logger.error error.full_message

        render(
            status: 500,
            json: {
                errors: [
                    {
                        type: error.class.to_s,
                        message: error.message
                    }
                ]
            }
        )
    end

    def record_invalid(error)
        #Our object should look something like this:
        # json: {
        #     errors: [
        #         {
        #             type: "ActiveRecord::InvalidRecord",
        #             record_type: "Question",
        #             field: "body",
        #             message: "..."   
        #         }
        #     ]
        # },

        invalid_record = error.record
        errors = invalid_record.errors.map do |field, message|
            {
                type: invalid_record.class.to_s,
                field: field,
                message: message
            }
        end
        render(
            json: { status: 422, errors: errors},
            status: 422 #alias :unprocessable entity
        )
    end
end
