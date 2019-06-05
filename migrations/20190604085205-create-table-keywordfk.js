/* eslint-disable func-names */


let dbm;
// eslint-disable-next-line no-unused-vars
let type;
// eslint-disable-next-line no-unused-vars
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('keywordwithfk', {
    keyword1_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'keywordwithkf1_keyword_fk',
        table: 'keyword',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { keyword1_id: 'id' },
      },
    },
    keyword2_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'keywordwithfk2_keyword_fk',
        table: 'keyword',
        rules: { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
        mapping: { keyword2_id: 'id' },
      },
    },
  });
};

exports.down = function (db) {
  return db.dropTable('keywordwithfk');
};

// eslint-disable-next-line no-underscore-dangle
exports._meta = {
  version: 1,
};