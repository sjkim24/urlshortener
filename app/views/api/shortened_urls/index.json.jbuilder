json.array! @shortened_urls do |shortened_url|
  json.longUrl shortened_url.long_url
  json.shortUrl shortened_url.short_url
  json.visitCount shortened_url.visit_count
end 