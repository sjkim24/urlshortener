class ChangeShortenedUrlsColumn < ActiveRecord::Migration
  def change
    change_column :shortened_urls, :short_url, :string, :null => true
  end
end
