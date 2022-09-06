const canvas = document.getElementById("angrybird");
const ourWorld = boxbox.createWorld(canvas);

// creates bird
ourWorld.createEntity({
    name: "bird",
    shape: "circle",
    radius: 1,
    imageStretchToFit: true,
    density: 4,
    x: 2,
    onKeyDown: function (e) {
      this.applyImpulse(200, 60);
    },
  });

  // creates ground
  ourWorld.createEntity({
    name: "ground",
    shape: "square",
    type: "static",
    color: "rgb(0,0,0)",
    width: 20,
    height: 0.5,
    y: 12.5,
  })