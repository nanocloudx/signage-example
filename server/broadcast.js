const database = require('./database');

module.exports = async function (io) {
  let current = 0;
  let containers = await fetchContainers();

  while (true) {
    update(io, containers[current]);
    await wait(containers[current].interval);
    current++;
    if (current >= containers.length) {
      current = 0;
      containers = await fetchContainers();
    }
  }
};

function update (io, container) {
  console.log('[INFO] broadcast', container);
  io.emit('update', container);
}

function wait (interval = 1000) {
  return new Promise(resolve => {
    setTimeout(resolve, Math.max(interval, 1000)); // min 1sec~
  })
}

async function fetchContainers() {
  const { rows } = await database.query('SELECT * FROM containers');
  console.log('[INFO] update containers', rows);
  return rows;
}
