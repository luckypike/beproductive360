json.extract! member, :id, :first_name, :middle_name, :last_name, :company, :job, :session, :object, :user_id, :created_at, :updated_at
json.url member_url(member, format: :json)
if member.image.attached? && member.image.variable?
  json.avatar image_tag member.image.variant(resize: "150x150^", gravity: :center, extent: "150x150")
else
  json.avatar ''
end
