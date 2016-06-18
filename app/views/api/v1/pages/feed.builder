#encoding: UTF-8

xml.instruct! :xml, version: '1.0'
xml.rss version: '2.0' do
  xml.channel do
    xml.title @feed[:title]
    xml.description @feed[:description]
    xml.link @feed[:url]
    for article in @feed[:articles]
      xml.item do
        xml.title article[:title]
        xml.link article[:url]
        xml.description article[:description]
      end
    end
  end
end
