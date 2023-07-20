import * as fs from 'node:fs';
import ndjson from 'ndjson';

async function read(file) {
  const objects = [];
  try {
    fs.createReadStream(file)
      .pipe(ndjson.parse())
      .on('data', (obj) => {
        objects.push(obj);
      })
  } catch (e) {
    console.error(e);
  }
  return objects;
}

function buildPayload(objects) {
  return {
    mutations: objects.map((obj) => {
      return { createOrReplace: { ...obj } };
    }),
  };
}

const filename = '/home/kayaman/Projects/blogmarks/lib/scripts/tags.ndjson'
read(filename)
  .then(buildPayload)
  .then(console.log)
  .catch(e => console.error(e));