class CreateOffices < ActiveRecord::Migration
  def change
    create_table :offices do |t|
      t.string :name
      t.string :city
      t.string :state
      t.string :country

      t.timestamps null: false
    end
  end
end
