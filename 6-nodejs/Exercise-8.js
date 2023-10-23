function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));
    console.log(win);
    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const players = ["Joe", "Caroline", "Sabrina"];

const promiseChain = players.map((player) => {
  return luckyDraw(player)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });
});

Promise.all(promiseChain)
  .then(() => {
    console.log("finished all draw.");
  })
  .catch((err) => {
    console.error("error:", err);
  });
