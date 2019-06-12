

let dbm;
let type;
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
  return db.insert('grades', [
    'global_grade',
    'accessibility',
    'condition',
    'functional',
    'user_id',
    'poi_id',
  ], [
    '2.33',
    '3',
    '2',
    '2',
    '1',
    '2',
  ])
    .then(
      function(result){
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '4',
          '5',
          '3',
          '4',
          '1',
          '3',
        ]);
      },
    )
    .then(
     function(result) {
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '2',
          '1',
          '3',
          '1',
          '4',
        ]);
      },
    )
    .then(
      function(result){
        db.insert('grades', [
          'global_grade',
          'accessibility',
          'condition',
          'functional',
          'user_id',
          'poi_id',
        ], [
          '2',
          '1',
          '2',
          '3',
          '1',
          '5',
        ]);
      },
    );
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  version: 1,
};
