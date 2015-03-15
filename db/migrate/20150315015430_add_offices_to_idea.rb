class AddOfficesToIdea < ActiveRecord::Migration
  def change
    add_column :ideas, :offices, :integer, array: true
  end
end
