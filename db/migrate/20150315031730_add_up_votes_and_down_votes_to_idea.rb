class AddUpVotesAndDownVotesToIdea < ActiveRecord::Migration
  def change
    add_column :ideas, :up_votes, :integer
    add_column :ideas, :down_votes, :integer
  end
end
