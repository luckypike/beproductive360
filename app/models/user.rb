class User < ApplicationRecord
  authenticates_with_sorcery!

  validates :phone, uniqueness: true

  has_many :members

  def title
    phone
  end
end
