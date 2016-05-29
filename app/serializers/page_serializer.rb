class PageSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :title_css_sel, :desc_css_sel, :art_url_css_sel, :art_title_css_sel, :art_desc_css_sel
end
