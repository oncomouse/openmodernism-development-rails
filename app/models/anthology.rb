class Anthology < ActiveRecord::Base
	has_and_belongs_to_many :documents, join_table: :anthologies_documents
	belongs_to :user
	
	def documents
		ids = JSON.parse(self.toc)
		# Per: http://stackoverflow.com/questions/1680627/activerecord-findarray-of-ids-preserving-order
		Document.where(id: ids).index_by(&:id).values_at(*ids)
	end
end
