# frozen_string_literal: true

class SessionsController < ApplicationController
  before_action :redirect_auth, only: [:new, :create]

  # GET /resource/sign_in
  def new
    render :app
  end

  # POST /resource/sign_in
  def create
    unless logged_in?
      if params[:token].present?
        user = User.find_by(phone: params[:phone], token: params[:token])
        auto_login(user, true) if user
      else
        user = User.find_or_initialize_by(phone: params[:phone])
        user.token = rand.to_s[2..5]
        user.save
      end
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

  private
  def redirect_auth
    redirect_to [:members] if logged_in?
  end
end
