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
    return index unless Rails.env.development?
    index.sub!('/ember-cli-live-reload', 'http://localhost:4200/ember-cli-live-reload')
  end
end
