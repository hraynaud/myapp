class DemoUserGenerator
  require 'faker'
  # require 'populator'
  require 'devise'
  require 'active_record'
  require 'pry'

  NUM_TEST_USERS =50
  IDEAS_LIMIT = 5
  COMMENTS_LIMIT =10
	MAX_OFFICES = [1,2,3,4,5,10]
	VOTES_LIMIT = 50

  def self.generate(users_needed =nil)

		@statuses = Idea.statuses.keys

		@offices = Office.all.map(&:id)

    if @offices.count == 0
      logger.info "No  found. please run rake db:seed to populate topics table"
      return
    end


     num_test_users = users_needed || NUM_TEST_USERS
     new_users = []

    (1.upto(num_test_users)).each_with_index do |i|
      user = User.new
      user.first_name    = Faker::Name.first_name
      user.last_name    = Faker::Name.last_name
      user.role    = "user" 
			user.email   = "#{user.first_name}.#{user.first_name}#{i}@acme.com".downcase
      user.password = "password"
			user.encrypted_password = user.send(:password_digest,"password")
			user.office_id = @offices.sample
      user.save!
      new_users << user
    end

    if Rails.env.development?
      herby = User.find(1)
			herby.password="password"
      herby.update_attributes(:first_name => "Herby", :last_name => "Raynaud", :email => "herby@acme.com", :role =>"admin")
      herby.save!
    end

    new_users.each do |user|
           # Create some ideas for each user
		rnd_max = 0.upto(IDEAS_LIMIT).to_a.sample

		1.upto(rnd_max).each do
        idea = Idea.new
        idea.user_id=  user.id #User.all.map(&:id).sample

				rdn_max_office=	MAX_OFFICES.sample
				
        # Get random office
        idea.offices = @offices.sample(rdn_max_office)
        idea.title = Populator.words(10..20)
        idea.body = Populator.words(20..30)
				# idea.up_votes = 1.upto(30).to_a.sample
				# idea.down_votes = 1.upto(20).to_a.sample

        if idea.valid?
          idea.status = @statuses.sample 
          idea.save

					rnd_max = 0.upto(VOTES_LIMIT).to_a.sample
					0.upto(rnd_max).each do
						dir = [-1,1].sample
            vote =Vote.new
            vote.user_id = User.all.map(&:id).sample
            vote.idea_id = idea.id
						vote.direction=dir
						vote.save!
				  end



          # Create 0 or more comments for each idea.-- doesn't matter from whom
					rnd_max = 0.upto(COMMENTS_LIMIT).to_a.sample
					0.upto(rnd_max).each do
            comment =Comment.new
            comment.user_id = User.all.map(&:id).sample
            comment.idea_id = idea.id
            comment.body = Populator.sentences(1)
            comment.save!
          end
 
        end
      end #ideas done


    end #User each
  end
end
