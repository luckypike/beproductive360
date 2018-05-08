json.extract! lection, :id, :title, :text, :created_at, :updated_at
json.url lection_url(lection, format: :json)
json.text_md markdown(lection.text)
