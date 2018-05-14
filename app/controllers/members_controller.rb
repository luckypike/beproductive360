class MembersController < ApplicationController
  load_and_authorize_resource

  before_action :set_member, only: [:show, :edit, :update, :destroy]
  before_action :set_member_post, only: [:accept, :reject, :reaccept]

  # GET /members
  # GET /members.json
  def all
    @members = Member.order(id: :desc)

    respond_to do |format|
      format.html
      format.xlsx
    end
  end

  def index
    @members = Member.order(last_name: :asc).where(user: Current.user)
  end

  def list
    @members = Member.accepted.with_attached_image.order(:last_name)
  end

  def show
    redirect_to [:members]
  end

  def new
    @member = Member.new(date_arrival: Date.new(2018, 5, 16), date_departure: Date.new(2018, 5, 18), state: :undef)
  end

  def edit
  end

  def create
    @member = Member.new(member_params)

    if @member.save
      redirect_to [:members], notice: 'Спасибо за регистрацию! В ближайшее время мы пришлем вам подтверждение регистрации!'
    else
      render :new
    end
  end

  def update
    if @member.update(member_params)
      if params[:back] == 'all'
        redirect_to [:all, :members]
      else
        redirect_to [:members]
      end

    else
      render :new
    end
  end

  def destroy
    @member.destroy
    redirect_to [:members]
  end

  def accept
    @member.accept!
    redirect_to [:all, :members]
  end

  def reject
    @member.reject!
    redirect_to [:all, :members]
  end

  def reaccept
    @member.reaccept!
    redirect_to [:all, :members]
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_member
      @member = Member.find(params[:id])
    end

    def set_member_post
      @member = Member.find(params[:member_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def member_params
      params.require(:member).permit(:first_name, :middle_name, :last_name, :email, :date_arrival, :date_departure, :checkout, :company, :job, :session, :object, :hotel, :image, :state)
    end
end
