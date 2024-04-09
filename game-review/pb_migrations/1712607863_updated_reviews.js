/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1imjg4pgsfglet3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kllggrro",
    "name": "rating",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 10,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1imjg4pgsfglet3")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kllggrro",
    "name": "field",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 10,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
