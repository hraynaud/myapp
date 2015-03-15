class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  before_action :authenticate_user!
  before_action :set_csrf_cookie_for_ng


  # Overwriting the sign_out redirect path method
  def after_sign_out_path_for(resource_or_scope)
   new_user_session_path
  end


  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

	def verified_request?
		super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
	end

	def default_serializer_options
		{root: false}
	end
	
end
