# config/initializers/0_extensions.rb
Dir[Rails.root.join("lib/extensions/*.rb")].each do |file|
  require file
end

