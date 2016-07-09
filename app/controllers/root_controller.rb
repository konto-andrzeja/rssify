class RootController < ApplicationController
  def index
    render text: process_html(html)
  end

  private

  def html
    $redis.get("rssify:index:#{current_revision_key}")
  end

  def current_revision_key
    $redis.get('rssify:index:current')
  end

  def process_html(index)
    index.sub!(/CSRF_TOKEN/, form_authenticity_token)
  end
end
