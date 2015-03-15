class AddCommentsCounterCacheToIdea < ActiveRecord::Migration
  def change
    add_column :ideas, :comments_count, :integer
  end
end
