module ApplicationHelper
  def inline_svg(path)
    file = File.open(Rails.root.join('app', 'javascript', 'images') + "#{path}", 'rb')
    raw file.read
  end

  def markdown(text)
    text ||= ''
    renderer = Redcarpet::Render::HTML.new(hard_wrap: true, filter_html: true)
    options = {
        autolink: true,
        no_intra_emphasis: true,
        fenced_code_blocks: true,
        lax_html_blocks: true,
        strikethrough: true,
        superscript: true,
        space_after_headers: true
    }
    Redcarpet::Markdown.new(renderer, options).render(text).html_safe
  end
end
