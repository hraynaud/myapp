class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :users, index: true
      t.references :ideas, index: true
      t.integer :ups
      t.integer :downs

      t.timestamps null: false
    end
    add_foreign_key :votes, :users
    add_foreign_key :votes, :ideas
  end
end
