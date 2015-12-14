class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    # fail
    @reviews = Review.where(bench_id: params[:bench_id])
    render json: @reviews
  end

  private
  def review_params
    params.require(:review).permit(:body, :score, :bench_id)
  end

end
