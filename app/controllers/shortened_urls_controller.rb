class ShortenedUrlsController < ApplicationController
  
  # display top 100 visited links
  def index
    @shortened_urls = ShortenedUrl.order("visit_count DESC").last(100)
  end
  
  # process original url into a shortened url
  def create
    short_url = ShortenedUrl.random_code
    @shortened_url = ShortenedUrl.new(shortened_urls_params)
    @shortened_url[:short_url] = short_url
    
    if @shortened_url.save
      redirect_to shortened_url_url(@shortened_url)
    else
      render :new
    end
  end
  
  # for now, i will redirect user to show action after create to simply
  # show them the shortened url but i prob don't even have to since i 
  # will be using react for front end
  def show
    @shortened_url = ShortenedUrl.find(params[:id])
  end
  
  def new
    @shortened_url = ShortenedUrl.new
  end
  # for now, do everything above
  
  # PART TWO
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