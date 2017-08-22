class Api::ShortenedUrlsController < ApplicationController
  
  # display top 100 visited links
  def index
    @shortened_urls = ShortenedUrl.order("visit_count DESC").last(100)
    
    render :index
  end
  
  # process original url into a shortened url
  def create
    url = ShortenedUrl.find_by_long_url(shortened_urls_params[:long_url])
    
    if url
      render json: {shortUrl: url[:short_url]}
    else
      shortened_url = ShortenedUrl.new(shortened_urls_params)
      
      if shortened_url.save
        short_url = shortened_url.generate_short_url
        shortened_url.update_attribute("short_url", short_url)
        
        render json: { shortUrl: shortened_url[:short_url], success: true }
      else
        render json: { error: true }
      end
    end
  end

  def redirect_to_original_link
    digits = ShortenedUrl.convert_short_url_to_digits(params[:short_url])
    id = ShortenedUrl.convert_base_62_digits_to_id(digits)
    
    shortened_url = ShortenedUrl.find(id)
    shortened_url.update_attribute("visit_count", shortened_url.visit_count + 1)

    redirect_to shortened_url.long_url
  end
  
  private
    def shortened_urls_params
      params.require(:shortened_url).permit(:long_url)
    end
  
end