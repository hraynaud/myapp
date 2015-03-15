class OfficeSerializer < ActiveModel::Serializer
  attributes :id, :city, :name, :state, :country
end
