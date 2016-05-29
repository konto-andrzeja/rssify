class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :name
      t.string :url
      t.string :title_css_sel
      t.string :desc_css_sel
      t.string :art_url_css_sel
      t.string :art_title_css_sel
      t.string :art_desc_css_sel

      t.timestamps null: false
    end
  end
end
