class Member < ApplicationRecord
  belongs_to :user, default: -> { Current.user }

  validates_presence_of :first_name, :last_name, :company, :session, :email

  SESSIONS = %w(industry goverment city medical education social building)
  HOTELS = %w(sheraton courtyard hampton)
  OBJECTS = %w(o1 o2 o3 o4 o5 o6 o7)

  def title
    [last_name, first_name].map(&:strip).join(' ')
  end

  def title_full
    [last_name, first_name, middle_name].map(&:strip).join(' ')
  end
end
