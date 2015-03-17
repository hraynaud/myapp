class User < ActiveRecord::Base

  enum role: [:user, :vip, :admin]

  after_initialize :set_default_role, :if => :new_record?

	belongs_to :office

  validates_associated :office, presence: true

	has_many :comments
  has_many :votes

  def set_default_role
    self.role ||= :user
  end

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
