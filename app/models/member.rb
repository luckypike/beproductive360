class Member < ApplicationRecord
  belongs_to :user, default: -> { Current.user }

  validates_presence_of :first_name, :last_name, :company, :session, :object

  def title
    [first_name, last_name].map(&:strip).join(' ')
  end
end
