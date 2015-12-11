class Api::BenchesController < ApplicationController
  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render :new
    else
      render json: @track.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @benches = Bench.all
    render :index
  end
end
