class GenerateRss
  def initialize(page)
    @page = page
    @browser = Capybara.current_session
  end

  def call
    begin
      @browser.visit(@page.url)
      result = {
        title: fetch_title,
        description: fetch_description,
        url: @page.url,
        articles: fetch_articles
      }
      @page.errors.empty? ? result : nil
    rescue Exception => e
      @page.errors[:exception] << ": #{e.message}"
      nil
    end
  end

  private

  def fetch_title
    return @browser.title if @page.title_css_sel.blank?
    matching_elements = @browser.all(@page.title_css_sel, visible: false)
    return unless zero_elements?(matching_elements, :title_css_sel)
    title = matching_elements.first
    title[:innerText].present? ? title[:innerText] : title[:content]
  end

  def fetch_description
    css_sel = @page.desc_css_sel.present? ? @page.desc_css_sel : 'meta[name="description"]'
    matching_elements = @browser.all(css_sel, visible: false)
    return if matching_elements.count.zero?
    description = matching_elements.first
    description[:innerText].present? ? description[:innerText] : description[:content]
  end

  def articles_elements
    matching_urls = @browser.all(@page.art_url_css_sel)
    matching_titles = @browser.all(@page.art_title_css_sel)
    if @page.art_desc_css_sel.present?
      matching_descriptions = @browser.all(@page.art_desc_css_sel)
    else
      matching_descriptions = matching_titles
    end
    return [] unless articles_selectors_valid?(matching_urls, matching_titles, matching_descriptions)
    matching_urls.zip(matching_titles, matching_descriptions)
  end

  def fetch_articles
    articles_elements.map do |url, title, description|
      validate_article_selectors(url, title, description)
      {
        title: title.text.truncate(200, separator: ' '),
        url: url[:href],
        description: description['outerHTML']
      }
    end
  end

  def title_selector_valid?(matching_elements)
    return true if matching_elements.count == 1
    @page.errors[:title_css_sel] << ' - only one element should match this selector'
    false
  end

  def articles_selectors_valid?(matching_urls, matching_titles, matching_descriptions)
    return false if zero_elements?(matching_urls, :art_url_css_sel) ||
      zero_elements?(matching_titles, :art_title_css_sel) ||
      zero_elements?(matching_descriptions, :art_desc_css_sel)
    return true if matching_urls.count == matching_titles.count &&
      matching_urls.count == matching_descriptions.count
    @page.errors[:art_url_css_sel] <<
      ' - same number of article urls, titles and descriptions must be found'
    false
  end

  def zero_elements?(matching_elements, field_name)
    return false unless matching_elements.count.zero?
    @page.errors[field_name] << ' - at least one matching element must be found'
    true
  end

  def validate_article_selectors(url, title, description)
    @page.errors[:art_url_css_sel] << ' - element must have href' if url[:href].empty?
    @page.errors[:art_title_css_sel] << ' - element must have text' if title.text.empty?
    @page.errors[:art_desc_css_sel] << ' - element must have outerHTML' if description['outerHTML'].empty?
  end
end
