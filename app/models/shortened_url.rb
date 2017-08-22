class ShortenedUrl < ActiveRecord::Base
  validates :long_url, presence: true
  
  ALPHANUMERIC_HASH = {}
  ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
  ALPHANUMERIC.each_with_index { |el, i| ALPHANUMERIC_HASH[i] = el }
  
  def self.convert_short_url_to_digits(short_url)
    digits = []
    short_url_arr = short_url.split("")
    
    short_url_arr.each do |el|
      digits << ShortenedUrl::ALPHANUMERIC_HASH.key(el)      
    end
    
    digits
  end
  
  def self.convert_base_62_digits_to_id(digits)
    id = 0
    max_idx = digits.length - 1
    
    digits.each_with_index do |digit, i|
      id += digit * 62**(max_idx - i)
    end
    
    id
  end

  def convert_id_to_base_62_digits(num)
    return [0] if num == 0
    
    digits = []

    while num > 0
      remainder = num % 62
      digits << remainder
      num = num / 62
    end

    digits = digits.reverse
  end
  
  def generate_short_url
    digits = self.convert_id_to_base_62_digits(self.id)
    
    short_url = ""
    digits.each { |digit| short_url << ALPHANUMERIC_HASH[digit] }
  
    short_url
  end
  
end