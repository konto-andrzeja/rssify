class Api::V1::PagesController < ApplicationController
  def feed
    @feed = GenerateRss.new(page).call
    render layout: false
  end

  def index
    render json: Page.all
  end

  def show
    render json: page
  end

  def create
    @page = Page.new(page_params)
    if @page.save && GenerateRss.new(@page).call
      render json: @page
    else
      render json: @page.errors.full_messages, root: 'errors', status: :unprocessable_entity
    end
  end

  def update
    if page.update(page_params) && GenerateRss.new(page).call
      render json: page
    else
      render json: page.errors.full_messages, root: 'errors', status: :unprocessable_entity
    end
  end

  def destroy
    render json: page.destroy
  end

  private

  def page
    @page ||= Page.find(params[:id])
  end

  def page_params
    params.require(:page).permit(:name, :url, :title_css_sel, :desc_css_sel, :art_url_css_sel, :art_title_css_sel, :art_desc_css_sel)
  end
end
