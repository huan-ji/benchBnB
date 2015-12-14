class Review < ActiveRecord::Base
  validates :body, :score, :bench_id, presence: true
  belongs_to :bench
end
