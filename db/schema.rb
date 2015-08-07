# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150807143756) do

  create_table "authors", force: :cascade do |t|
    t.string "given"
    t.string "given_use"
    t.string "family"
    t.date   "birth"
    t.date   "death"
  end

  create_table "documents", force: :cascade do |t|
    t.text     "metadata",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "documents_authors", force: :cascade do |t|
    t.integer "documents_id"
    t.integer "authors_id"
  end

  add_index "documents_authors", ["authors_id"], name: "index_documents_authors_on_authors_id"
  add_index "documents_authors", ["documents_id"], name: "index_documents_authors_on_documents_id"

end
