// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step1}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step2}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step3}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step4}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed potatoes are ready!</li>`;

                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises

obtainInstruction("steak", 0)
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  })
  .then(() => obtainInstruction("steak", 1))
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  })
  .then(() => obtainInstruction("steak", 2))
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  })
  .then(() => obtainInstruction("steak", 3))
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  })
  .then(() => obtainInstruction("steak", 4))
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  })
  .then(() => obtainInstruction("steak", 5))
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  })
  .then(() => obtainInstruction("steak", 6))
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
  })
  .then(() => obtainInstruction("steak", 7))
  .then((step) => {
    document.querySelector(
      "#steak"
    ).innerHTML += `<li>${step}</li><li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));

// obtainInstruction("steak", 0)
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 1);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 2);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 3);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 4);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 5);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 6);
//   })
//   .then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     return obtainInstruction("steak", 7);
//   })
//   .then((step) => {
//     document.querySelector(
//       "#steak"
//     ).innerHTML += `<li>${step}</li><li>Stake is ready!</li>`;
//     document.querySelector("#steakImg").removeAttribute("hidden");
//   })
//   .catch((error) => console.log(error));

// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${await obtainInstruction(
      "broccoli",
      6
    )}</li><li>Broccoli is ready !</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}
makeBroccoli();

// Bonus 2 - Promise all

Promise.all(
  brusselsSprouts.map((el, i) => {
    return obtainInstruction("brusselsSprouts", i);
  })
).then((values) => {
  values.forEach((value) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`;
  });
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>Brussels sprouts are ready!"</li>`;
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
