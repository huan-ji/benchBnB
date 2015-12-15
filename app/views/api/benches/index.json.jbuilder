json.array! @benches do |bench|
  json.lat bench.lat
  json.lng bench.lng
  json.description bench.description
  json.seating bench.seating
  json.id bench.id
  json.image_url bench.image_url
  json.average_score bench.average_score
end
