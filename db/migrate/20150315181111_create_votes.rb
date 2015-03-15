class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.references :user, index: true
      t.references :idea, index: true
      t.integer :direction

      t.timestamps null: false
    end
    add_foreign_key :votes, :users
    add_foreign_key :votes, :ideas
  end
end
