class ApplicationController < ActionController::Base
    # make sure that my "user" is actually a User
    # If they are then return the User instance
    def current_user
        if session[:user_id]
            User.find(session[:user_id])
        end
    end

    # If we have a user instance return it because it's truthy
    # But if this is not a user instance return something falsey => nil
    def logged_in?
        current_user
    end

    # if our logged_in returns something truthy then all is ok
    # But if it returns something falsey redirect to the signup page
    def authorized
       redirect_to "/login" unless logged_in? 
    end
end
