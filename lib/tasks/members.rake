namespace :members do
  desc "TODO"
  task images: :environment do
    Member.with_attached_image.each do |member|
      # p File.exist?(member.image) if member.image.attached?
      if member.image.attached?
        unless member.image.service.exist?(member.image.blob.key)
          member.image.purge
        end
      end
      # p member.image.blob.key
    end
  end
end
