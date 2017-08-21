class Api::ShortenedUrlsController < ApplicationController
  
  # display top 100 visited links
  def index
    @shortened_urls = ShortenedUrl.order("visit_count DESC").last(100)
    
    render :index
  end
  
  # process original url into a shortened url
  def create
    @shortened_url = ShortenedUrl.new(shortened_urls_params)
    short_url = ShortenedUrl.random_code
    @shortened_url[:short_url] = short_url
    
    if @shortened_url.save
      render json: { shortUrl: @shortened_url[:short_url], success: true }
    else
      render json: { error: true }
    end
  end

  def redirect_to_original_link
    shortened_url = ShortenedUrl.find_by_short_url(params[:short_url])
    
    prev_visit_count = shortened_url.visit_count
    shortened_url.update_attribute("visit_count", prev_visit_count + 1)
    
    redirect_to shortened_url.long_url
  end
  
  private
    def shortened_urls_params
      params.require(:shortened_url).permit(:long_url)
    end
  
end