class Product < ActiveRecord::Base

  monetize :price_cents, numericality: true
  mount_uploader :image, ProductImageUploader

  belongs_to :category
  has_many :reviews, -> { order(created_at: :desc) }, dependent: :destroy

  validates :name, presence: true
  validates :price, presence: true
  validates :quantity, presence: true
  validates :category, presence: true

  # def total_num_of_ratings
  #   self.reviews.rating.count
  # end


  def average_rating
    self.reviews.average(:rating)
  end

end
