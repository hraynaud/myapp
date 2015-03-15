class RenameUserNameToFirstName < ActiveRecord::Migration
	change_table :users do |t|
		t.string :last_name
		t.rename :name, :first_name
	end
end
