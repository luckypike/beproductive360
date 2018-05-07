class Member < ApplicationRecord
  enum state: { undef: 1, rejected: 2, accepted: 3} do
    event :accept do
      transition :undef => :accepted
    end

    event :reject do
      transition :undef => :rejected
    end

    event :reaccept do
      transition :rejected => :accepted
    end
  end

  belongs_to :user, default: -> { Current.user }

  has_one_attached :image

  validates_presence_of :first_name, :last_name, :company, :session, :email, :state

  SESSIONS = %w(industry goverment city medical education social building)
  HOTELS = %w(sheraton kulibin courtyard hampton ibis)
  OBJECTS = %w(o1 o2 o3 o4 o5 o6 o7)

  def title
    [last_name, first_name].map(&:strip).join(' ')
  end

  def title_full
    [last_name, first_name, middle_name].map(&:strip).join(' ')
  end
end
