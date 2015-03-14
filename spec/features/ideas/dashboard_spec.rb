require 'rspec'

feature "Dashboard" do 
	let(:user){FactoryGirl.create(:user, :user)}

  before do
		login(user)
	end

   scenario "User arrives at ideas dashboard" do
		 expect(page).to have_content(I18n.t 'mod.ideas.hdrMain')
	 end	 


end
