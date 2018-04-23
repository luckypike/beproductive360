class User < ApplicationRecord
  authenticates_with_sorcery!

  validates :phone, uniqueness: true, presence: true

  before_validation :clear_phone

  has_many :members

  def title
    phone
  end

  def send_token
    Sms.message(phone, token)
  end

  def clear_phone
    if self.phone.present?
      self.phone = User.prepare_phone(self.phone)
    end
  end

  class << self
    def prepare_phone text
      text ||= ''
      text = text.sub('/^8/', '+7').gsub(/[\D]/, '')
      text.size == 11 && text[1] == '9' ? text : false
    end
  end
end
