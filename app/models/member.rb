class Member < ApplicationRecord
  belongs_to :user, default: -> { Current.user }

  validates_presence_of :first_name, :last_name, :company, :session, :object

  SESSIONS = %w(industry goverment city medical education social building)
  HOTELS = %w(sheraton nikola courtyard)
  OBJECTS = %w(o1 o2 o3 o4 o5 o6 o7)

  def title
    [first_name, last_name].map(&:strip).join(' ')
  end
end
