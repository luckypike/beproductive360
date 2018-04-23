module ApplicationHelper
  def inline_svg(path)
    file = File.open(Rails.root.join('app', 'javascript', 'images') + "#{path}", 'rb')
    raw file.read
  end
end
