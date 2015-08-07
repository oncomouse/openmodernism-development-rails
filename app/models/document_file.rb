class DocumentFile < ActiveRecord::Base
	validates_inclusion_of :type, :in => %w(md pdf markdown)
	belongs_to :document
end
