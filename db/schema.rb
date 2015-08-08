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

ActiveRecord::Schema.define(version: 20150808013304) do

  create_table "anthologies", force: :cascade do |t|
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "title"
    t.text     "toc",        default: "[]"
  end

  create_table "anthologies_documents", force: :cascade do |t|
    t.integer "document_id"
    t.integer "anthology_id"
  end

  create_table "authors", force: :cascade do |t|
    t.string "given"
    t.string "given_use"
    t.string "family"
    t.date   "birth"
    t.date   "death"
  end

  create_table "citations", force: :cascade do |t|
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "container_title"
    t.date     "date"
    t.string   "volume"
    t.string   "issue"
    t.string   "publisher"
    t.string   "publisher_place"
    t.string   "page"
    t.integer  "documents_id"
    t.integer  "document_id"
  end

  add_index "citations", ["document_id"], name: "index_citations_on_document_id"

  create_table "document_files", force: :cascade do |t|
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.text     "contents"
    t.string   "file_path"
    t.boolean  "ocr"
    t.boolean  "source_scan"
    t.string   "type",        default: "md"
    t.integer  "document_id"
  end

  add_index "document_files", ["document_id"], name: "index_document_files_on_document_id"

  create_table "documents", force: :cascade do |t|
    t.text     "metadata",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "documents_authors", force: :cascade do |t|
    t.integer "document_id"
    t.integer "author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "authentication_token"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
