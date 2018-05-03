class LectionsController < ApplicationController
  load_and_authorize_resource

  before_action :set_lection, only: [:show, :edit, :update, :destroy]

  def index
    @lections = Lection.all
  end

  def show
  end

  def new
    @lection = Lection.new
  end

  def edit
  end

  def create
    @lection = Lection.new(lection_params)

    if @lection.save
      redirect_to [:lections], notice: 'Lection was successfully created.'
    else
      render :new
    end
  end

  def update
    if @lection.update(lection_params)
      redirect_to [:lections], notice: 'Lection was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @lection.destroy
    redirect_to [:lections], notice: 'Lection was successfully destroyed.'
  end

  private
  def set_lection
    @lection = Lection.find(params[:id])
  end

  def lection_params
    params.require(:lection).permit(:title, :text)
  end
end
