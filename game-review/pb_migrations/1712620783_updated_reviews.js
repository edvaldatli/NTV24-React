/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1imjg4pgsfglet3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hzj8igx6",
    "name": "reviewTitle",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1imjg4pgsfglet3")

  // remove
  collection.schema.removeField("hzj8igx6")

  return dao.saveCollection(collection)
})
