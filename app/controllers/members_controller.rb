class MembersController < ApplicationController
  before_action :set_member, only: [:show, :edit, :update, :destroy]

  # GET /members
  # GET /members.json
  def index
    @members = Member.order(id: :asc).where(user: Current.user)
  end

  def show
    redirect_to [:members]
  end

  def new
    @member = Member.new
  end

  def edit
  end

  def create
    @member = Member.new(member_params)

    if @member.save
      redirect_to [:members]
    else
      render :new
    end
  end

  def update
    if @member.update(member_params)
      redirect_to [:members]
    else
      render :new
    end
  end

  def destroy
    @member.destroy
    redirect_to [:members]
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def member_params
      params.require(:member).permit(:first_name, :middle_name, :last_name, :company, :job, :session, :object, :hotel)
    end
end
