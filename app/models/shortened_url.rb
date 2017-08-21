class ShortenedUrl < ActiveRecord::Base
  validates :long_url, presence: true
  
  # generte random urlsafe string
  def self.random_code
    begin
      random_code = SecureRandom.urlsafe_base64(4)
      raise "URL exists" if ShortenedUrl.exists?(short_url: random_code)
      
      random_code
    rescue
      retry
    end
  end
  
end