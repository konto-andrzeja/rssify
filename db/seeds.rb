5.times do |index|
  domain_name = Faker::Internet.domain_name
  Page.create({
                name: domain_name,
                url: Faker::Internet.url(domain_name),
                title_css_sel: ".title-#{index}",
                desc_css_sel: ".description-#{index}",
                art_url_css_sel: ".url-#{index}",
                art_title_css_sel: ".title-#{index}",
                art_desc_css_sel: ".description-#{index}",
                art_pub_date_css_sel: ".pubDate-#{index}"
              })
end
