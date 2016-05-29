class Api::V1::PagesController < ApplicationController
  def index
    render json: Page.all
  end

  def show
    render json: page
  end

  def create
    render json: Page.create(page_params)
  end

  def update
    render json: page.update(page_params.symbolize_keys)
  end

  def destroy
    render json: page.destroy
  end

  private

  def page
    Page.find(params[:id])
  end

  def page_params
    params.require(:page).permit(:name, :url, :title_css_sel, :desc_css_sel, :art_url_css_sel, :art_title_css_sel, :art_desc_css_sel)
  end
end
