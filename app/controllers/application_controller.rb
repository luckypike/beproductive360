class ApplicationController < ActionController::Base
  before_action :set_current_user

  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.json { head :forbidden }
      format.html { redirect_to [:join] }
    end
  end

  private
  def set_current_user
    Current.user = current_user
  end
end
