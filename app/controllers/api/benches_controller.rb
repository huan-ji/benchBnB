class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render json: @bench
    else
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    # fail
    @benches = Bench.in_bounds(params[:bounds])
    render :index
  end

  private
  def bench_params
    params.require(:bench).permit(:lat, :lng, :description, :image_url, :seating)
  end

end
