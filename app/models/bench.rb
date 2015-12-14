class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  has_many :reviews

  def self.in_bounds(bounds)
    Bench.where("lat < ? and lat > ? and lng < ? and lng > ? and seating between ? and ?",
                  bounds["northEast"]["lat"],
                  bounds["southWest"]["lat"],
                  bounds["northEast"]["lng"],
                  bounds["southWest"]["lng"],
                  bounds["minSeats"],
                  bounds["maxSeats"]
                  )
  end

  def average_score
    if self.reviews.empty?
      ""
    else
      self.reviews.average(:score).to_f
    end
  end
end
