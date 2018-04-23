require 'net/http'
require 'addressable/uri'

class Sms
  def self.message phone, message
    uri = Addressable::URI.parse("https://gate.smsaero.ru/v2/sms/send?numbers[]=#{phone}&text=#{message}&sign=BP360&channel=DIGITAL")

    Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
      request = Net::HTTP::Get.new uri
      request.basic_auth Rails.application.credentials.dig(:sms, :user_id), Rails.application.credentials.dig(:sms, :access_key)
      http.request request
    end
  end
end
