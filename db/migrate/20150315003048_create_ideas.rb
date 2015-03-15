class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :title
      t.text :body
      t.references :user, index: true
      t.integer :status

      t.timestamps null: false
    end
    add_foreign_key :ideas, :users
  end
end
