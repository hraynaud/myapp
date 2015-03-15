namespace :dev do
  namespace :db do

    desc "Erase and fill database"
    task :populate => [:environment,:create_test_data] do
    end

		

    desc "User data"
    task :create_test_data=>[:environment,:env_check, :reset_all_data, :create_offices ] do
      Rake::Task["demo:db:user_data"].invoke
    end #task create test data

    desc "creates Offices"
    task :create_offices =>[:environment] do
        MAX_OFFICES = 10
        
				1.upto(MAX_OFFICES).each do |i|
					office = Office.new
					office.name    = Faker::Address.street_address 
					office.city    = Faker::Address.city
					office.state    = Faker::Address.state 
					office.country   = Faker::Address.country
					office.save!
				end
    end


    desc "Clears and resest the db as well and Elastic Search Index and Redis"
    task :reset_all_data => [:environment] do
      Rake::Task["db:reset"].invoke
			$redis.flushdb
    end
 
    task :env_check do
      raise "Hey, development only you monkey!" unless (Rails.env.development? or Rails.env.demo?)
    end

  end 
end
