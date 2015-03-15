require 'demo_user_generator'
namespace :demo do
  namespace :db do

    desc "creates users and collatered test data"
    task :user_data =>[:environment,:env_check]  do
      DemoUserGenerator.generate
    end #user and data task

    task :env_check do
      raise "Hey, development only you monkey!" unless (Rails.env.development? or Rails.env.demo?)
    end

  end #namesspace db
end #namesspace dev

