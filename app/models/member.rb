class Member < ApplicationRecord
  enum state: { undef: 1, rejected: 2, accepted: 3} do
    event :accept do
      after do
        self.send_text
      end

      transition :undef => :accepted
    end

    event :reject do
      after do
        self.send_text
      end

      transition :undef => :rejected
    end

    event :reaccept do
      after do
        self.send_text
      end

      transition :rejected => :accepted
    end
  end

  belongs_to :user, default: -> { Current.user }

  has_one_attached :image

  validates_presence_of :first_name, :last_name, :company, :session, :email, :state

  SESSIONS = %w(industry goverment medical education social building)
  HOTELS = %w(sheraton kulibin courtyard hampton ibis)
  OBJECTS = %w(o1 o2 o3 o4 o5 o6 o7)

  def title
    [last_name, first_name].map(&:strip).join(' ')
  end

  def title_full
    [last_name, first_name, middle_name].map(&:strip).join(' ')
  end

  def send_text
    if accepted?
      msg = "#{title}! Подтверждаем Вашу регистрацию на Форум «Производительность 360». Обращаем внимание что основной день программы — 16 мая. Подробности на портале beproductive360.ru"
    elsif rejected?
      msg = "#{title}! Благодарим Вас за интерес к Форуму «Производительность 360». К сожалению, Ваша заявка на Форум не прошла модерацию. С удовольствием встретимся с Вами на следующем Форуме!"
    end
    
    Sms.message(user.phone, msg) if Rails.env.production?
  end
end
