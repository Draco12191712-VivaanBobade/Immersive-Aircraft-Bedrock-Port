import "@minecraft/server";
import "@minecraft/server-ui";
var VER = { v: "1.1.0", n: "Clear Skies" };
var AC = {
  "biplane": {
    "cls": "airplane",
    "size": [
      1.75,
      0.85
    ],
    "zoom": 3,
    "explode": true,
    "sound": "propeller",
    "start": "engine_start",
    "reaction": 20,
    "gui": "engine",
    "adapt": true,
    "interp": 10,
    "fuelType": "fuel",
    "underwater": false,
    "dismountRot": 90,
    "props": {
      "engineSpeed": 0.0275,
      "verticalSpeed": 0.0,
      "yawSpeed": 5.0,
      "pitchSpeed": 4.0,
      "pushSpeed": 0.03,
      "brakeFactor": 0.98,
      "acceleration": 1.0,
      "durability": 1.0,
      "fireResistance": 0.0,
      "fuel": 1.25,
      "friction": 0.001,
      "glideFactor": 0.05,
      "lift": 0.15,
      "rollFactor": 45.0,
      "groundPitch": 4.0,
      "stabilizer": 0.0,
      "wind": 0.025,
      "mass": 1.0,
      "hud": -1.0,
      "dials": -1.0,
      "groundFriction": 0.85,
      "waterFriction": 0.9,
      "lavaFriction": 0.7,
      "rotationDecay": 0.97,
      "horizontalDecay": 0.995,
      "verticalDecay": 0.995
    },
    "slots": {
      "booster": [
        0
      ],
      "weapon": [
        1
      ],
      "banner": [
        2
      ],
      "upgrade": [
        3,
        4,
        5,
        6
      ],
      "boiler": [
        7
      ],
      "inventory": [
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    "invSize": 24,
    "visibleSize": 24,
    "holdSize": 0,
    "mounts": [
      {
        "ROTATING": [
          {
            "x": 0,
            "y": 0.9,
            "z": -1.1875,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": true,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "FRONT": [
          {
            "x": -1.0,
            "y": 0.3375,
            "z": 1.125,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 1.0,
            "y": 0.3375,
            "z": 1.125,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "DROP": [
          {
            "x": -1.25,
            "y": 0.3,
            "z": 1.125,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 1.25,
            "y": 0.3,
            "z": 1.125,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ]
      }
    ],
    "passengers": [
      [
        {
          "x": 0.0,
          "y": 0.375,
          "z": -0.6
        }
      ]
    ],
    "boxes": [
      {
        "width": 1.0,
        "height": 0.7,
        "x": 0.75,
        "y": 0.65,
        "z": 1.125
      },
      {
        "width": 1.0,
        "height": 0.7,
        "x": 1.5,
        "y": 0.65,
        "z": 1.125
      },
      {
        "width": 1.0,
        "height": 0.7,
        "x": 2.25,
        "y": 0.65,
        "z": 1.125
      },
      {
        "width": 1.0,
        "height": 0.7,
        "x": 3.0,
        "y": 0.65,
        "z": 1.125
      },
      {
        "width": 1.0,
        "height": 0.7,
        "x": 0.0,
        "y": 0.65,
        "z": 1.125
      },
      {
        "width": 1.0,
        "height": 0.7,
        "x": -0.75,
        "y": 0.65,
        "z": 1.125
      },
      {
        "width": 1.0,
        "height": 0.7,
        "x": -1.5,
        "y": 0.65,
        "z": 1.125
      },
      {
        "width": 1.0,
        "height": 0.7,
        "x": -2.25,
        "y": 0.65,
        "z": 1.125
      },
      {
        "width": 1.0,
        "height": 0.7,
        "x": -3.0,
        "y": 0.65,
        "z": 1.125
      },
      {
        "width": 0.8,
        "height": 0.6,
        "x": 0.0,
        "y": 0.65,
        "z": -1.0
      },
      {
        "width": 0.8,
        "height": 0.6,
        "x": 0.0,
        "y": 0.65,
        "z": -1.5
      },
      {
        "width": 0.6,
        "height": 0.5,
        "x": 0.0,
        "y": 0.65,
        "z": -2.0
      },
      {
        "width": 0.6,
        "height": 0.5,
        "x": 0.0,
        "y": 0.65,
        "z": -2.5
      },
      {
        "width": 1.2,
        "height": 0.2,
        "x": 0.0,
        "y": 0.7,
        "z": -2.6
      }
    ],
    "trails": [
      {
        "x": -3.75,
        "y": 0.25,
        "z": 0.6,
        "size": 0.15,
        "rotate": 0.0,
        "gray": 1.0,
        "length": 40
      },
      {
        "x": 3.75,
        "y": 0.25,
        "z": 0.6,
        "size": 0.15,
        "rotate": 0.0,
        "gray": 1.0,
        "length": 40
      }
    ],
    "dyeable": false
  },
  "gyrodyne": {
    "cls": "gyrodyne",
    "size": [
      1.3,
      0.6
    ],
    "zoom": 2,
    "explode": false,
    "sound": "woosh",
    "start": "woosh",
    "reaction": 20,
    "gui": "none",
    "adapt": true,
    "interp": 10,
    "fuelType": "fat",
    "underwater": false,
    "dismountRot": 90,
    "props": {
      "engineSpeed": 0.3,
      "verticalSpeed": 0.04,
      "yawSpeed": 5.0,
      "pitchSpeed": 5.0,
      "pushSpeed": 0.3,
      "brakeFactor": 0.95,
      "acceleration": 1.0,
      "durability": 1.0,
      "fireResistance": 0.0,
      "fuel": 1.0,
      "friction": 0.015,
      "glideFactor": 0.0,
      "lift": 0.1,
      "rollFactor": 30.0,
      "groundPitch": 0.0,
      "stabilizer": 0.3,
      "wind": 0.05,
      "mass": 4.0,
      "hud": -1.0,
      "dials": -1.0,
      "groundFriction": 0.8,
      "waterFriction": 0.9,
      "lavaFriction": 0.7,
      "rotationDecay": 0.97,
      "horizontalDecay": 0.925,
      "verticalDecay": 0.9
    },
    "slots": {
      "weapon": [
        0
      ],
      "upgrade": [
        1,
        2,
        3
      ],
      "inventory": [
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21
      ]
    },
    "invSize": 22,
    "visibleSize": 22,
    "holdSize": 0,
    "mounts": [
      {
        "ROTATING": [
          {
            "x": 0,
            "y": 0.075,
            "z": -1.0,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "FRONT": [
          {
            "x": 0,
            "y": 0.2,
            "z": 1.375,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "DROP": [
          {
            "x": -1.0,
            "y": 0.23125,
            "z": 0.0625,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 1.0,
            "y": 0.23125,
            "z": 0.0625,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ]
      }
    ],
    "passengers": [
      [
        {
          "x": 0.0,
          "y": 0.125,
          "z": 0.275
        }
      ],
      [
        {
          "x": 0.0,
          "y": 0.125,
          "z": 0.3
        },
        {
          "x": 0.0,
          "y": 0.125,
          "z": -0.6
        }
      ]
    ],
    "boxes": [
      {
        "width": 1.0,
        "height": 0.1,
        "x": 1.0,
        "y": 0.25,
        "z": 0.125
      },
      {
        "width": 1.0,
        "height": 0.1,
        "x": 1.85,
        "y": 0.25,
        "z": 0.125
      },
      {
        "width": 1.0,
        "height": 0.1,
        "x": 0.0,
        "y": 0.25,
        "z": 0.125
      },
      {
        "width": 1.0,
        "height": 0.1,
        "x": -1.0,
        "y": 0.25,
        "z": 0.125
      },
      {
        "width": 1.0,
        "height": 0.1,
        "x": -1.85,
        "y": 0.25,
        "z": 0.125
      },
      {
        "width": 0.8,
        "height": 0.4,
        "x": 0.0,
        "y": 0.2,
        "z": 1.1
      },
      {
        "width": 0.4,
        "height": 0.3,
        "x": 0.0,
        "y": 0.15,
        "z": 1.6
      },
      {
        "width": 0.4,
        "height": 0.3,
        "x": 0.0,
        "y": 0.15,
        "z": 2.1
      }
    ],
    "trails": [],
    "dyeable": false
  },
  "airship": {
    "cls": "airship",
    "size": [
      1.5,
      3.0
    ],
    "zoom": 5,
    "explode": true,
    "sound": "propeller_small",
    "start": "engine_start",
    "reaction": 50,
    "gui": "engine",
    "adapt": true,
    "interp": 10,
    "fuelType": "fuel",
    "underwater": false,
    "dismountRot": 90,
    "props": {
      "engineSpeed": 0.02,
      "verticalSpeed": 0.025,
      "yawSpeed": 5.0,
      "pitchSpeed": 0.0,
      "pushSpeed": 0.0,
      "brakeFactor": 0.95,
      "acceleration": 1.0,
      "durability": 1.0,
      "fireResistance": 0.0,
      "fuel": 1.0,
      "friction": 0.015,
      "glideFactor": 0.0,
      "lift": 0.1,
      "rollFactor": 5.0,
      "groundPitch": 0.0,
      "stabilizer": 0.1,
      "wind": 0.05,
      "mass": 3.0,
      "hud": -1.0,
      "dials": -1.0,
      "groundFriction": 0.5,
      "waterFriction": 0.9,
      "lavaFriction": 0.7,
      "rotationDecay": 0.97,
      "horizontalDecay": 0.97,
      "verticalDecay": 0.925
    },
    "slots": {
      "weapon": [
        0
      ],
      "upgrade": [
        1,
        2,
        3
      ],
      "banner": [
        4
      ],
      "dye": [
        5
      ],
      "boiler": [
        6
      ],
      "inventory": [
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22
      ]
    },
    "invSize": 23,
    "visibleSize": 23,
    "holdSize": 0,
    "mounts": [
      {
        "ROTATING": [
          {
            "x": 0,
            "y": 0.3875,
            "z": 1.001,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "FRONT": [
          {
            "x": -0.5,
            "y": 0.375,
            "z": 0.0,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 90,
            "blocking": false,
            "matrix": [
              [
                0.0,
                -1.0,
                0.0
              ],
              [
                1.0,
                0.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 0.5,
            "y": 0.375,
            "z": 0.0,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": -90,
            "blocking": false,
            "matrix": [
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -1.0,
                0.0,
                -0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "DROP": [
          {
            "x": -0.5,
            "y": 0.375,
            "z": 0.0,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": -90,
            "blocking": false,
            "matrix": [
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -1.0,
                0.0,
                -0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 0.5,
            "y": 0.375,
            "z": 0.0,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 90,
            "blocking": false,
            "matrix": [
              [
                0.0,
                -1.0,
                0.0
              ],
              [
                1.0,
                0.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ]
      }
    ],
    "passengers": [
      [
        {
          "x": 0.0,
          "y": 0.125,
          "z": 0.0
        }
      ],
      [
        {
          "x": 0.0,
          "y": 0.125,
          "z": 0.3
        },
        {
          "x": 0.0,
          "y": 0.125,
          "z": -0.3
        }
      ]
    ],
    "boxes": [],
    "trails": [
      {
        "x": 0.0,
        "y": 0.4,
        "z": -1.2,
        "size": 0.15,
        "rotate": 50.0,
        "gray": 0.5,
        "length": 15
      }
    ],
    "dyeable": true
  },
  "cargo_airship": {
    "cls": "airship",
    "size": [
      1.75,
      3.0
    ],
    "zoom": 5,
    "explode": true,
    "sound": "propeller_small",
    "start": "engine_start",
    "reaction": 50,
    "gui": "engine",
    "adapt": true,
    "interp": 10,
    "fuelType": "fuel",
    "underwater": false,
    "dismountRot": 90,
    "props": {
      "engineSpeed": 0.0175,
      "verticalSpeed": 0.02,
      "yawSpeed": 5.0,
      "pitchSpeed": 0.0,
      "pushSpeed": 0.0,
      "brakeFactor": 0.95,
      "acceleration": 1.0,
      "durability": 1.0,
      "fireResistance": 0.0,
      "fuel": 1.25,
      "friction": 0.015,
      "glideFactor": 0.0,
      "lift": 0.1,
      "rollFactor": 5.0,
      "groundPitch": 0.0,
      "stabilizer": 0.1,
      "wind": 0.05,
      "mass": 8.0,
      "hud": -1.0,
      "dials": -1.0,
      "groundFriction": 0.95,
      "waterFriction": 0.9,
      "lavaFriction": 0.7,
      "rotationDecay": 0.97,
      "horizontalDecay": 0.97,
      "verticalDecay": 0.97
    },
    "slots": {
      "upgrade": [
        0,
        1,
        2,
        3
      ],
      "banner": [
        4
      ],
      "dye": [
        5
      ],
      "boiler": [
        6
      ],
      "inventory": [
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        82,
        83,
        84,
        85,
        86
      ]
    },
    "invSize": 87,
    "visibleSize": 87,
    "holdSize": 0,
    "mounts": [],
    "passengers": [
      [
        {
          "x": 0.0,
          "y": 0.1875,
          "z": 0.0
        }
      ],
      [
        {
          "x": 0.0,
          "y": 0.1875,
          "z": 0.3
        },
        {
          "x": 0.0,
          "y": 0.1875,
          "z": -0.3
        }
      ]
    ],
    "boxes": [],
    "trails": [
      {
        "x": 0.0,
        "y": 0.45,
        "z": -1.2,
        "size": 0.15,
        "rotate": 50.0,
        "gray": 0.5,
        "length": 15
      },
      {
        "x": 1.15625,
        "y": 2.65,
        "z": -1.2,
        "size": 0.125,
        "rotate": 65.0,
        "gray": 0.5,
        "length": 10
      },
      {
        "x": -1.15625,
        "y": 2.65,
        "z": -1.2,
        "size": 0.125,
        "rotate": 65.0,
        "gray": 0.5,
        "length": 10
      }
    ],
    "dyeable": true
  },
  "warship": {
    "cls": "warship",
    "size": [
      5.0,
      6.5
    ],
    "zoom": 5,
    "explode": true,
    "sound": "warship",
    "start": "engine_start_warship",
    "reaction": 100,
    "gui": "engine",
    "adapt": true,
    "interp": 10,
    "fuelType": "fuel",
    "underwater": false,
    "dismountRot": 90,
    "props": {
      "engineSpeed": 0.035,
      "verticalSpeed": 0.025,
      "yawSpeed": 2.5,
      "pitchSpeed": 0.0,
      "pushSpeed": 0.0,
      "brakeFactor": 0.95,
      "acceleration": 1.0,
      "durability": 3.0,
      "fireResistance": 0.0,
      "fuel": 0.8,
      "friction": 0.015,
      "glideFactor": 0.0,
      "lift": 0.1,
      "rollFactor": 3.0,
      "groundPitch": 0.0,
      "stabilizer": 0.1,
      "wind": 0.01,
      "mass": 10.0,
      "hud": -1.0,
      "dials": -1.0,
      "groundFriction": 0.5,
      "waterFriction": 0.9,
      "lavaFriction": 0.7,
      "rotationDecay": 0.97,
      "horizontalDecay": 0.97,
      "verticalDecay": 0.925
    },
    "slots": {
      "upgrade": [
        0,
        1,
        2,
        5,
        6,
        7
      ],
      "weapon": [
        3,
        8
      ],
      "dye": [
        4
      ],
      "booster": [
        9
      ],
      "boiler": [
        10,
        11,
        12
      ],
      "inventory": [
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        75,
        76,
        77,
        78
      ]
    },
    "invSize": 79,
    "visibleSize": 79,
    "holdSize": 0,
    "mounts": [
      {
        "ROTATING": [
          {
            "x": -3.875,
            "y": 4.625,
            "z": 1.825,
            "yaw": 90,
            "pitch": -90,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                0.0,
                -1.0,
                0.0
              ],
              [
                0.0,
                0.0,
                1.0
              ],
              [
                -1.0,
                -0.0,
                0.0
              ]
            ]
          },
          {
            "x": 3.875,
            "y": 4.625,
            "z": 1.825,
            "yaw": -90,
            "pitch": -90,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                0.0,
                1.0,
                -0.0
              ],
              [
                0.0,
                0.0,
                1.0
              ],
              [
                1.0,
                -0.0,
                0.0
              ]
            ]
          },
          {
            "x": -3.875,
            "y": 4.625,
            "z": -1.825,
            "yaw": 90,
            "pitch": -90,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                0.0,
                -1.0,
                0.0
              ],
              [
                0.0,
                0.0,
                1.0
              ],
              [
                -1.0,
                -0.0,
                0.0
              ]
            ]
          },
          {
            "x": 3.875,
            "y": 4.625,
            "z": -1.825,
            "yaw": -90,
            "pitch": -90,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                0.0,
                1.0,
                -0.0
              ],
              [
                0.0,
                0.0,
                1.0
              ],
              [
                1.0,
                -0.0,
                0.0
              ]
            ]
          }
        ],
        "FRONT": [
          {
            "x": -3.875,
            "y": 4.625,
            "z": 1.825,
            "yaw": 0.0,
            "pitch": 0,
            "roll": 90,
            "blocking": false,
            "matrix": [
              [
                0.0,
                -1.0,
                0.0
              ],
              [
                1.0,
                0.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 3.875,
            "y": 4.625,
            "z": 1.825,
            "yaw": 0.0,
            "pitch": 0,
            "roll": -90,
            "blocking": false,
            "matrix": [
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -1.0,
                0.0,
                -0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": -3.875,
            "y": 4.625,
            "z": -1.825,
            "yaw": 0.0,
            "pitch": 0,
            "roll": 90,
            "blocking": false,
            "matrix": [
              [
                0.0,
                -1.0,
                0.0
              ],
              [
                1.0,
                0.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 3.875,
            "y": 4.625,
            "z": -1.825,
            "yaw": 0.0,
            "pitch": 0,
            "roll": -90,
            "blocking": false,
            "matrix": [
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -1.0,
                0.0,
                -0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "DROP": [
          {
            "x": -3.875,
            "y": 4.625,
            "z": 1.825,
            "yaw": 90,
            "pitch": 90,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                0.0,
                1.0,
                0.0
              ],
              [
                0.0,
                0.0,
                -1.0
              ],
              [
                -1.0,
                0.0,
                0.0
              ]
            ]
          },
          {
            "x": 3.875,
            "y": 4.625,
            "z": 1.825,
            "yaw": -90,
            "pitch": 90,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                0.0,
                -1.0,
                -0.0
              ],
              [
                0.0,
                0.0,
                -1.0
              ],
              [
                1.0,
                0.0,
                0.0
              ]
            ]
          },
          {
            "x": -3.875,
            "y": 4.625,
            "z": -1.825,
            "yaw": 90,
            "pitch": 90,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                0.0,
                1.0,
                0.0
              ],
              [
                0.0,
                0.0,
                -1.0
              ],
              [
                -1.0,
                0.0,
                0.0
              ]
            ]
          },
          {
            "x": 3.875,
            "y": 4.625,
            "z": -1.825,
            "yaw": -90,
            "pitch": 90,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                0.0,
                -1.0,
                -0.0
              ],
              [
                0.0,
                0.0,
                -1.0
              ],
              [
                1.0,
                0.0,
                0.0
              ]
            ]
          }
        ]
      },
      {
        "ROTATING": [
          {
            "x": -2.375,
            "y": 4.625,
            "z": 4.625,
            "yaw": 0,
            "pitch": 90,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                0.0,
                -1.0
              ],
              [
                -0.0,
                1.0,
                0.0
              ]
            ]
          },
          {
            "x": 2.375,
            "y": 4.625,
            "z": 4.625,
            "yaw": 0,
            "pitch": 90,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                0.0,
                -1.0
              ],
              [
                -0.0,
                1.0,
                0.0
              ]
            ]
          }
        ],
        "FRONT": [
          {
            "x": -2.375,
            "y": 4.875,
            "z": 4.375,
            "yaw": 0,
            "pitch": 0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 2.375,
            "y": 4.875,
            "z": 4.375,
            "yaw": 0,
            "pitch": 0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "DROP": [
          {
            "x": -2.375,
            "y": 4.25,
            "z": 4.25,
            "yaw": 0,
            "pitch": 0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 2.375,
            "y": 4.25,
            "z": 4.25,
            "yaw": 0,
            "pitch": 0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ]
      }
    ],
    "passengers": [
      [
        {
          "x": 0.0,
          "y": 0.8125,
          "z": 0.6
        }
      ],
      [
        {
          "x": 0.0,
          "y": 0.8125,
          "z": 0.6
        },
        {
          "x": 0.0,
          "y": 0.0,
          "z": 0.0
        }
      ],
      [
        {
          "x": 0.0,
          "y": 0.8125,
          "z": 0.6
        },
        {
          "x": 0.0,
          "y": 0.0,
          "z": 0.0
        },
        {
          "x": 0.0,
          "y": 0.8125,
          "z": -0.3
        }
      ],
      [
        {
          "x": 0.0,
          "y": 0.8125,
          "z": 0.6
        },
        {
          "x": 0.0,
          "y": 0.0,
          "z": 0.0
        },
        {
          "x": 0.3,
          "y": 0.8125,
          "z": -0.25
        },
        {
          "x": -0.3,
          "y": 0.8125,
          "z": -0.35
        }
      ]
    ],
    "boxes": [],
    "trails": [
      {
        "x": 0.0,
        "y": 1.4,
        "z": -2.5,
        "size": 0.25,
        "rotate": 40.0,
        "gray": 0.25,
        "length": 15
      },
      {
        "x": 2.5,
        "y": 4.6,
        "z": -5.5,
        "size": 0.25,
        "rotate": 40.0,
        "gray": 0.25,
        "length": 14
      },
      {
        "x": 0.0,
        "y": 4.6,
        "z": -5.5,
        "size": 0.25,
        "rotate": 40.0,
        "gray": 0.25,
        "length": 16
      },
      {
        "x": -2.5,
        "y": 4.6,
        "z": -5.5,
        "size": 0.25,
        "rotate": 40.0,
        "gray": 0.25,
        "length": 14
      }
    ],
    "dyeable": true
  },
  "quadrocopter": {
    "cls": "quadrocopter",
    "size": [
      1.5,
      0.5
    ],
    "zoom": 0,
    "explode": true,
    "sound": "propeller_tiny",
    "start": "engine_start",
    "reaction": 20,
    "gui": "engine",
    "adapt": false,
    "interp": 5,
    "fuelType": "fuel",
    "underwater": false,
    "dismountRot": 90,
    "props": {
      "engineSpeed": 0.0325,
      "verticalSpeed": 0.0325,
      "yawSpeed": 0.15,
      "pitchSpeed": 1.5,
      "pushSpeed": 0.0,
      "brakeFactor": 0.95,
      "acceleration": 1.0,
      "durability": 1.0,
      "fireResistance": 0.0,
      "fuel": 0.5,
      "friction": 0.015,
      "glideFactor": 0.0,
      "lift": 0.1,
      "rollFactor": 15.0,
      "groundPitch": 0.0,
      "stabilizer": 0.1,
      "wind": 0.0125,
      "mass": 1.0,
      "hud": -1.0,
      "dials": -1.0,
      "groundFriction": 0.25,
      "waterFriction": 0.9,
      "lavaFriction": 0.7,
      "rotationDecay": 0.97,
      "horizontalDecay": 0.9,
      "verticalDecay": 0.8
    },
    "slots": {
      "boiler": [
        0
      ],
      "weapon": [
        1
      ],
      "upgrade": [
        2
      ],
      "inventory": [
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    "invSize": 9,
    "visibleSize": 9,
    "holdSize": 0,
    "mounts": [
      {
        "ROTATING": [
          {
            "x": 0,
            "y": 0.875,
            "z": -0.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": true,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "FRONT": [
          {
            "x": 0,
            "y": 0.375,
            "z": 1.0,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "DROP": [
          {
            "x": 0,
            "y": 0.375,
            "z": 0,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ]
      }
    ],
    "passengers": [
      [
        {
          "x": 0.0,
          "y": 0.5,
          "z": -0.1
        }
      ]
    ],
    "boxes": [],
    "trails": [],
    "dyeable": false
  },
  "bamboo_hopper": {
    "cls": "airplane",
    "size": [
      3.0,
      1.5
    ],
    "zoom": 6,
    "explode": true,
    "sound": "propeller_bamboo_hopper",
    "start": "engine_start_bamboo_hopper",
    "reaction": 20,
    "gui": "engine",
    "adapt": true,
    "interp": 10,
    "fuelType": "fuel",
    "underwater": true,
    "dismountRot": 0,
    "props": {
      "engineSpeed": 0.025,
      "verticalSpeed": 0.0,
      "yawSpeed": 3.5,
      "pitchSpeed": 3.5,
      "pushSpeed": 0.02,
      "brakeFactor": 0.96,
      "acceleration": 0.8,
      "durability": 1.0,
      "fireResistance": 0.0,
      "fuel": 1.5,
      "friction": 0.001,
      "glideFactor": 0.075,
      "lift": 0.18,
      "rollFactor": 30.0,
      "groundPitch": 1.0,
      "stabilizer": 0.0,
      "wind": 0.04,
      "mass": 2.0,
      "hud": -1.0,
      "dials": -1.0,
      "groundFriction": 0.85,
      "waterFriction": 0.9,
      "lavaFriction": 0.7,
      "rotationDecay": 0.97,
      "horizontalDecay": 0.99,
      "verticalDecay": 0.985
    },
    "slots": {
      "boiler": [
        0
      ],
      "booster": [
        1
      ],
      "weapon": [
        2,
        3
      ],
      "upgrade": [
        4,
        5,
        6,
        7
      ],
      "inventory": [
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    "invSize": 24,
    "visibleSize": 24,
    "holdSize": 0,
    "mounts": [
      {
        "ROTATING": [
          {
            "x": 3.4375,
            "y": 2.0625,
            "z": 0.75,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": -3.4375,
            "y": 2.0625,
            "z": 0.75,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "FRONT": [
          {
            "x": -2.0,
            "y": 1.5,
            "z": 1.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 180.0,
            "blocking": false,
            "matrix": [
              [
                -1.0,
                -0.0,
                0.0
              ],
              [
                0.0,
                -1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 2.0,
            "y": 1.5,
            "z": 1.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 180.0,
            "blocking": false,
            "matrix": [
              [
                -1.0,
                -0.0,
                0.0
              ],
              [
                0.0,
                -1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "DROP": [
          {
            "x": -2.0,
            "y": 1.5,
            "z": 1.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 2.0,
            "y": 1.5,
            "z": 1.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ]
      },
      {
        "ROTATING": [
          {
            "x": 3.4375,
            "y": 1.9375,
            "z": -1.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": -3.4375,
            "y": 1.9375,
            "z": -1.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "FRONT": [
          {
            "x": -5.0,
            "y": 1.5,
            "z": 1.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 180.0,
            "blocking": false,
            "matrix": [
              [
                -1.0,
                -0.0,
                0.0
              ],
              [
                0.0,
                -1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 5.0,
            "y": 1.5,
            "z": 1.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 180.0,
            "blocking": false,
            "matrix": [
              [
                -1.0,
                -0.0,
                0.0
              ],
              [
                0.0,
                -1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ],
        "DROP": [
          {
            "x": -5.0,
            "y": 1.5,
            "z": 1.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          },
          {
            "x": 5.0,
            "y": 1.5,
            "z": 1.5,
            "yaw": 0.0,
            "pitch": 0.0,
            "roll": 0.0,
            "blocking": false,
            "matrix": [
              [
                1.0,
                0.0,
                0.0
              ],
              [
                0.0,
                1.0,
                0.0
              ],
              [
                -0.0,
                0.0,
                1.0
              ]
            ]
          }
        ]
      }
    ],
    "passengers": [
      [
        {
          "x": 0.0,
          "y": 0.625,
          "z": 0.9375
        }
      ],
      [
        {
          "x": 0.0,
          "y": 0.625,
          "z": 0.9375
        },
        {
          "x": 0.4375,
          "y": 0.625,
          "z": -0.25
        }
      ],
      [
        {
          "x": 0.0,
          "y": 0.625,
          "z": 0.9375
        },
        {
          "x": 0.4375,
          "y": 0.625,
          "z": -0.25
        },
        {
          "x": -0.4375,
          "y": 0.625,
          "z": -0.25
        }
      ]
    ],
    "boxes": [
      {
        "width": 1.1,
        "height": 1.0,
        "x": 0.0,
        "y": 0.0,
        "z": 2.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": 1.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": 2.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": 3.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": 4.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": 5.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": 6.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": -1.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": -2.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": -3.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": -4.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": -5.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 1.1,
        "height": 0.375,
        "x": -6.0,
        "y": 1.65,
        "z": 1.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": -3.5,
        "y": 1.65,
        "z": 0.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": -3.5,
        "y": 1.65,
        "z": -1.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": -3.5,
        "y": 1.65,
        "z": -2.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": -3.5,
        "y": 1.65,
        "z": -3.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": -3.5,
        "y": 1.65,
        "z": -4.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": -3.5,
        "y": 1.65,
        "z": -5.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": -3.5,
        "y": 1.65,
        "z": -6.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": 3.5,
        "y": 1.65,
        "z": 0.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": 3.5,
        "y": 1.65,
        "z": -1.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": 3.5,
        "y": 1.65,
        "z": -2.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": 3.5,
        "y": 1.65,
        "z": -3.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": 3.5,
        "y": 1.65,
        "z": -4.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": 3.5,
        "y": 1.65,
        "z": -5.0
      },
      {
        "width": 0.8,
        "height": 0.8,
        "x": 3.5,
        "y": 1.65,
        "z": -6.0
      }
    ],
    "trails": [
      {
        "x": 0.0,
        "y": 0.75,
        "z": -2.25,
        "size": 0.5,
        "gray": 1.0,
        "length": 20,
        "rotate": 48.0
      }
    ],
    "dyeable": false
  }
};
var UPG = {
  "ia:eco_engine": { engineSpeed: -0.2, fuel: -0.75 },
  "ia:enhanced_propeller": { engineSpeed: 0.05, friction: -0.75 },
  "ia:gyroscope": { wind: -1.0, stabilizer: 0.03 },
  "ia:gyroscope_dials": { wind: -1.0, stabilizer: 0.03, dials: -1.0 },
  "ia:gyroscope_hud": { wind: -1.0, stabilizer: 0.03, hud: -1.0 },
  "ia:hull_reinforcement": { durability: 1.0 },
  "ia:improved_landing_gear": { acceleration: 0.75 },
  "ia:industrial_gears": { fuel: -0.2 },
  "ia:nether_engine": { engineSpeed: 0.3, fuel: 0.3 },
  "ia:steel_boiler": { engineSpeed: 0.2, fuel: 0.5 },
  "ia:sturdy_pipes": { engineSpeed: 0.08 },
};
var SPOS = {
  engineSpeed: true,
  verticalSpeed: true,
  yawSpeed: true,
  pitchSpeed: true,
  pushSpeed: true,
  brakeFactor: true,
  acceleration: true,
  durability: true,
  fireResistance: true,
  fuel: false,
  friction: false,
  glideFactor: true,
  lift: true,
  rollFactor: true,
  groundPitch: true,
  stabilizer: true,
  wind: false,
  mass: false,
  hud: false,
  dials: false,
  groundFriction: false,
  waterFriction: false,
  lavaFriction: false,
  rotationDecay: false,
  horizontalDecay: false,
  verticalDecay: false,
};
var WPI = {
  "ia:rotary_cannon": { mount: "ROTATING", id: 1 },
  "ia:telescope": { mount: "ROTATING", id: 3 },
  "ia:heavy_crossbow": { mount: "FRONT", id: 2 },
  "ia:bomb_bay": { mount: "DROP", id: 4 },
};
var CFD = {
  "speedMultiplier": 1.6,
  "liftAssist": 1.8,
  "enableDropsForNonPlayer": true,
  "enableCrashExplosion": true,
  "enableCrashBlockDestruction": false,
  "enableCrashFire": false,
  "crashExplosionRadius": 2.0,
  "crashDamage": 2.0,
  "preventKillThroughCrash": true,
  "damagePerHealthPoint": 30,
  "useThirdPersonByDefault": false,
  "enableTrails": true,
  "fuelConsumption": 1.0,
  "windClearWeather": 1.0,
  "windRainWeather": 3.0,
  "windThunderWeather": 3.0,
  "repairSpeed": 0.025,
  "repairExhaustion": 0.5,
  "collisionDamage": true,
  "collisionDamageMultiplier": 40.0,
  "burnFuelInCreative": false,
  "acceptVanillaFuel": true,
  "showHotbarEngineGauge": true,
  "weaponsAreDestructive": false,
  "dropAircraft": true,
  "dropInventory": true,
  "dropUpgrades": false,
  "regenerateHealthEveryNTicks": 0,
  "requireShiftForRepair": false,
  "defaultCanEnter": true,
  "rotaryCannonDamage": 5.0,
  "heavyCrossBowVelocity": 3.0,
  "fuelList": {
    "minecraft:blaze_powder": 1200
  },
  "validDimensions": {
    "minecraft:overworld": true,
    "minecraft:nether": true,
    "minecraft:the_end": true
  },
  "gunpowderAmmunition": {
    "minecraft:gunpowder": 100
  },
  "arrowAmmunition": {
    "minecraft:arrow": 100
  },
  "bombBayAmmunition": {
    "minecraft:tnt": 100
  },
  "bombBayEntity": {
    "minecraft:egg": "minecraft:chicken"
  },
  "canEnter": {
    "minecraft:player": false,
    "#water_animals": false
  }
};
var M = new Map(),
  L = new Set(),
  T = 0,
  BU = [],
  TN = [],
  PP = {},
  cc = null,
  WX = {};
var DC = {
  white: 16383998,
  orange: 16351261,
  magenta: 13061821,
  light_blue: 3847130,
  yellow: 16701501,
  lime: 8439583,
  pink: 15961002,
  gray: 4673362,
  light_gray: 10329495,
  cyan: 1481884,
  purple: 8991416,
  blue: 3949738,
  brown: 8606770,
  green: 6192150,
  red: 11546150,
  black: 1908001,
};
var SEA = {
  "minecraft:overworld": 63,
  "minecraft:nether": 32,
  "minecraft:the_end": 0,
};
var CD = {
  "ia:rotary_cannon": "rc",
  "ia:telescope": "ts",
  "ia:heavy_crossbow": "hc",
  "ia:bomb_bay": "bb",
};
var WAN = [
  "minecraft:cod",
  "minecraft:dolphin",
  "minecraft:glow_squid",
  "minecraft:pufferfish",
  "minecraft:salmon",
  "minecraft:squid",
  "minecraft:tadpole",
  "minecraft:tropicalfish",
];
var FIR = ["fire", "fireTick", "lava", "campfire", "soulCampfire", "magma"];
var FZ = {
  lava_bucket: 20000,
  coal_block: 16000,
  dried_kelp_block: 4001,
  blaze_rod: 2400,
  coal: 1600,
  charcoal: 1600,
  scaffolding: 50,
  bamboo: 50,
  stick: 100,
  bowl: 100,
  deadbush: 100,
  dead_bush: 100,
  azalea: 100,
  flowering_azalea: 100,
  crossbow: 300,
  bow: 300,
  fishing_rod: 300,
  ladder: 300,
  noteblock: 300,
  bookshelf: 300,
  chiseled_bookshelf: 300,
  lectern: 300,
  jukebox: 300,
  chest: 300,
  trapped_chest: 300,
  crafting_table: 300,
  daylight_detector: 300,
  daylight_detector_inverted: 300,
  loom: 300,
  barrel: 300,
  cartography_table: 300,
  fletching_table: 300,
  smithing_table: 300,
  composter: 300,
  mangrove_roots: 300,
  bamboo_mosaic: 300,
  bamboo_block: 300,
  stripped_bamboo_block: 300,
  wooden_shovel: 200,
  wooden_sword: 200,
  wooden_hoe: 200,
  wooden_axe: 200,
  wooden_pickaxe: 200,
  banner: 300,
  wool: 100,
  carpet: 67,
  sapling: 100,
  wooden_door: 200,
  trapdoor: 300,
  fence_gate: 300,
  wooden_pressure_plate: 300,
  wooden_button: 100,
  wooden_slab: 150,
  planks: 300,
  log: 300,
  log2: 300,
  fence: 300,
  boat: 1200,
  chest_boat: 1200,
};
var WD = /(oak|spruce|birch|jungle|acacia|mangrove|cherry|bamboo|pale_oak)/;
var PSB =
  /(air|grass|fern|flower|torch|sapling|mushroom|vine|button|lever|rail|sign|banner|dead_bush|deadbush|seagrass|kelp|sugar_cane|reeds|wheat|carrots|potatoes|beetroot|nether_wart|sweet_berry|redstone_wire|tripwire|pressure_plate|web|light_block|structure_void|snow_layer|bush|poppy|dandelion|tulip|orchid|allium|bluet|daisy|cornflower|lily_of_the_valley|wither_rose|azure|petals|lichen|moss_carpet|roots|sprouts|fungus|coral_fan|hanging_roots|spore|eyeblossom|leaf_litter|cactus_flower)/;
var CB = [
  "enableCrashExplosion",
  "enableCrashBlockDestruction",
  "enableCrashFire",
  "preventKillThroughCrash",
  "enableDropsForNonPlayer",
  "enableTrails",
  "useThirdPersonByDefault",
  "collisionDamage",
  "burnFuelInCreative",
  "acceptVanillaFuel",
  "showHotbarEngineGauge",
  "weaponsAreDestructive",
  "dropAircraft",
  "dropInventory",
  "dropUpgrades",
  "requireShiftForRepair",
  "defaultCanEnter",
];
var CN = [
  "speedMultiplier",
  "liftAssist",
  "crashExplosionRadius",
  "crashDamage",
  "damagePerHealthPoint",
  "fuelConsumption",
  "windClearWeather",
  "windRainWeather",
  "windThunderWeather",
  "repairSpeed",
  "repairExhaustion",
  "collisionDamageMultiplier",
  "regenerateHealthEveryNTicks",
  "rotaryCannonDamage",
  "heavyCrossBowVelocity",
];
var CJ = [
  "fuelList",
  "validDimensions",
  "gunpowderAmmunition",
  "arrowAmmunition",
  "bombBayAmmunition",
  "bombBayEntity",
  "canEnter",
];
var OPT = [
  "speedMultiplier",
  "liftAssist",
  "useThirdPersonByDefault",
  "enableTrails",
  "fuelConsumption",
  "windClearWeather",
  "windRainWeather",
  "windThunderWeather",
  "repairSpeed",
  "repairExhaustion",
  "collisionDamage",
  "burnFuelInCreative",
  "acceptVanillaFuel",
  "showHotbarEngineGauge",
  "enableCrashExplosion",
  "enableCrashBlockDestruction",
  "enableCrashFire",
  "crashExplosionRadius",
  "crashDamage",
  "preventKillThroughCrash",
  "damagePerHealthPoint",
  "weaponsAreDestructive",
  "dropInventory",
  "dropUpgrades",
  "regenerateHealthEveryNTicks",
  "requireShiftForRepair",
  "defaultCanEnter",
];

function gps() {
  var ps = {},
    o = {};
  try {
    ps = w.getPackSettings() || {};
  } catch (e) {
    ps = {};
  }
  for (var k in ps)
    if (k.indexOf("ia:") == 0 && CFD[k.slice(3)] !== undefined && typeof ps[k] == typeof CFD[k.slice(3)])
      o[k.slice(3)] = ps[k];
  return Object.assign({}, CFD, o);
}
function gov() {
  var x = w.getDynamicProperty("ia:cfg");
  if (typeof x == "string") {
    try {
      return JSON.parse(x);
    } catch (e) { }
  }
  return {};
}
function gc() {
  if (cc) return cc;
  cc = Object.assign(gps(), gov());
  return cc;
}
function v3(x, y, z) {
  return { x: x, y: y, z: z };
}
function ln(a) {
  return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z);
}
function nm(a) {
  var l = ln(a);
  return l > 1e-9 ? v3(a.x / l, a.y / l, a.z / l) : v3(0, 0, 0);
}
function dt(a, b) {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}
function ad(a, b) {
  return v3(a.x + b.x, a.y + b.y, a.z + b.z);
}
function sc(a, k) {
  return v3(a.x * k, a.y * k, a.z * k);
}
function wr(a) {
  a = a % 360;
  if (a >= 180) a -= 360;
  if (a < -180) a += 360;
  return a;
}
function cl(v, a, b) {
  return v < a ? a : v > b ? b : v;
}
function rd(d) {
  return (d * Math.PI) / 180;
}
function mY(t) {
  var c = Math.cos(t),
    s = Math.sin(t);
  return [
    [c, 0, s],
    [0, 1, 0],
    [-s, 0, c],
  ];
}
function mX(t) {
  var c = Math.cos(t),
    s = Math.sin(t);
  return [
    [1, 0, 0],
    [0, c, -s],
    [0, s, c],
  ];
}
function mZ(t) {
  var c = Math.cos(t),
    s = Math.sin(t);
  return [
    [c, -s, 0],
    [s, c, 0],
    [0, 0, 1],
  ];
}
function mm(a, b) {
  var r = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (var i = 0; i < 3; i++)
    for (var j = 0; j < 3; j++)
      for (var k = 0; k < 3; k++) r[i][j] += a[i][k] * b[k][j];
  return r;
}
function mv(m, v) {
  return v3(
    m[0][0] * v.x + m[0][1] * v.y + m[0][2] * v.z,
    m[1][0] * v.x + m[1][1] * v.y + m[1][2] * v.z,
    m[2][0] * v.x + m[2][1] * v.y + m[2][2] * v.z,
  );
}
function tp(m) {
  return [
    [m[0][0], m[1][0], m[2][0]],
    [m[0][1], m[1][1], m[2][1]],
    [m[0][2], m[1][2], m[2][2]],
  ];
}
function cnz(t) {
  var r = 0;
  for (var i = 0; i < 5; i++) {
    r += Math.cos(t);
    t *= 1.3;
  }
  return r;
}
function mkI(n) {
  return { v: 0, l: 0, s: 0, ls: 0, st: 1 / n };
}
function uI(o, n) {
  o.l = o.v;
  o.v = n;
  o.ls = o.s;
  dI(o, n, o.st);
}
function dI(o, t, d) {
  o.s = o.s * (1 - d) + t * d;
}
function dp(e, k, d) {
  var v = e.getDynamicProperty(k);
  return v === undefined ? d : v;
}
function inv(e) {
  var c = e.getComponent("minecraft:inventory");
  return c ? c.container : undefined;
}
function rdr(e) {
  var r = e.getComponent("minecraft:rideable");
  return r ? r.getRiders() : [];
}
function isP(x) {
  return !!x && x.typeId == "minecraft:player";
}
function isA(e) {
  return !!e && e.typeId.startsWith("ia:") && !!AC[e.typeId.slice(3)];
}
function pcr(e) {
  var p = rdr(e)[0];
  return isP(p) && p.getGameMode() == GameMode.Creative;
}
function pst(p) {
  var q = PP[p.id];
  if (!q) {
    q = {
      cb: false,
      fu: 0,
      at: 0,
      rid: null,
      cam: false,
      sc: false,
      mu: 0,
      mf: !!dp(p, "ia:mf", true),
      lp: -1,
    };
    PP[p.id] = q;
  }
  return q;
}
function say(p, m) {
  p.onScreenDisplay.setActionBar(m);
  pst(p).mu = T + 40;
}
function sco(o, p, n) {
  var b = w.scoreboard.getObjective(o);
  if (b && n) b.addScore(p, n);
}
function sob() {
  var x2 = [
    ["ia_distance", "Distance Flown in Aircraft"],
    ["ia_time", "Time in Aircraft"],
    ["ia_fuel", "Fuel Burned in Aircraft"],
    ["ia_damage", "Damage Caused to Aircraft"],
    ["ia_crashes", "Crashed Aircraft"],
  ];
  for (var x of x2)
    if (!w.scoreboard.getObjective(x[0])) w.scoreboard.addObjective(x[0], x[1]);
}

function gs(e) {
  var s = M.get(e.id);
  if (s) return s;
  var k = e.typeId.slice(3),
    d = AC[k],
    fx = e.getDynamicProperty("ia:fu"),
    nb = (d.slots.boiler || []).length,
    ff = [];
  for (var i = 0; i < nb; i++) ff.push(0);
  if (typeof fx == "string") {
    var q = fx.split(",");
    for (var j = 0; j < nb && j < q.length; j++) ff[j] = parseInt(q[j]) || 0;
  }
  s = {
    k: k,
    d: d,
    vx: 0,
    vy: 0,
    vz: 0,
    yaw: e.getRotation().y,
    pit: dp(e, "ia:p", 0),
    rol: 0,
    prol: 0,
    hp: dp(e, "ia:hp", 1),
    tg: dp(e, "ia:tg", 0),
    ep: mkI(20),
    er: 0,
    su: 0,
    es: 0,
    fu: ff,
    px: mkI(d.interp),
    py: mkI(d.interp),
    pz: mkI(d.interp),
    mx: 0,
    my: 0,
    mz: 0,
    lx: 0,
    ly: 0,
    lz: 0,
    l2x: 0,
    l2y: 0,
    l2z: 0,
    aly: 0,
    iwl: 0,
    bo: 0,
    ht: 0,
    hd: 1,
    dw: 0,
    fc: 0,
    wp: {},
    cu: { PULL_UP: 0, VOID: 0, DAMAGED: 0 },
    mw: 0,
    lfs: "N",
    tc: 0,
    lte: -100,
    dye: dp(e, "ia:dye", -1),
    bank: dp(e, "ia:bank", 0),
    u: {},
    pc: {},
    pl: null,
    lm: null,
    lg: 0.04,
    fh: 0,
    tyw: mkI(5),
    tpt: mkI(5),
    tcd: 0,
    tin: { ammo: 0, as: null },
    cw: false,
    hpo: -1,
    he: null,
  };
  M.set(e.id, s);
  upg(e, s);
  return s;
}
function upg(e, s) {
  var c = inv(e),
    ups = [],
    sl = s.d.slots.upgrade || [];
  if (c)
    for (var i of sl) {
      var it = c.getItem(i);
      if (it && UPG[it.typeId]) ups.push(UPG[it.typeId]);
    }
  for (var k in SPOS) {
    var v = 1;
    for (var st = 0; st < 2; st++)
      for (var u of ups) {
        var x = u[k] || 0;
        if (x > 0 && st == 1) v += x;
        else if (x < 0 && st == 0) v *= x + 1;
      }
    s.u[k] = Math.max(0, v);
  }
}
function P(s, k) {
  var v = (s.d.props[k] || 0) * s.u[k];
  if (k == "engineSpeed") v *= gc().speedMultiplier || 1;
  else if (k == "verticalSpeed") v *= Math.sqrt(gc().speedMultiplier || 1);
  else if (k == "lift" && s.d.cls == "airplane") v *= gc().liftAssist || 1;
  return v;
}
function PA(s, k) {
  return (s.d.props[k] || 0) + s.u[k] - 1;
}
function rmx(s) {
  return mm(mm(mY(rd(-s.yaw)), mX(rd(s.pit))), mZ(rd(s.rol)));
}
function rot(s) {
  var c = s.d.cls;
  return (
    c == "airship" || c == "warship" || c == "gyrodyne" || c == "quadrocopter"
  );
}
function fw(s) {
  if (rot(s)) return nm(v3(Math.sin(rd(-s.yaw)), 0, Math.cos(rd(s.yaw))));
  return mv(rmx(s), v3(0, 0, 1));
}
function rgt(s) {
  return nm(v3(Math.cos(rd(-s.yaw)), 0, Math.sin(rd(s.yaw))));
}
function tpd(s) {
  return mv(rmx(s), v3(0, 1, 0));
}
function sv(s) {
  return v3((s.lx - s.l2x) / 10, (s.ly - s.l2y) / 10, (s.lz - s.l2z) / 10);
}
function vl(s) {
  return v3(s.vx, s.vy, s.vz);
}

function vf(id) {
  var n = id.replace("minecraft:", "");
  if (FZ[n] !== undefined) return FZ[n];
  if (n.indexOf("crimson") >= 0 || n.indexOf("warped") >= 0) return 0;
  if (/(_log|_wood|_planks)$/.test(n)) return 300;
  if (/_hanging_sign$/.test(n)) return 800;
  if (/_sign$/.test(n)) return 200;
  if (/_slab$/.test(n) && WD.test(n)) return 150;
  if (
    /(_stairs|_trapdoor|_pressure_plate|_fence|_fence_gate)$/.test(n) &&
    WD.test(n)
  )
    return 300;
  if (/_door$/.test(n) && WD.test(n)) return 200;
  if (/_button$/.test(n) && WD.test(n)) return 100;
  if (/(_boat|_raft)$/.test(n)) return 1200;
  if (/_wool$/.test(n)) return 100;
  if (/_carpet$/.test(n)) return 67;
  if (/_sapling$/.test(n) || n == "mangrove_propagule") return 100;
  if (/_banner$/.test(n)) return 300;
  return 0;
}
function ft(it) {
  if (!it) return 0;
  var c = gc();
  if (c.fuelList && c.fuelList[it.typeId] !== undefined)
    return c.fuelList[it.typeId];
  if (c.acceptVanillaFuel) return vf(it.typeId);
  return 0;
}
function flw(e, s) {
  if (s.d.fuelType == "fat") return false;
  if (!gc().burnFuelInCreative && pcr(e)) return false;
  for (var f of s.fu) if (f > 900) return false;
  return true;
}
function ut(e, s) {
  var c = gc();
  if (s.d.fuelType == "fat") {
    var p = rdr(e)[0];
    if (isP(p)) {
      var h = p.getComponent("minecraft:player.hunger");
      return h && h.currentValue > 5 ? 1 : 0;
    }
    return 1;
  }
  if (c.fuelConsumption == 0) return 1;
  if (!c.burnFuelInCreative && pcr(e)) return 1;
  if (!s.fu.length) return 1;
  var r = 0;
  for (var f of s.fu) if (f > 0) r++;
  return (r / s.fu.length) * (flw(e, s) ? 0.75 : 1);
}
function pw(e, s) {
  return s.ep.s * Math.sqrt(ut(e, s));
}
function fcn(s) {
  return s.tg * P(s, "fuel") * gc().fuelConsumption;
}
function psp(e, s) {
  var p = pw(e, s);
  if (s.d.cls == "airship" || s.d.cls == "warship")
    return p * (0.25 + Math.abs(s.pz.l));
  return p;
}
function ilv(e) {
  var b = e.dimension.getBlock(e.location);
  return !!b && b.typeId.indexOf("lava") >= 0;
}
function lfe(s, dir, f) {
  var v = vl(s),
    fs = Math.max(0, dt(dir, v)),
    al = cl(dt(dir, nm(v)), 0, 1);
  return Math.min(1, fs * P(s, "lift") * 10 * f) * al;
}
function grv(e, s) {
  var c = s.d.cls;
  if (c == "airplane") {
    if (s.k == "bamboo_hopper" && s.fh > 0) return -0.04 * s.fh;
    var d = fw(s);
    return (1 - lfe(s, d, 1 - Math.abs(d.y))) * 0.04;
  }
  if (c == "gyrodyne") return (1 - pw(e, s)) * 0.04;
  return e.isInWater ? -0.04 : (1 - pw(e, s)) * 0.04;
}
function gdc(e, s) {
  var g = cl(grv(e, s) / 0.04, 0, 1),
    u = Math.min(1, P(s, "acceleration") * 0.5);
  return (P(s, "groundFriction") * g + (1 - g)) * (1 - u) + u;
}
function afr(e, s, rs) {
  var dec = 1 - P(s, "friction"),
    g = grv(e, s);
  if (ilv(e)) {
    g *= 0.125;
    dec = P(s, "lavaFriction");
  } else if (e.isInWater) {
    g *= 0.25;
    dec = P(s, "waterFriction");
  } else if (e.isOnGround) {
    dec = rs.length ? gdc(e, s) : 0.75;
  }
  var hd = P(s, "horizontalDecay"),
    vd = P(s, "verticalDecay");
  s.vx *= dec * hd;
  s.vy = s.vy * dec * vd - g;
  s.vz *= dec * hd;
  s.lg = g;
  var rf = dec * P(s, "rotationDecay");
  dI(s.px, 0, 1 - rf);
  dI(s.pz, 0, 1 - rf);
}
function gla(e, s, d, h) {
  var b = h * P(s, "glideFactor") * (1 - Math.abs(d.y));
  if (s.d.cls == "airplane") {
    var lm = Math.max(0, grv(e, s)) * Math.abs(d.y);
    b = cl(b, -lm, lm);
  }
  return b;
}
function cpw(e, s, d) {
  if (s.d.cls == "quadrocopter") return;
  var F = P(s, "friction");
  if (rot(s)) {
    var v = v3(s.vx, 0, s.vz),
      L2 = ln(v),
      dr = Math.abs(dt(d, nm(v))),
      n = nm(v),
      t = P(s, "lift"),
      q = ad(n, sc(ad(d, sc(n, -1)), t)),
      k = L2 * (dr * F + 1 - F);
    s.vx = q.x * k;
    s.vz = q.z * k;
    return;
  }
  var v2 = vl(s),
    L3 = ln(v2),
    dr2 = Math.abs(dt(d, nm(v2))),
    n2 = nm(v2),
    t2 = P(s, "lift") * (s.d.cls == "airplane" ? lfe(s, d, 1) : 1),
    q2 = ad(n2, sc(ad(d, sc(n2, -1)), t2)),
    k2 = L3 * (dr2 * F + 1 - F);
  s.vx = q2.x * k2;
  s.vy = q2.y * k2;
  s.vz = q2.z * k2;
}
function wnd(e, s) {
  var c = gc(),
    x = WX[e.dimension.id] || WeatherType.Clear,
    th = x == WeatherType.Thunder ? 1 : 0,
    rn = x != WeatherType.Clear ? 1 : 0,
    st =
      (c.windClearWeather +
        ln(vl(s)) +
        th * c.windThunderWeather +
        rn * c.windRainWeather) *
      P(s, "wind"),
    ms = P(s, "mass") || 1;
  return v3(cnz(s.tc / 20 / ms) * st, 0, cnz(s.tc / 21 / ms) * st);
}
function uvl(e, s, rs) {
  var d = fw(s),
    y = e.location.y,
    df = s.aly - y;
  if (s.aly != 0 && P(s, "glideFactor") > 0 && df != 0) {
    var a = gla(e, s, d, df);
    s.vx += d.x * a;
    s.vy += d.y * a;
    s.vz += d.z * a;
  }
  s.aly = y;
  cpw(e, s, d);
  afr(e, s, rs);
  var gp = P(s, "groundPitch");
  if (e.isOnGround) s.pit = (s.pit + gp) * 0.9 - gp;
  else if (!e.isInWater) {
    var x = wnd(e, s);
    s.pit += x.x;
    s.yaw += x.z;
    s.vx += x.x * 0.005;
    s.vz += x.z * 0.005;
  }
  if (s.k == "bamboo_hopper" && e.isInWater) s.pit = (s.pit + gp) * 0.9 - gp;
}
function stg(e, s, t) {
  var u = ut(e, s);
  if (u > 0 || t == 0) {
    if (u > 0 && s.tg == 0 && t > 0) {
      var l = e.location;
      e.dimension.playSound(
        "ia." + s.d.start,
        v3(l.x, l.y + s.d.size[1] * 0.5, l.z),
        { volume: 1.5, pitch: 1 },
      );
    }
    if (s.tg != t) {
      s.tg = t;
      e.setDynamicProperty("ia:tg", t);
    }
  }
}
function ub(e, s) {
  s.yaw -= P(s, "yawSpeed") * s.px.s;
  if (!e.isOnGround) s.pit += P(s, "pitchSpeed") * s.pz.s;
  s.pit *= 1 - PA(s, "stabilizer");
}
function uct(e, s, rs) {
  var c = s.d.cls,
    pi = rs[0],
    og = e.isOnGround;
  if (c == "quadrocopter") {
    if (isP(pi)) stg(e, s, 1);
    if (!og) s.pit += P(s, "pitchSpeed") * s.pz.s;
    s.pit *= 1 - PA(s, "stabilizer");
    var p = pw(e, s);
    s.vy += p * P(s, "verticalSpeed") * s.py.s;
    if (pi) {
      var df = pi.getRotation().y - s.yaw;
      if (df > 180) df -= 360;
      else if (df < -180) df += 360;
      df *= P(s, "yawSpeed");
      if (Math.abs(df) < 60) s.yaw += df;
    }
    var t = Math.pow(p, 5) * P(s, "engineSpeed"),
      r = rgt(s),
      f = fw(s),
      a = t * s.px.s,
      b = t * s.pz.s;
    s.vx += r.x * a + f.x * b;
    s.vy += r.y * a + f.y * b;
    s.vz += r.z * a + f.z * b;
    return;
  }
  if (c == "airplane") {
    if (!rs.length) return;
    ub(e, s);
    var bk = Math.max(0, -s.my);
    if (s.my != 0) stg(e, s, cl(s.tg + 0.1 * s.my, 0, 1));
    if (bk > 0) {
      var f2 = 1 + bk * (P(s, "brakeFactor") - 1);
      s.vx *= f2;
      s.vy *= f2;
      s.vz *= f2;
    }
    var d = fw(s),
      es = P(s, "engineSpeed"),
      p2 = pw(e, s),
      t2 = p2 * p2 * es * 1.25,
      mxs = es * 500;
    if (mxs > 0) {
      var fs = Math.max(0, dt(vl(s), d)) * 20;
      t2 *= cl((1 - fs / mxs) / 0.25, 0, 1);
    }
    if (og) t2 *= 0.75;
    if (og && s.tg < 1)
      t2 = (P(s, "pushSpeed") / (1 + ln(vl(s)) * 5)) * (s.tx || 0) * (1 - p2);
    s.vx += d.x * t2;
    s.vy += d.y * t2;
    s.vz += d.z * t2;
    var fsp = Math.max(0, dt(vl(s), d));
    if (
      og &&
      s.tg > 0.4 &&
      p2 > 0.3 &&
      fsp > 0.17 &&
      ((s.lu || 0) > 0 || fsp > 0.3)
    ) {
      s.pit = Math.max(s.pit - 3, -14);
      s.vy = Math.max(s.vy, 0.07 + (fsp - 0.17) * 0.2);
      s.tko = 14;
    }
    if (s.tko > 0) {
      s.tko--;
      if (!og) s.vy = Math.max(s.vy, 0.025);
    }
    return;
  }
  ub(e, s);
  if (c == "airship" || c == "warship") {
    if (isP(pi)) stg(e, s, 1);
    var p3 = pw(e, s);
    s.vy += p3 * P(s, "verticalSpeed") * s.py.s;
    var d3 = fw(s),
      t3 = Math.pow(p3, 5) * P(s, "engineSpeed") * s.pz.s;
    s.vx += d3.x * t3;
    s.vy += d3.y * t3;
    s.vz += d3.z * t3;
    return;
  }
  if (c == "gyrodyne") {
    if (s.tg < 1) {
      stg(e, s, cl(s.tg + s.pz.v * 0.05 - 0.035, 0, 1));
      if (isP(pi) && ut(e, s) > 0)
        say(pi, {
          translate: "immersive_aircraft.gyrodyne_target",
          with: [String(Math.floor(s.tg * 100 + 0.5))],
        });
      if (s.tg == 1) {
        if (isP(pi))
          say(pi, { translate: "immersive_aircraft.gyrodyne_target_reached" });
        if (og) s.vy += 0.25;
      }
    }
    var p4 = pw(e, s),
      pv = p4 * P(s, "verticalSpeed") * s.py.s,
      tt = tpd(s);
    s.vx += tt.x * pv;
    s.vy += tt.y * pv;
    s.vz += tt.z * pv;
    var d4 = fw(s),
      sn = Math.sin(rd(s.pit)),
      t4 = p4 * p4 * P(s, "engineSpeed") * sn;
    if (og && s.tg < 1)
      t4 =
        (P(s, "pushSpeed") / (1 + ln(vl(s)) * 5)) *
        s.pz.s *
        (s.pz.s > 0 ? 1 : 0.5) *
        p4;
    s.vx += d4.x * t4;
    s.vy += d4.y * t4;
    s.vz += d4.z * t4;
  }
}
function abo(s) {
  var d = fw(s),
    t = (0.05 * s.bo) / 100;
  s.vx += d.x * t;
  s.vy += d.y * t;
  s.vz += d.z * t;
}
function cbo(e, s) {
  var c = inv(e);
  if (!c || s.bo > 0) return false;
  for (var i of s.d.slots.booster || []) if (c.getItem(i)) return true;
  return false;
}
function bst(e, s) {
  var c = inv(e),
    n = 0;
  for (var i of s.d.slots.booster || []) {
    var it = c.getItem(i);
    if (!it) continue;
    n += 1;
    if (it.amount > 1) {
      it.amount--;
      c.setItem(i, it);
    } else c.setItem(i);
  }
  s.bo = n * 50;
}
function cfu(s, c) {
  while (c > 0 && (c >= 1 || Math.random() < c)) {
    for (var i = 0; i < s.fu.length; i++) if (s.fu[i] > 0) s.fu[i]--;
    c--;
  }
}
function rfl(e, s, pi) {
  var c = inv(e),
    sl = s.d.slots.boiler || [];
  if (!c) return;
  for (var i = 0; i < s.fu.length; i++) {
    while (s.fu[i] <= 1000 && i < sl.length) {
      var it = c.getItem(sl[i]),
        t = ft(it);
      if (t <= 0) break;
      var rm =
        it.typeId == "minecraft:lava_bucket"
          ? new IS("minecraft:bucket", 1)
          : undefined;
      if (it.amount > 1) {
        it.amount--;
        c.setItem(sl[i], it);
      } else c.setItem(sl[i], rm);
      s.fu[i] += t;
      if (isP(pi)) sco("ia_fuel", pi, t);
    }
  }
}
function fms(e, s, pi) {
  if (!isP(pi)) return;
  var u = ut(e, s),
    ty = s.d.fuelType;
  if (u > 0 && flw(e, s)) {
    if (s.lfs != "L") {
      say(pi, { translate: "immersive_aircraft." + ty + ".low" });
      s.lfs = "L";
    }
  } else if (u > 0) s.lfs = "F";
  else if (s.lfs != "E") {
    say(pi, {
      translate:
        "immersive_aircraft." + ty + "." + (s.lfs == "F" ? "out" : "none"),
    });
    s.lfs = "E";
  }
}
function hwa(e, s) {
  var a = sv(s).y * 10,
    y = e.location.y,
    sl = SEA[e.dimension.id];
  if (sl === undefined) sl = 63;
  if (pw(e, s) >= 0.5 && a < -2 && y + a * 3 < sl) s.cu.PULL_UP = 40;
  if (y < e.dimension.heightRange.min) {
    s.cu.VOID = 10;
    s.mw = 6;
  }
  if (s.hp * 100 < 20) {
    s.cu.DAMAGED = 10;
    s.mw = 6;
  }
}

function wpu(e, s) {
  var c = inv(e),
    ws = s.d.slots.weapon || [];
  if (!c) return;
  for (var k = 0; k < ws.length; k++) {
    var it = c.getItem(ws[k]),
      id = it ? it.typeId : null,
      cu = s.wp[k];
    if (!id || !WPI[id]) {
      if (cu) delete s.wp[k];
      continue;
    }
    if (!cu || cu.id != id) {
      var ms = (s.d.mounts[k] || {})[WPI[id].mount] || [];
      s.wp[k] = {
        id: id,
        t: CD[id],
        off: 0,
        ls: ms.map(function (m, i) {
          return { m: m, i: i, ammo: 0, as: null, cd: 0, rl: 0, lft: 0 };
        }),
      };
    }
  }
  var o = 0;
  for (var kk of Object.keys(s.wp).sort(function (a, b) {
    return a - b;
  }))
    s.wp[kk].off = o++;
  for (var k2 in s.wp) {
    var W = s.wp[k2];
    for (var q of W.ls) {
      if (W.t == "hc" || W.t == "bb") q.cd -= 0.05;
      if (W.t == "ts") {
        q.lft--;
        if (q.lft == 0) {
          var pi = rdr(e)[0];
          if (pi)
            pi.dimension.playSound("item.spyglass.stop_using", pi.location);
        }
      }
    }
  }
}
function gun(rs, o) {
  return rs.length ? rs[Math.max(0, rs.length - 1 - o)] : undefined;
}
function scp(s) {
  for (var k in s.wp) {
    var W = s.wp[k];
    if (W.t == "ts") for (var q of W.ls) if (q.lft > 0) return true;
  }
  return false;
}
function spa(e, s, q, mp, n) {
  if (q.ammo < n) {
    var cs = [inv(e), hcn(e, s)];
    out: for (var c of cs) {
      if (!c) continue;
      for (var i = 0; i < c.size; i++) {
        var it = c.getItem(i);
        if (it && mp[it.typeId] !== undefined) {
          q.as = it.typeId;
          if (!pcr(e)) {
            q.ammo += mp[it.typeId];
            if (it.amount > 1) {
              it.amount--;
              c.setItem(i, it);
            } else c.setItem(i);
          }
          break out;
        }
      }
    }
  }
  if (pcr(e)) return true;
  if (q.ammo <= 0) {
    var pi = rdr(e)[0];
    if (isP(pi)) say(pi, { translate: "immersive_aircraft.out_of_ammo" });
    return false;
  }
  q.ammo -= n;
  return true;
}
function wps(e, s, mt, bo, bl, d) {
  var lp = ad(mv(mt.mat, bo), mt.pos),
    wp = ad(mv(rmx(s), lp), e.location);
  return ad(wp, sc(d, bl));
}
function sht(d, vel, inc) {
  var n = nm(d),
    k = 0.0172275 * inc;
  return v3(
    (n.x + (Math.random() - Math.random()) * k) * vel,
    (n.y + (Math.random() - Math.random()) * k) * vel,
    (n.z + (Math.random() - Math.random()) * k) * vel,
  );
}
function mzl(e, pos, v) {
  var m = new MolangVariableMap();
  m.setVector3("variable.dir", v);
  e.dimension.spawnParticle("ia:muzzle", pos, m);
}
function frc(e, s, mt, d) {
  var pos = wps(e, s, mt, v3(0, 0.825, -0.375), 1, d),
    spd = sv(s),
    v = ad(sht(d, 4, 1), spd),
    b = e.dimension.spawnEntity("ia:bullet", pos),
    pi = rdr(e)[0];
  b.applyImpulse(v);
  BU.push({
    e: b,
    vx: v.x,
    vy: v.y,
    vz: v.z,
    ow: pi ? pi.id : undefined,
    ve: e.id,
    lf: 0,
  });
  mzl(e, pos, ad(sc(nm(d), 0.25), spd));
  e.dimension.playSound("ia.cannon", e.location, {
    volume: 1,
    pitch: Math.random() * 0.2 + 0.9,
  });
}
function fhc(e, s, q, d, mt, vel, inc) {
  var pos = wps(e, s, mt, v3(0, 0.3, 0), 1.25, d),
    spd = sv(s),
    v = ad(sht(v3(d.x, d.y + 0.1, d.z), vel, inc), spd),
    a = e.dimension.spawnEntity("minecraft:arrow", pos),
    pr = a.getComponent("minecraft:projectile"),
    pi = rdr(e)[0];
  if (pr) {
    if (pi) pr.owner = pi;
    pr.shoot(v);
  } else a.applyImpulse(v);
  mzl(e, pos, ad(sc(d, 0.25), spd));
  e.dimension.playSound("crossbow.shoot", e.location, {
    volume: 1,
    pitch: Math.random() * 0.2 + 0.9,
  });
}
function fbb(e, s, q, d, mt) {
  var pos = wps(e, s, mt, v3(0, -0.8, 0), 0.25, d),
    spd = sv(s),
    id = q.as || "minecraft:tnt",
    en = (gc().bombBayEntity || {})[id] || "ia:tiny_tnt",
    x = e.dimension.spawnEntity(en, pos);
  if (en == "ia:tiny_tnt") {
    TN.push({ e: x, vx: spd.x, vy: spd.y, vz: spd.z, f: 80, pl: null });
    x.setProperty("ia:fuse", 80);
  }
  x.applyImpulse(spd);
  mzl(e, pos, ad(sc(d, 0.25), spd));
  e.dimension.playSound("crossbow.shoot", e.location, {
    volume: 1,
    pitch: Math.random() * 0.2 + 0.9,
  });
}
function cfi(e, s, W, q, ix, p) {
  var mt = { pos: v3(q.m.x, q.m.y, q.m.z), mat: q.m.matrix };
  if (W.t == "rc") {
    var o = q.rl;
    q.rl += 0.25;
    if (Math.floor(o) != Math.floor(q.rl)) {
      if (spa(e, s, q, gc().gunpowderAmmunition, 10))
        frc(e, s, mt, p.getViewDirection());
    }
  } else if (W.t == "hc") {
    if (q.cd <= 0) {
      q.cd = 1;
      var d = mv(rmx(s), mv(q.m.matrix, v3(0, 0, 1)));
      if (spa(e, s, q, gc().arrowAmmunition, 50))
        fhc(e, s, q, d, mt, gc().heavyCrossBowVelocity, 0);
    }
  } else if (W.t == "bb") {
    if (q.cd <= 0) {
      q.cd = 1;
      var d2 = mv(rmx(s), mv(q.m.matrix, v3(0, 1, 0)));
      if (spa(e, s, q, gc().bombBayAmmunition, 20)) fbb(e, s, q, d2, mt);
    }
  } else if (W.t == "ts") {
    if (q.lft <= 0) p.dimension.playSound("item.spyglass.use", p.location);
    q.lft = 2;
  }
}
function trm(s) {
  return mm(mY(rd(-s.tyw.v)), mX(rd(s.tpt.v)));
}
function gnp(s) {
  var y = rd(s.tyw.s),
    p = rd(s.tpt.s),
    o1 = v3(0, 0.5, 2),
    q = ad(mv(mY(-y), ad(v3(0, 0.5, 2.5), sc(o1, -1))), o1),
    o2 = v3(0, 0.5, 0.9);
  return ad(mv(mX(p), ad(q, sc(o2, -1))), o2);
}
function fir(e, s, p) {
  var rs = rdr(e);
  if (s.k == "warship" && rs[1] && rs[1].id == p.id) {
    if (s.tcd <= 0) {
      s.tcd = 1;
      var tr = trm(s),
        dd = mv(rmx(s), mv(tr, v3(0, 0, 1)));
      if (spa(e, s, s.tin, gc().arrowAmmunition, 50))
        fhc(e, s, s.tin, dd, { pos: gnp(s), mat: tr }, 5, 0);
    }
    return;
  }
  for (var k of Object.keys(s.wp).sort(function (a, b) {
    return a - b;
  })) {
    var W = s.wp[k],
      ix = 0;
    for (var q of W.ls) {
      var g = gun(rs, W.off);
      if (g && g.id == p.id) cfi(e, s, W, q, ix++, p);
    }
  }
}
function wst(e, s, rs) {
  s.tcd -= 0.05;
  var g = rs[1];
  if (g) {
    uI(s.tyw, cl(wr(g.getRotation().y - s.yaw), -75, 75));
    uI(s.tpt, cl(g.getRotation().x, -30, 30));
  } else {
    uI(s.tyw, 0);
    uI(s.tpt, 0);
  }
}

function tbu() {
  for (var i = BU.length - 1; i >= 0; i--) {
    var b = BU[i],
      e = b.e;
    if (!e.isValid) {
      BU.splice(i, 1);
      continue;
    }
    b.lf++;
    var p = e.location,
      v = v3(b.vx, b.vy, b.vz),
      L2 = ln(v),
      n = nm(v),
      dm = e.dimension,
      hit = null,
      hd = 1e9;
    if (L2 > 0) {
      var hs = dm.getEntitiesFromRay(p, n, { maxDistance: Math.ceil(L2) + 1 });
      for (var h of hs) {
        var x = h.entity;
        if (
          !x ||
          x.id == e.id ||
          x.id == b.ow ||
          x.id == b.ve ||
          x.typeId == "minecraft:item" ||
          x.typeId == "minecraft:xp_orb" ||
          x.typeId == "ia:bullet" ||
          x.typeId == "ia:cargo_hold" ||
          x.typeId == "ia:stash"
        )
          continue;
        var rr = x.getComponent("minecraft:riding");
        if (rr && rr.entityRidingOn && rr.entityRidingOn.id == b.ve) continue;
        if (h.distance <= L2 && h.distance < hd) {
          hd = h.distance;
          hit = x;
        }
        break;
      }
      var bh = dm.getBlockFromRay(p, n, {
        maxDistance: Math.max(1, Math.ceil(L2)),
        includeLiquidBlocks: false,
        includePassableBlocks: false,
      });
      if (bh) {
        var bd = ln(ad(hlp(bh.block, bh.faceLocation), sc(p, -1)));
        if (bd <= L2 && bd < hd) {
          hd = bd;
          hit = "b";
        }
      }
    }
    if (hit || b.lf > 600) {
      if (hit && hit != "b") {
        var ow = b.ow ? w.getEntity(b.ow) : undefined;
        hit.applyDamage(
          gc().rotaryCannonDamage,
          ow
            ? { damagingEntity: ow, damagingProjectile: e }
            : { cause: EDC.projectile },
        );
      }
      e.remove();
      BU.splice(i, 1);
      continue;
    }
    var f = e.isInWater ? 0.8 : 0.95;
    v = sc(ad(v, sc(n, 0.1)), f);
    if (v.x * v.x + v.y * v.y + v.z * v.z < 0.1) {
      e.remove();
      BU.splice(i, 1);
      continue;
    }
    b.vx = v.x;
    b.vy = v.y;
    b.vz = v.z;
    var cv = e.getVelocity();
    e.applyImpulse(v3(v.x - cv.x, v.y - cv.y, v.z - cv.z));
  }
}
function ttn() {
  for (var i = TN.length - 1; i >= 0; i--) {
    var t = TN[i],
      e = t.e;
    if (!e.isValid) {
      TN.splice(i, 1);
      continue;
    }
    var og = e.isOnGround,
      l = e.location;
    if (t.pl) {
      var ay = l.y - t.pl.y,
        ax = l.x - t.pl.x,
        az = l.z - t.pl.z;
      if (Math.abs(ay - t.vy) > 1e-3 && Math.abs(ay) < Math.abs(t.vy)) t.vy = 0;
      if (Math.abs(ax - t.vx) > 1e-3 && Math.abs(ax) < Math.abs(t.vx)) t.vx = 0;
      if (Math.abs(az - t.vz) > 1e-3 && Math.abs(az) < Math.abs(t.vz)) t.vz = 0;
    }
    t.vy -= 0.04;
    t.vx *= 0.98;
    t.vy *= 0.98;
    t.vz *= 0.98;
    if (og) {
      t.vx *= 0.7;
      t.vy *= -0.5;
      t.vz *= 0.7;
    }
    t.f -= og ? 5 : 1;
    if (t.f <= 0) {
      var dm = e.dimension;
      e.remove();
      TN.splice(i, 1);
      dm.createExplosion(v3(l.x, l.y + 0.0234, l.z), 4, {
        breaksBlocks: !!gc().weaponsAreDestructive,
        causesFire: false,
      });
      continue;
    }
    e.setProperty("ia:fuse", Math.round(cl(t.f, -10, 200)));
    e.dimension.spawnParticle(
      "minecraft:basic_smoke_particle",
      v3(l.x, l.y + 0.5, l.z),
    );
    t.pl = l;
    var cv = e.getVelocity();
    e.applyImpulse(v3(t.vx - cv.x, t.vy - cv.y, t.vz - cv.z));
  }
}

function cen(id) {
  var r = gc().canEnter || {};
  if (r[id] !== undefined) return !!r[id];
  var ok = false;
  for (var k in r) {
    if (k.charAt(0) != "#") continue;
    if (
      (k == "#water_animals" || k == "#immersive_aircraft:water_animals") &&
      WAN.indexOf(id) >= 0
    ) {
      if (!r[k]) return false;
      ok = true;
    }
  }
  return ok || !!gc().defaultCanEnter;
}
function aen(e, s, rs) {
  if (isP(rs[0])) return;
  var rr = e.getComponent("minecraft:rideable");
  if (!rr) return;
  var bb = e.getAABB(),
    n = rs.length,
    mx = s.d.passengers.length - 1;
  if (n >= mx) return;
  var near = e.dimension.getEntities({
    location: e.location,
    maxDistance: Math.max(s.d.size[0], s.d.size[1]) + 2,
  });
  for (var o of near) {
    if (n >= mx) break;
    if (
      o.id == e.id ||
      o.typeId.startsWith("ia:") ||
      o.typeId == "minecraft:item"
    )
      continue;
    if (o.getComponent("minecraft:riding")) continue;
    if (!o.getComponent("minecraft:health")) continue;
    if (!cen(o.typeId)) continue;
    var ob = o.getAABB();
    if (ob.extent.x * 2 >= s.d.size[0]) continue;
    if (
      Math.abs(ob.center.x - bb.center.x) <= ob.extent.x + bb.extent.x + 0.2 &&
      Math.abs(ob.center.y - bb.center.y) <= ob.extent.y + bb.extent.y - 0.01 &&
      Math.abs(ob.center.z - bb.center.z) <= ob.extent.z + bb.extent.z + 0.2
    ) {
      if (rr.addRider(o)) n++;
    }
  }
}
function q8(a) {
  return (Math.floor((a * 256) / 360) * 360) / 256;
}
function abx(e, s) {
  var R = mm(mm(mY(rd(-q8(s.yaw))), mX(rd(q8(s.pit)))), mZ(rd(q8(s.rol)))),
    l = e.location,
    o = [];
  for (var b of s.d.boxes) {
    var c = mv(R, v3(b.x, b.y, b.z));
    o.push({ c: ad(c, l), w: b.width, h: b.height });
  }
  return o;
}
function rep(e, s, p) {
  var c = gc(),
    x = p.getComponent("minecraft:player.exhaustion");
  if (x)
    x.setCurrentValue(
      Math.min(x.effectiveMax, x.currentValue + c.repairExhaustion),
    );
  s.hp = Math.min(1, s.hp + c.repairSpeed);
  e.setDynamicProperty("ia:hp", s.hp);
  var co = s.hp < 0.33 ? "§c" : s.hp < 0.66 ? "§e" : "§a";
  say(p, {
    rawtext: [
      { text: co },
      {
        translate: "immersive_aircraft.repair",
        with: [String(Math.floor(s.hp * 100))],
      },
    ],
  });
  e.dimension.playSound("ia.repair", e.location, {
    volume: 1,
    pitch: 0.7 + Math.random() * 0.2,
  });
  for (var b of abx(e, s))
    for (var i = 0; i < 5; i++)
      e.dimension.spawnParticle(
        "ia:repair",
        v3(
          b.c.x + b.w * (Math.random() - 0.5) * 1.5,
          b.c.y + b.h * (Math.random() - 0.5) * 1.5,
          b.c.z + b.w * (Math.random() - 0.5) * 1.5,
        ),
      );
}

function hrt(e, s, a, src) {
  if (!e.isValid || s.hp <= 0) return;
  var c = gc(),
    cs = src.cause + "";
  if (FIR.indexOf(cs) >= 0) {
    a *= 1 - cl(PA(s, "fireResistance"), 0, 1);
    if (a <= 0) return;
  }
  if (cs == "fire" || cs == "campfire" || cs == "soulCampfire") {
    if (s.fc > 0) return;
    s.fc = 10;
  }
  var at = src.damagingEntity,
    pj = src.damagingProjectile;
  if (isP(at) && at.getGameMode() == GameMode.Creative) {
    din(e, s);
    rmv(e, s);
    return;
  }
  if (a > 0 && isP(at) && !rdr(e).length && !pj) a = Math.max(5, a);
  s.hd = -s.hd;
  s.ht = 10;
  s.dw = s.dw + (Math.sqrt(a) * 5) / (1 + s.dw * 0.05);
  apd(e, s, a / P(s, "durability") / c.damagePerHealthPoint, !(isP(at) && !pj));
}
function apd(e, s, a, fo) {
  if (!e.isValid || s.hp <= 0) return;
  var c = gc(),
    h = s.hp - a,
    pi = rdr(e)[0];
  if (h <= 0) {
    s.hp = 0;
    if (isP(pi)) sco("ia_crashes", pi, 1);
    var l = e.location,
      dm = e.dimension;
    if (fo && s.d.explode && c.enableCrashExplosion)
      dm.createExplosion(l, c.crashExplosionRadius, {
        causesFire: !!c.enableCrashFire,
        breaksBlocks:
          !!c.enableCrashBlockDestruction && w.gameRules.mobGriefing,
      });
    if (w.gameRules.doEntityDrops && c.enableDropsForNonPlayer) {
      din(e, s);
      dro(e, s);
    }
    rmv(e, s);
  } else {
    s.hp = h;
    e.setDynamicProperty("ia:hp", h);
    if (isP(pi)) sco("ia_damage", pi, Math.floor(a * 20 + 0.5));
  }
}
function col(e, s, dmg, pi) {
  var c = gc();
  if (!c.collisionDamage) return;
  var ap = dmg * c.collisionDamageMultiplier;
  hrt(e, s, ap, { cause: "flyIntoWall" });
  if (!e.isValid && isP(pi) && pi.isValid) {
    var cd = ap * c.crashDamage,
      hc = pi.getComponent("minecraft:health");
    if (c.preventKillThroughCrash && hc) cd = Math.min(cd, hc.currentValue - 1);
    if (cd > 0) pi.applyDamage(cd, { cause: EDC.flyIntoWall });
  }
}
function din(e, s) {
  var c = gc(),
    cn = inv(e),
    dm = e.dimension,
    l = e.location,
    cg = s.d.slots.inventory || [];
  if (cn)
    for (var i = 0; i < cn.size; i++) {
      var it = cn.getItem(i);
      if (!it) continue;
      var ic = cg.indexOf(i) >= 0;
      if ((ic && c.dropInventory) || (!ic && c.dropUpgrades)) {
        dm.spawnItem(it, l);
        cn.setItem(i);
      }
    }
  var h = hcn(e, s);
  if (h && c.dropInventory)
    for (var j = 0; j < h.size; j++) {
      var y = h.getItem(j);
      if (y) {
        dm.spawnItem(y, l);
        h.setItem(j);
      }
    }
}
function dro(e, s) {
  if (!gc().dropAircraft) return;
  var it = new IS("ia:" + s.k, 1);
  var nm = e.getDynamicProperty("ia:name");
  if (typeof nm == "string" && nm) it.nameTag = nm;
  if (s.dye >= 0) {
    var dy = it.getComponent("minecraft:dyeable");
    if (dy)
      dy.color = {
        red: ((s.dye >> 16) & 255) / 255,
        green: ((s.dye >> 8) & 255) / 255,
        blue: (s.dye & 255) / 255,
      };
  }
  stz(e, s, it);
}
function stz(e, s, it) {
  var cn = inv(e),
    h = hcn(e, s),
    dm = e.dimension,
    l = e.location,
    n = 0,
    fi = [];
  if (h && s.bank) bks(e, s);
  if (cn)
    for (var i = 0; i < cn.size; i++) if (cn.getItem(i)) fi.push([cn, i, i]);
  if (h)
    for (var j = 0; j < h.size && cn.size + j < 128; j++)
      if (h.getItem(j)) fi.push([h, j, cn.size + j]);
  if (!fi.length) {
    lor(it, 0);
    dm.spawnItem(it, l);
    return;
  }
  var hr = dm.heightRange,
    bp = v3(
      Math.floor(l.x),
      cl(Math.floor(l.y), hr.min, hr.max - 1),
      Math.floor(l.z),
    ),
    st = dm.spawnEntity("ia:stash", v3(bp.x + 0.5, bp.y + 0.5, bp.z + 0.5)),
    s2 = inv(st);
  for (var f of fi) {
    f[0].moveItem(f[1], f[2], s2);
    n++;
  }
  var id =
    "ia:stash_" +
    Date.now().toString(36) +
    Math.floor(Math.random() * 1e9).toString(36);
  it.setDynamicProperty("ia:st", id);
  it.setDynamicProperty("ia:n", n);
  it.setDynamicProperty("ia:bk", 0);
  it.setDynamicProperty("ia:sv", 2);
  lor(it, n);
  dm.spawnItem(it, l);
  sy.runTimeout(function () {
    try {
      w.structureManager.createFromWorld(id, dm, bp, bp, {
        includeBlocks: false,
        includeEntities: true,
        saveMode: StructureSaveMode.World,
      });
    } catch (x) {
      var c3 = inv(st);
      for (var k = 0; k < c3.size; k++) {
        var y = c3.getItem(k);
        if (y) dm.spawnItem(y, st.location);
      }
    }
    st.remove();
  }, 2);
}
function ust(e, s, it) {
  var id = it.getDynamicProperty("ia:st");
  if (typeof id != "string") return;
  var dm = e.dimension,
    l = e.location,
    bp = v3(Math.floor(l.x), Math.floor(l.y), Math.floor(l.z)),
    bk = it.getDynamicProperty("ia:bk") || 0,
    fv = it.getDynamicProperty("ia:sv") || 1;
  try {
    w.structureManager.place(id, dm, bp, {
      includeBlocks: false,
      includeEntities: true,
    });
  } catch (x) {
    return;
  }
  sy.runTimeout(function () {
    if (!e.isValid) return;
    var st = dm.getEntities({
      type: "ia:stash",
      location: v3(bp.x + 0.5, bp.y + 0.5, bp.z + 0.5),
      maxDistance: 2,
    })[0];
    if (!st) return;
    var s2 = inv(st),
      cn = inv(e),
      h = hcn(e, s),
      oh = Math.max(0, s.d.invSize - 54),
      t0 = Math.min.apply(null, s.d.slots.inventory || [0]);
    for (var i = 0; i < s2.size; i++) {
      var y = s2.getItem(i);
      if (!y) continue;
      var lg = fv >= 2 ? i : i < 64 ? i : 54 + i - 64;
      if (fv < 2 && bk && oh) {
        if (lg >= t0 && lg < t0 + oh) lg = 54 + lg - t0;
        else if (lg >= 54 && lg < 54 + oh) lg = t0 + lg - 54;
      }
      if (cn && lg < cn.size && !cn.getItem(lg)) s2.moveItem(i, lg, cn);
      else if (h && cn && lg >= cn.size && lg - cn.size < h.size && !h.getItem(lg - cn.size))
        s2.moveItem(i, lg - cn.size, h);
      else {
        dm.spawnItem(y, e.location);
        s2.setItem(i);
      }
    }
    s.bank = 0;
    e.setDynamicProperty("ia:bank", 0);
    st.remove();
    w.structureManager.delete(id);
  }, 1);
}
function hsz(e, s) {
  if (s.hz === undefined) {
    var c = inv(e);
    if (!c) return 0;
    s.hz = Math.max(0, s.d.invSize - c.size);
  }
  return s.hz;
}
function ohl(e) {
  var id = e.getDynamicProperty("ia:hold"),
    h = typeof id == "string" ? w.getEntity(id) : undefined;
  if (!h)
    for (var x of e.dimension.getEntities({
      type: "ia:cargo_hold",
      location: e.location,
      maxDistance: 6,
    }))
      if (x.getDynamicProperty("ia:own") == e.id) {
        h = x;
        break;
      }
  return h;
}
function mig(e, s) {
  if (hsz(e, s) || e.getDynamicProperty("ia:hold") === undefined) return true;
  var cn = inv(e),
    h = ohl(e),
    oh = Math.max(0, s.d.invSize - 54),
    t0 = Math.min.apply(null, s.d.slots.inventory || [0]);
  if (!cn || (!h && (s.mt = (s.mt || 0) + 1) < 30)) return false;
  if (h) {
    var hc = inv(h);
    if (s.bank) for (var j = 0; j < oh; j++) cn.swapItems(t0 + j, 54 + j, cn);
    for (var j2 = 0; j2 < oh && j2 < hc.size; j2++) {
      var y = hc.getItem(j2);
      if (!y) continue;
      var L2 = s.bank ? t0 + j2 : 54 + j2;
      if (L2 < cn.size && !cn.getItem(L2)) cn.setItem(L2, y);
      else e.dimension.spawnItem(y, e.location);
      hc.setItem(j2);
    }
    h.remove();
  }
  s.bank = 0;
  e.setDynamicProperty("ia:bank", 0);
  e.setDynamicProperty("ia:hold", undefined);
  return true;
}
function pkt(e, s) {
  if (T % 20 == 0 && e.nameTag) {
    e.setDynamicProperty("ia:name", e.nameTag);
    e.nameTag = "";
  }
  if (!s.mg && T % 20 == 0) s.mg = mig(e, s);
  var rr = e.getComponent("minecraft:rideable");
  if (s.pk > T) {
    if (rr && !rr.getRiders().length) e.triggerEvent("ia:board_off");
  } else if (!rr && T % 5 == 0) e.triggerEvent("ia:board_on");
}
function hcn(e, s) {
  if (!hsz(e, s)) return undefined;
  var h = s.he;
  if (!h || !h.isValid) {
    var id = e.getDynamicProperty("ia:hold");
    h = typeof id == "string" ? w.getEntity(id) : undefined;
    if (!h) {
      var nb = e.dimension.getEntities({
        type: "ia:cargo_hold",
        location: e.location,
        maxDistance: 6,
      });
      for (var x of nb)
        if (x.getDynamicProperty("ia:own") == e.id) {
          h = x;
          break;
        }
    }
    if (!h) {
      h = e.dimension.spawnEntity("ia:cargo_hold", e.location);
      h.setDynamicProperty("ia:own", e.id);
    }
    e.setDynamicProperty("ia:hold", h.id);
    s.he = h;
  }
  return inv(h);
}
function rmv(e, s) {
  if (s.he && s.he.isValid) s.he.remove();
  M.delete(e.id);
  L.delete(e.id);
  e.remove();
}
function bks(e, s) {
  var cn = inv(e),
    h = hcn(e, s);
  if (!cn || !h) return;
  var t0 = Math.min.apply(null, s.d.slots.inventory);
  for (var j = 0; j < hsz(e, s); j++) cn.swapItems(t0 + j, j, h);
  s.bank = s.bank ? 0 : 1;
  e.setDynamicProperty("ia:bank", s.bank);
}

function ibn(it) {
  return it.typeId == "minecraft:banner" || /_banner$/.test(it.typeId);
}
function dyc(it) {
  var m = /^minecraft:(\w+)_dye$/.exec(it.typeId);
  return m ? DC[m[1]] : undefined;
}
function bnc(it) {
  var m = /^minecraft:(\w+)_banner$/.exec(it.typeId),
    c = m ? m[1] : null;
  if (!c) {
    var q = /banner\.(\w+)/.exec(it.localizationKey || "");
    c = q ? q[1] : "white";
  }
  c =
    { silver: "light_gray", lightBlue: "light_blue", lightblue: "light_blue" }[
    c
    ] || c;
  return DC[c] !== undefined ? DC[c] : DC.white;
}
function bdc(c) {
  var r = ((c >> 16) & 255) / 255,
    g = ((c >> 8) & 255) / 255,
    b = (c & 255) / 255,
    mx = Math.max(r, g, b),
    mn = Math.min(r, g, b),
    v = mx,
    sa = mx == 0 ? 0 : (mx - mn) / mx,
    h = 0;
  if (mx != mn) {
    if (mx == r) h = ((g - b) / (mx - mn)) % 6;
    else if (mx == g) h = (b - r) / (mx - mn) + 2;
    else h = (r - g) / (mx - mn) + 4;
    h /= 6;
    if (h < 0) h += 1;
  }
  v = cl(v, 0.18, 0.95);
  var i = Math.floor(h * 6),
    f = h * 6 - i,
    p = v * (1 - sa),
    q = v * (1 - f * sa),
    t = v * (1 - (1 - f) * sa),
    a1,
    a2,
    a3;
  switch (i % 6) {
    case 0:
      a1 = v;
      a2 = t;
      a3 = p;
      break;
    case 1:
      a1 = q;
      a2 = v;
      a3 = p;
      break;
    case 2:
      a1 = p;
      a2 = v;
      a3 = t;
      break;
    case 3:
      a1 = p;
      a2 = q;
      a3 = v;
      break;
    case 4:
      a1 = t;
      a2 = p;
      a3 = v;
      break;
    default:
      a1 = v;
      a2 = p;
      a3 = q;
  }
  return (
    (Math.round(a1 * 255) << 16) |
    (Math.round(a2 * 255) << 8) |
    Math.round(a3 * 255)
  );
}
function idc(it) {
  var d = it.getComponent("minecraft:dyeable");
  if (!d || !d.color) return -1;
  var c = d.color;
  return (
    (Math.round(c.red * 255) << 16) |
    (Math.round(c.green * 255) << 8) |
    Math.round(c.blue * 255)
  );
}
function okk(ty, it, s, sn) {
  var id = it.typeId;
  if (ty == "boiler") return ft(it) > 0;
  if (ty == "booster") return id == "minecraft:firework_rocket";
  if (ty == "weapon") return !!WPI[id];
  if (ty == "upgrade") return !!UPG[id] && !sn[id];
  if (ty == "banner") return ibn(it);
  if (ty == "dye") return dyc(it) !== undefined;
  return true;
}
function tcg(e, s, it) {
  var cn = inv(e);
  for (var p of s.d.slots.inventory || []) {
    if (p >= cn.size) break;
    if (!cn.getItem(p)) {
      cn.setItem(p, it);
      return;
    }
  }
  var h = hcn(e, s);
  if (h)
    for (var j = 0; j < hsz(e, s); j++)
      if (!h.getItem(j)) {
        h.setItem(j, it);
        return;
      }
  e.dimension.spawnItem(it, e.location);
}
function wrn(e, ty) {
  var p = e.dimension.getPlayers({
    location: e.location,
    maxDistance: 8,
    closest: 1,
  })[0];
  if (p)
    say(p, {
      translate: "ia.msg.wrong_slot",
      with: { rawtext: [{ translate: "immersive_aircraft.slot." + ty }] },
    });
}
function vld(e, s) {
  var cn = inv(e);
  if (!cn) return;
  var sn = {};
  for (var ty in s.d.slots) {
    if (ty == "inventory") continue;
    for (var p of s.d.slots[ty]) {
      var it = cn.getItem(p);
      if (!it) continue;
      var ok = okk(ty, it, s, sn);
      if (ty == "upgrade" && ok) sn[it.typeId] = 1;
      var mx = ty == "boiler" || ty == "booster" ? 64 : 1;
      if (!ok) {
        cn.setItem(p);
        tcg(e, s, it);
        wrn(e, ty);
      } else if (it.amount > mx) {
        var ex = it.clone();
        ex.amount = it.amount - mx;
        it.amount = mx;
        cn.setItem(p, it);
        tcg(e, s, ex);
      }
    }
  }
}
function usn(cn, s, skip) {
  var sn = {};
  for (var q of s.d.slots.upgrade || []) {
    if (q == skip) continue;
    var u = cn.getItem(q);
    if (u) sn[u.typeId] = 1;
  }
  return sn;
}
function cani(e, s, it, nf) {
  var cn = inv(e);
  if (!cn || !it) return false;
  var sn = usn(cn, s, -1);
  for (var ty in s.d.slots) {
    if (ty == "inventory") continue;
    if (nf && (ty == "boiler" || ty == "booster")) continue;
    if (!okk(ty, it, s, sn)) continue;
    for (var p2 of s.d.slots[ty]) {
      var o = cn.getItem(p2);
      if (!o) return true;
      if (
        (ty == "boiler" || ty == "booster") &&
        o.isStackableWith(it) &&
        o.amount < o.maxAmount
      )
        return true;
    }
  }
  return false;
}
function ins(e, s, p) {
  var pc = p.getComponent("minecraft:inventory").container,
    sl = p.selectedSlotIndex,
    it = pc.getItem(sl),
    cn = inv(e);
  if (!it || !cn) return;
  var cr = p.getGameMode() == GameMode.Creative,
    sn = usn(cn, s, -1);
  for (var ty in s.d.slots) {
    if (ty == "inventory") continue;
    if (!okk(ty, it, s, sn)) continue;
    var mx = ty == "boiler" || ty == "booster" ? 64 : 1;
    for (var p2 of s.d.slots[ty]) {
      var o = cn.getItem(p2),
        n = 0;
      if (!o) {
        n = Math.min(mx, it.amount);
        var y = it.clone();
        y.amount = n;
        cn.setItem(p2, y);
      } else if (
        (ty == "boiler" || ty == "booster") &&
        o.isStackableWith(it) &&
        o.amount < o.maxAmount
      ) {
        n = Math.min(it.amount, o.maxAmount - o.amount);
        o.amount += n;
        cn.setItem(p2, o);
      }
      if (n > 0) {
        if (!cr) {
          if (it.amount > n) {
            it.amount -= n;
            pc.setItem(sl, it);
          } else pc.setItem(sl);
        }
        e.dimension.playSound("random.click", e.location, {
          volume: 0.6,
          pitch: 1.4,
        });
        say(p, {
          rawtext: [
            { text: "§a" },
            { translate: "immersive_aircraft.slot." + ty },
          ],
        });
        return;
      }
    }
  }
}

function flh(e) {
  var bb = e.getAABB(),
    c = bb.center,
    ex = bb.extent,
    x0 = Math.floor(c.x - ex.x + 0.001),
    x1 = Math.ceil(c.x + ex.x - 0.001),
    y0 = Math.floor(c.y - ex.y + 0.001),
    y1 = Math.ceil(c.y + ex.y - 0.001),
    z0 = Math.floor(c.z - ex.z + 0.001),
    z1 = Math.ceil(c.z + ex.z - 0.001),
    mn = c.y - ex.y + 0.001,
    h = 0,
    dm = e.dimension;
  for (var x = x0; x < x1; x++)
    for (var y = y0; y < y1; y++)
      for (var z = z0; z < z1; z++) {
        var b = dm.getBlock(v3(x, y, z));
        if (!b || !(b.isLiquid || b.isWaterlogged)) continue;
        var ab = dm.getBlock(v3(x, y + 1, z)),
          sf = y + (ab && (ab.isLiquid || ab.isWaterlogged) ? 1 : 0.8889);
        if (sf >= mn) h = Math.max(h, sf - mn);
      }
  return h;
}
function spp(e, s, k, v) {
  var o = s.pc[k];
  if (o === v) return;
  if (typeof v == "number" && typeof o == "number" && Math.abs(o - v) < 0.0005)
    return;
  s.pc[k] = v;
  e.setProperty(k, v);
}
function syn(e, s, rs) {
  var c = gc(),
    og = e.isOnGround,
    wx = og ? v3(0, 0, 0) : wnd(e, s),
    h = s.ht,
    wb = h > 0 ? ((Math.sin(h) * h * Math.max(0, s.dw)) / 10) * s.hd : 0;
  spp(e, s, "ia:rx", cl(s.pit + wx.z + wb, -720, 720));
  spp(e, s, "ia:rz", cl(s.rol + wx.x, -720, 720));
  spp(e, s, "ia:ix", cl(s.px.s, -1, 1));
  spp(e, s, "ia:iy", cl(s.py.s, -1, 1));
  spp(e, s, "ia:iz", cl(s.pz.s, -1, 1));
  spp(e, s, "ia:engine", cl(pw(e, s), 0, 1));
  spp(e, s, "ia:prop", cl(psp(e, s), 0, 4));
  spp(e, s, "ia:spin", cl(s.su, 0, 16));
  spp(e, s, "ia:health", cl(s.hp, 0, 1));
  var vv = sv(s);
  spp(e, s, "ia:speed", cl(ln(vv), 0, 16));
  spp(e, s, "ia:vy", cl(vv.y, -16, 16));
  spp(e, s, "ia:fluid", cl(s.fh, 0, 8));
  spp(e, s, "ia:boost", Math.round(cl(s.bo, 0, 100000)));
  spp(e, s, "ia:trails", !!c.enableTrails);
  spp(e, s, "ia:dye", s.dye >= 0 ? bdc(s.dye) : -1);
  var cn = inv(e),
    sa = 16383998,
    bn = -1;
  if (cn) {
    var ds = (s.d.slots.dye || [])[0];
    if (ds !== undefined) {
      var di = cn.getItem(ds);
      if (di && dyc(di) !== undefined) sa = dyc(di);
    }
    var bs = (s.d.slots.banner || [])[0];
    if (bs !== undefined) {
      var bi = cn.getItem(bs);
      if (bi && ibn(bi)) bn = bnc(bi);
    }
  }
  spp(e, s, "ia:sail", sa);
  spp(e, s, "ia:banner", bn);
  var R = null;
  for (var k = 0; k < 2; k++) {
    var W = s.wp[k];
    spp(e, s, "ia:wpn" + k, W ? WPI[W.id].id : 0);
    if (W) {
      var g = gun(rs, W.off),
        dw = g ? g.getViewDirection() : fw(s);
      R = R || tp(rmx(s));
      var lc = mv(R, dw);
      spp(
        e,
        s,
        "ia:aim" + k + "y",
        wr((Math.atan2(-lc.x, lc.z) * 180) / Math.PI),
      );
      spp(
        e,
        s,
        "ia:aim" + k + "p",
        cl((Math.asin(cl(-lc.y, -1, 1)) * 180) / Math.PI, -90, 90),
      );
      var q = W.ls[0];
      if (q) spp(e, s, "ia:spin" + k, ((q.rl * 180) / Math.PI) % 360);
    }
  }
  if (s.k == "warship") {
    spp(e, s, "ia:tyaw", cl(-s.tyw.s, -180, 180));
    spp(e, s, "ia:tpitch", cl(-s.tpt.s, -180, 180));
    spp(e, s, "ia:tcd", cl(s.tcd, 0, 1));
  }
  var hc = e.getComponent("minecraft:health"),
    hv = Math.max(1, Math.ceil(s.hp * 20));
  if (hc && s.hpo != hv) {
    hc.setCurrentValue(hv);
    s.hpo = hv;
  }
}

function myw(e, s, p, q, m) {
  if (q.mf && s.d.adapt && m == 0) {
    var sp = P(s, "yawSpeed");
    return cl((-wr(p.getRotation().y - s.yaw) - s.px.s * sp * 8) / 20, -1, 1);
  }
  return m;
}
function mpt(e, s, p, q, m) {
  if (q.mf && s.d.adapt && s.d.cls == "airplane" && !e.isOnGround && m == 0) {
    var sp = P(s, "pitchSpeed");
    return cl((p.getRotation().x - s.pit - s.pz.s * sp * 8) / 20, -1, 1);
  }
  return m;
}
function pas(id) {
  var n = id.replace("minecraft:", "");
  if (/_block$|grass_path|_planks|_log|_slab|_stairs|_wall/.test(n))
    return false;
  return PSB.test(n);
}
function dsm(e, s, p) {
  var rr = e.getComponent("minecraft:rideable");
  if (!rr) return;
  rr.ejectRider(p);
  s.aly = 0;
  var bw = s.d.size[0] * Math.SQRT2,
    pw2 = 0.6 * Math.SQRT2,
    of = (bw + pw2 + 1e-5) / 2,
    yw = rd(s.yaw + s.d.dismountRot),
    x = -Math.sin(yw),
    z = Math.cos(yw),
    n = Math.max(Math.abs(x), Math.abs(z)),
    l = e.location,
    t = v3(l.x + (x * of) / n, l.y, l.z + (z * of) / n),
    dm = e.dimension;
  sy.run(function () {
    if (!p.isValid) return;
    var b0 = dm.getBlock(t),
      b1 = dm.getBlock(v3(t.x, t.y + 1, t.z)),
      bl = dm.getBlock(v3(t.x, t.y - 1, t.z));
    if (
      b0 &&
      b1 &&
      bl &&
      (b0.isAir || b0.isLiquid || pas(b0.typeId)) &&
      (b1.isAir || b1.isLiquid || pas(b1.typeId)) &&
      !bl.isAir &&
      !bl.isLiquid
    )
      p.teleport(v3(t.x, Math.floor(t.y), t.z));
  });
}
function lki(p) {
  var x = p.getRotation().x;
  return cl((-x - 12) / 28, 0, 1) - cl((x - 12) / 28, 0, 1);
}
function apt(e, s, p) {
  var sp = P(s, "pitchSpeed");
  return cl((p.getRotation().x - s.pit - s.pz.s * sp * 8) / 20, -1, 1);
}
function tpl(e, s, rs) {
  var r2 = rdr(e),
    pi = r2[0];
  if (!isP(pi)) {
    s.mx = 0;
    s.my = 0;
    s.mz = 0;
    s.tx = 0;
    s.lu = 0;
    return;
  }
  var m2 = pi.inputInfo.getMovementVector(),
    q2 = pst(pi),
    fx = cl(m2.x, -1, 1),
    fy = cl(m2.y, -1, 1);
  s.mx = myw(e, s, pi, q2, fx);
  if (s.d.cls == "airplane") {
    s.my = fy;
    s.tx = Math.max(0, fy);
    s.mz = apt(e, s, pi);
    s.lu = cl((-pi.getRotation().x - 2) / 18, 0, 1);
  } else {
    s.my = lki(pi);
    s.mz = fy;
  }
}

function tk(e, s) {
  var c = gc(),
    d = s.d,
    rs = rdr(e),
    pi = rs[0],
    l = e.location,
    og = e.isOnGround,
    iw = e.isInWater;
  upg(e, s);
  if (s.k == "bamboo_hopper") s.fh = flh(e);
  if (s.lm && s.pl) {
    var ax = l.x - s.pl.x,
      ay = l.y - s.pl.y,
      az = l.z - s.pl.z,
      hx = Math.abs(s.lm.x) > 0.015 && Math.abs(ax) < Math.abs(s.lm.x) * 0.5,
      hz = Math.abs(s.lm.z) > 0.015 && Math.abs(az) < Math.abs(s.lm.z) * 0.5,
      vc =
        Math.abs(ay - s.lm.y) > 1e-3 && Math.abs(ay) < Math.abs(s.lm.y) - 1e-3;
    if ((hx || hz) && ((s.hop || 0) > 0 || (og && stp(e, s, l)))) {
      hx = false;
      hz = false;
    }
    if (hx || hz || vc) {
      var er = Math.sqrt(
        (ax - s.lm.x) * (ax - s.lm.x) +
        (ay - s.lm.y) * (ay - s.lm.y) +
        (az - s.lm.z) * (az - s.lm.z),
      ),
        mp = ln(s.lm);
      if (er <= mp + 1e-6) {
        var co = er - (vc ? Math.abs(s.lg) : 0) - 0.05;
        if (co > 0) {
          var rp = 1 - (s.ht + 1) / 10;
          if (rp > 1e-4) col(e, s, co * rp * rp, pi);
        }
      }
      if (hx) s.vx = 0;
      if (hz) s.vz = 0;
      if (vc) s.vy = 0;
    }
  }
  if (!e.isValid) return;
  if (s.hop > 0) {
    s.hop--;
    if (l.y < s.hpy) s.vy = Math.max(s.vy, 0.18);
  }
  s.prol = s.rol;
  if (og) s.rol *= 0.9;
  else s.rol = -s.px.s * P(s, "rollFactor") * (1 - s.iwl);
  if (isNaN(s.vx) || isNaN(s.vy) || isNaN(s.vz)) {
    s.vx = 0;
    s.vy = 0;
    s.vz = 0;
  }
  s.iwl = iw ? Math.min(1, s.iwl + 0.05) : Math.max(0, s.iwl - 0.05);
  wpu(e, s);
  if (s.tc % 10 == 0) {
    s.l2x = s.lx;
    s.l2y = s.ly;
    s.l2z = s.lz;
    s.lx = l.x;
    s.ly = l.y;
    s.lz = l.z;
    if (s.l2x == 0 && s.l2y == 0 && s.l2z == 0) {
      s.l2x = s.lx;
      s.l2y = s.ly;
      s.l2z = s.lz;
    }
  }
  if (rs.length) tpl(e, s, rs);
  else {
    s.mx = 0;
    s.my = 0;
    s.mz = 0;
  }
  rs = rdr(e);
  pi = rs[0];
  if (s.ht > 0) s.ht--;
  if (s.dw > 0) s.dw = Math.max(0, s.dw - 1);
  if (s.fc > 0) s.fc--;
  s.tc++;
  if (ilv(e) && s.tc % 10 == 0) {
    hrt(e, s, 4, { cause: "lava" });
    if (!e.isValid) return;
  }
  var b0 = s.bo;
  if (s.bo > 0) s.bo--;
  uvl(e, s, rs);
  if (b0 > 0) abo(s);
  uct(e, s, rs);
  if (T % 2 == 0) aen(e, s, rs);
  uI(s.px, s.mx);
  uI(s.py, s.my);
  uI(s.pz, s.mz);
  if (
    c.regenerateHealthEveryNTicks > 0 &&
    w.getAbsoluteTime() % c.regenerateHealthEveryNTicks == 0 &&
    s.hp < 1
  ) {
    s.hp = Math.min(1, s.hp + 0.05 / P(s, "durability"));
    e.setDynamicProperty("ia:hp", s.hp);
  }
  if (isP(pi)) {
    sco("ia_distance", pi, Math.floor(ln(sv(s)) * 100 + 0.5));
    sco("ia_time", pi, 1);
  }
  s.ep.st = P(s, "acceleration") / d.reaction;
  uI(s.ep, s.tg * (iw && !d.underwater ? 0.1 : 1));
  s.su = Math.max(0, s.su + (s.ep.v - s.ep.l) - 0.01);
  s.er = (s.er + psp(e, s)) % 1000;
  if (!rs.length && s.tg > 0) {
    s.tg = 0;
    e.setDynamicProperty("ia:tg", 0);
  }
  s.es += pw(e, s) * 0.25;
  if (s.es > 1) {
    s.es--;
    if (flw(e, s)) s.es -= Math.floor(Math.random() * 2);
    e.dimension.playSound(
      "ia." + d.sound,
      v3(l.x, l.y + d.size[1] * 0.5, l.z),
      { volume: Math.min(1, 0.25 + s.su), pitch: Math.random() * 0.1 + 0.95 },
    );
  }
  if (s.fu.length) cfu(s, fcn(s));
  if (rs.length) {
    rfl(e, s, pi);
    fms(e, s, pi);
  } else s.lfs = "N";
  s.mw = Math.max(0, s.mw - 1);
  for (var k in s.cu) s.cu[k] = Math.max(0, s.cu[k] - 1);
  hwa(e, s);
  if (d.cls == "gyrodyne" && isP(pi)) {
    var xh = pi.getComponent("minecraft:player.exhaustion");
    if (xh)
      xh.setCurrentValue(
        Math.min(xh.effectiveMax, xh.currentValue + fcn(s) * 0.025),
      );
  }
  if (s.k == "warship") wst(e, s, rs);
  if (hsz(e, s) && T % 5 == 0) {
    hcn(e, s);
    var hh = s.he;
    if (
      hh &&
      hh.isValid &&
      (hh.dimension.id != e.dimension.id ||
        ln(ad(hh.location, sc(l, -1))) > 0.5)
    )
      hh.teleport(l, { dimension: e.dimension });
  }
  if (T % 10 == 0) vld(e, s);
  s.pit = s.pit - Math.floor((s.pit + 180) / 360) * 360;
  s.yaw = wr(s.yaw);
  var cv = e.getVelocity();
  e.applyImpulse(v3(s.vx - cv.x, s.vy - cv.y, s.vz - cv.z));
  e.setRotation({ x: 0, y: s.yaw });
  s.pl = e.location;
  s.lm = v3(s.vx, s.vy, s.vz);
  syn(e, s, rs);
  if (T % 20 == 0) {
    e.setDynamicProperty("ia:fu", s.fu.join(","));
    e.setDynamicProperty("ia:p", s.pit);
  }
}

function hnd(p) {
  var eq = p.getComponent("minecraft:equippable");
  return eq ? eq.getEquipment(EquipmentSlot.Mainhand) : undefined;
}
function pcm(p) {
  var v = p.getDynamicProperty("ia:cam");
  return v === undefined ? !!gc().useThirdPersonByDefault : !!v;
}
function hud(e, s, p) {
  var c = gc(),
    o = [],
    q = pw(e, s);
  if (s.d.gui == "engine" && c.showHotbarEngineGauge) {
    var f = Math.round(q * 10),
      tg = Math.round(s.tg * 10),
      b = "";
    for (var i = 0; i < 10; i++)
      b += (i < f ? "§a" : i < tg ? "§e" : "§8") + "|";
    o.push({
      rawtext: [
        { text: "§6⚙ " },
        { translate: "ia.hud.engine" },
        { text: " §8[" + b + "§8] §f" + Math.round(q * 100) + "%" },
      ],
    });
  }
  var hd = P(s, "hud") == 0,
    dl = P(s, "dials") == 0;
  if (hd || dl) {
    var v = sv(s),
      sp = v3(v.x * 20, v.y * 20, v.z * 20),
      dr = v3(
        -Math.sin(rd(s.yaw)) * Math.cos(rd(s.pit)),
        -Math.sin(rd(s.pit)),
        Math.cos(rd(s.yaw)) * Math.cos(rd(s.pit)),
      ),
      as = dt(sp, dr),
      sl = SEA[e.dimension.id];
    if (sl === undefined) sl = 63;
    var al = e.location.y - sl,
      vs = v.y * 10,
      hg = (((s.yaw + 180) % 360) + 360) % 360,
      cd = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"][
        Math.round(hg / 45) % 8
      ];
    var ar =
      vs < -10 ? "▼▼" : vs < -1 ? "▼" : vs > 10 ? "▲▲" : vs > 1 ? "▲" : "-",
      wn = "";
    if (s.mw > 0) wn += (T % 8 < 4 ? "§c" : "§6") + "[WARNING]";
    for (var k in s.cu)
      if (s.cu[k] > 0) wn += "§e[" + k.replace("_", " ") + "]";
    if (hd)
      o.push({
        text:
          "§6AS §f" +
          as.toFixed(1) +
          "  §6ALT §f" +
          al.toFixed(1) +
          ar +
          "  §6HDG §f" +
          Math.round(hg) +
          "° " +
          cd +
          "  §6ATT §f" +
          Math.round(-s.pit) +
          "°/" +
          Math.round(s.rol) +
          "° " +
          wn,
      });
    if (dl)
      o.push({
        text:
          "§7◷ §f" +
          Math.round(as) +
          " §7AS   ◷ §f" +
          Math.round(al) +
          " §7ALT   ◷ §f" +
          vs.toFixed(1) +
          " §7VS   ◷ §f" +
          cd +
          "   " +
          (s.mw > 0 ? "§c● MAIN" : "§8● MAIN") +
          (s.cu.VOID ? " §6● VOID" : " §8● VOID") +
          (s.cu.DAMAGED ? " §6● DMG" : " §8● DMG"),
      });
    if (s.mw > 0 && T % 4 == 0) {
      s.cw = !s.cw;
      p.playSound("note.bell", { pitch: s.cw ? 1.26 : 2, volume: 1 });
    } else if (
      s.mw == 0 &&
      (s.cu.PULL_UP || s.cu.VOID || s.cu.DAMAGED) &&
      T % 20 == 0
    )
      p.playSound("note.bell", { pitch: 0.667, volume: 1 });
  }
  if (o.length) {
    var rt = [];
    for (var i2 = 0; i2 < o.length; i2++) {
      if (i2) rt.push({ text: "\n" });
      rt.push(o[i2]);
    }
    p.onScreenDisplay.setActionBar({ rawtext: rt });
  }
}
function ptk(p) {
  var q = pst(p),
    rc = p.getComponent("minecraft:riding"),
    r = rc ? rc.entityRidingOn : undefined;
  if (r && isA(r)) {
    var s = gs(r);
    if (q.rid != r.id) {
      q.rid = r.id;
      q.at = 0;
      p.inputPermissions.setPermissionCategory(IPC.Dismount, true);
      if (pcm(p)) {
        p.camera.setCamera("minecraft:third_person");
        q.cam = true;
      }
      say(p, {
        translate:
          s.d.cls == "airplane"
            ? "ia.controls.airplane"
            : s.d.cls == "gyrodyne"
              ? "ia.controls.gyrodyne"
              : "ia.controls.rotorcraft",
      });
    }
    q.at++;
    var z = scp(s);
    if (z && !q.sc) {
      q.sc = true;
      p.camera.setCamera("minecraft:first_person");
      p.camera.setFov({ fov: 30 });
    } else if (!z && q.sc) {
      q.sc = false;
      p.camera.clear();
      p.runCommand("camera @s fov_clear");
      if (q.cam) p.camera.setCamera("minecraft:third_person");
    }
    if (q.fu > T && q.at > 20 && !hnd(p)) fir(r, s, p);
    var r0 = rdr(r)[0];
    if (r0 && r0.id == p.id && T % 2 == 0 && q.mu < T) hud(r, s, p);
  } else if (!r && p.isSneaking && T % 2 == 0) {
    for (var e of p.dimension.getEntities({
      families: ["ia_aircraft"],
      location: p.location,
      maxDistance: 12,
    })) {
      var s1 = gs(e);
      if (ln(ad(e.location, sc(p.location, -1))) <= s1.d.size[0] + 4 && !rdr(e).length)
        s1.pk = T + 10;
    }
  }
  if (!(r && isA(r)) && q.rid) {
    q.rid = null;
    p.inputPermissions.setPermissionCategory(IPC.Dismount, true);
    if (q.sc) p.runCommand("camera @s fov_clear");
    if (q.cam || q.sc) {
      p.camera.clear();
      q.cam = false;
      q.sc = false;
    }
  }
}

function shw(f, p, cb) {
  f.show(p).then(function (r) {
    if (r.canceled && r.cancelationReason == "UserBusy") {
      sy.runTimeout(function () {
        if (p.isValid) shw(f, p, cb);
      }, 10);
      return;
    }
    cb(r);
  });
}
function nar(p) {
  var rc = p.getComponent("minecraft:riding");
  if (rc && isA(rc.entityRidingOn)) return rc.entityRidingOn;
  var b = null,
    bd = 1e9;
  for (var e of p.dimension.getEntities({
    families: ["ia_aircraft"],
    location: p.location,
    maxDistance: 8,
  })) {
    var d = ln(ad(e.location, sc(p.location, -1)));
    if (d < bd) {
      bd = d;
      b = e;
    }
  }
  return b;
}
function pan(p, t) {
  var e = t && t.isValid ? t : nar(p);
  if (!e) {
    p.sendMessage({ translate: "ia.panel.no_aircraft" });
    return;
  }
  var s = gs(e),
    rs = rdr(e),
    me = rs.some(function (x) {
      return x.id == p.id;
    }),
    q = pst(p),
    f = new ActionFormData(),
    a = [],
    bd = [];
  upg(e, s);
  var nm = e.getDynamicProperty("ia:name");
  f.title(
    typeof nm == "string" && nm
      ? { text: nm }
      : { translate: "entity." + e.typeId + ".name" },
  );
  bd.push(
    { text: "§6" },
    { translate: "ia.panel.health" },
    { text: ": §f" + Math.round(s.hp * 100) + "%\n" },
  );
  if (s.d.fuelType == "fat")
    bd.push(
      { text: "§6" },
      { translate: "ia.panel.food" },
      { text: ": §f" + (ut(e, s) > 0 ? "OK" : "-") + "\n" },
    );
  else if (s.fu.length) {
    var tf = 0;
    for (var x of s.fu) tf += x;
    bd.push(
      { text: "§6" },
      { translate: "ia.panel.fuel" },
      { text: ": " + (flw(e, s) ? "§c" : "§f") },
      { translate: "ia.panel.seconds", with: [String(Math.round(tf / 20))] },
      { text: "\n" },
    );
  }
  bd.push(
    { text: "§6" },
    { translate: "ia.panel.engine" },
    { text: ": §f" + Math.round(pw(e, s) * 100) + "% §7(" },
    { translate: "ia.panel.target" },
    { text: " " + Math.round(s.tg * 100) + "%)\n" },
  );
  for (var k in s.wp) {
    var W = s.wp[k],
      am = 0;
    for (var q2 of W.ls) am += Math.max(0, q2.ammo);
    bd.push(
      { text: "§6" },
      { translate: "item.ia:" + W.id.slice(3) },
      { text: ": §f" },
      { translate: "ia.panel.ammo" },
      { text: " " + am + "\n" },
    );
  }
  var st = [];
  for (var kk of [
    "engineSpeed",
    "friction",
    "acceleration",
    "durability",
    "fuel",
    "wind",
    "stabilizer",
  ]) {
    var u = s.u[kk];
    if (Math.abs(u - 1) > 1e-4) {
      var pc = Math.round((u - 1) * 100);
      st.push(
        { text: pc * (SPOS[kk] ? 1 : -1) > 0 ? "§a" : "§c" },
        {
          translate: "immersive_aircraft.upgrade." + kk.toLowerCase(),
          with: [(pc >= 0 ? "+" : "") + pc],
        },
        { text: "\n" },
      );
    }
  }
  if (s.u.hud == 0)
    st.push(
      { text: "§a" },
      { translate: "immersive_aircraft.upgrade.hud" },
      { text: "\n" },
    );
  if (s.u.dials == 0)
    st.push(
      { text: "§a" },
      { translate: "immersive_aircraft.upgrade.dials" },
      { text: "\n" },
    );
  if (st.length) {
    bd.push({ text: "§6" }, { translate: "ia.panel.stats" }, { text: ":\n" });
    bd = bd.concat(st);
  }
  bd.push({ text: "\n§6" }, { translate: "ia.panel.slots" }, { text: ":\n" });
  var cn0 = inv(e);
  for (var ty in s.d.slots) {
    var r2 = s.d.slots[ty].filter(function (i) {
      return i < (cn0 ? cn0.size : 0);
    });
    if (!r2.length) continue;
    var rg =
      r2.length > 1
        ? r2[0] + 1 + "-" + (r2[r2.length - 1] + 1)
        : String(r2[0] + 1);
    if (ty == "inventory")
      bd.push(
        { text: "§7" },
        {
          translate: "ia.panel.cargo",
          with: [String(r2[0] + 1), String(r2[r2.length - 1] + 1)],
        },
        { text: "\n" },
      );
    else
      bd.push(
        { text: "§7" },
        { translate: "ia.panel.slot_n", with: [rg] },
        { text: ": §f" },
        { translate: "immersive_aircraft.slot." + ty },
        { text: "\n" },
      );
  }
  f.body({ rawtext: bd });
  f.button({ translate: "ia.panel.manage" });
  a.push("m");
  if (hsz(e, s)) {
    f.button({ translate: "ia.panel.cargo_bank", with: [String(s.bank + 1)] });
    a.push("bk");
  }
  if (me && cbo(e, s)) {
    f.button({ translate: "ia.panel.boost" });
    a.push("bo");
  }
  if (me) {
    f.button({ translate: "ia.panel.dismount" });
    a.push("dm");
  }
  f.button({ translate: q.mf ? "ia.panel.mouse_on" : "ia.panel.mouse_off" });
  a.push("mf");
  f.button({
    translate: pcm(p) ? "ia.panel.camera_on" : "ia.panel.camera_off",
  });
  a.push("cm");
  f.button({ translate: "ia.panel.controls" });
  a.push("ct");
  if (p.commandPermissionLevel >= CommandPermissionLevel.GameDirectors) {
    f.button({ translate: "ia.panel.config" });
    a.push("cf");
  }
  f.button({ translate: "ia.panel.close" });
  a.push("x");
  shw(f, p, function (r) {
    if (r.canceled || r.selection === undefined || !e.isValid) return;
    var x = a[r.selection];
    if (x == "m") slm(p, e);
    else if (x == "bk") {
      bks(e, s);
      say(p, {
        translate: "ia.panel.cargo_bank_now",
        with: [String(s.bank + 1)],
      });
    } else if (x == "bo") {
      if (cbo(e, s)) {
        bst(e, s);
        p.dimension.playSound("firework.launch", p.location);
      }
    } else if (x == "dm") dsm(e, s, p);
    else if (x == "mf") {
      q.mf = !q.mf;
      p.setDynamicProperty("ia:mf", q.mf);
      say(p, { translate: q.mf ? "ia.panel.mouse_on" : "ia.panel.mouse_off" });
    } else if (x == "cm") {
      var nv = !pcm(p);
      p.setDynamicProperty("ia:cam", nv);
      if (me) {
        if (nv) {
          p.camera.setCamera("minecraft:third_person");
          q.cam = true;
        } else if (q.cam) {
          p.camera.clear();
          q.cam = false;
        }
      }
      pan(p);
    } else if (x == "ct") ctl(p);
    else if (x == "cf") cfg(p);
  });
}
function slm(p, e) {
  var s = gs(e),
    cn = inv(e),
    f = new ActionFormData(),
    a = [];
  if (!cn) return;
  f.title({ translate: "ia.panel.manage" });
  for (var ty in s.d.slots) {
    if (ty == "inventory") continue;
    for (var i of s.d.slots[ty]) {
      var it = cn.getItem(i);
      f.button({
        rawtext: [
          { text: "§8" + (i + 1) + " §r" },
          { translate: "immersive_aircraft.slot." + ty },
          { text: "§r: " },
          it
            ? { translate: it.localizationKey }
            : { translate: "ia.panel.empty" },
          { text: it && it.amount > 1 ? " x" + it.amount : "" },
        ],
      });
      a.push([ty, i]);
    }
  }
  f.button({ translate: "ia.panel.deposit" });
  a.push(["dep"]);
  f.button({ translate: "ia.panel.take_all" });
  a.push(["all"]);
  f.button({ translate: "ia.panel.back" });
  a.push(["bk"]);
  shw(f, p, function (r) {
    if (r.canceled || r.selection === undefined || !e.isValid) return;
    var x = a[r.selection],
      pc = p.getComponent("minecraft:inventory").container,
      sl = p.selectedSlotIndex,
      hd = pc.getItem(sl);
    if (x[0] == "bk") {
      pan(p);
      return;
    }
    if (x[0] == "dep") {
      if (hd) {
        tcg(e, s, hd);
        pc.setItem(sl);
      }
      slm(p, e);
      return;
    }
    if (x[0] == "all") {
      var cs = [
        [
          cn,
          (s.d.slots.inventory || []).filter(function (i) {
            return i < cn.size;
          }),
        ],
      ],
        h = hcn(e, s);
      if (h) {
        var hs = [];
        for (var j = 0; j < hsz(e, s); j++) hs.push(j);
        cs.push([h, hs]);
      }
      for (var c2 of cs)
        for (var j2 of c2[1]) {
          var y = c2[0].getItem(j2);
          if (!y) continue;
          c2[0].setItem(j2, pc.addItem(y));
        }
      slm(p, e);
      return;
    }
    var ty = x[0],
      i = x[1],
      cur = cn.getItem(i),
      sn = usn(cn, s, i);
    if (hd && okk(ty, hd, s, sn)) {
      var mx = ty == "boiler" || ty == "booster" ? 64 : 1,
        n = Math.min(mx, hd.amount),
        y2 = hd.clone();
      y2.amount = n;
      cn.setItem(i, y2);
      if (hd.amount > n) {
        hd.amount -= n;
        pc.setItem(sl, hd);
        if (cur) {
          var lf = pc.addItem(cur);
          if (lf) p.dimension.spawnItem(lf, p.location);
        }
      } else pc.setItem(sl, cur);
    } else if (cur) cn.setItem(i, pc.addItem(cur));
    slm(p, e);
  });
}
function ctl(p) {
  var f = new MessageFormData();
  f.title({ translate: "ia.controls.title" });
  f.body({ translate: "ia.controls.all" });
  f.button1({ translate: "ia.panel.back" });
  f.button2({ translate: "ia.panel.close" });
  shw(f, p, function (r) {
    if (r.selection === 0) pan(p);
  });
}
function lbl(k) {
  return OPT.indexOf(k) >= 0
    ? {
      rawtext: [
        { translate: "option.immersive_aircraft." + k },
        { text: " §7(" + k + ")" },
      ],
    }
    : k;
}
function cfg(p) {
  if (p.commandPermissionLevel < CommandPermissionLevel.GameDirectors) {
    say(p, { translate: "ia.msg.no_permission" });
    return;
  }
  var c = gc(),
    bs = gps(),
    f = new ModalFormData();
  f.title({ translate: "ia.config.title" });
  for (var k of CB) f.toggle(lbl(k), { defaultValue: !!c[k] });
  for (var k2 of CN)
    f.textField(lbl(k2), String(CFD[k2]), { defaultValue: String(c[k2]) });
  for (var k3 of CJ)
    f.textField(lbl(k3), "{}", { defaultValue: JSON.stringify(c[k3]) });
  shw(f, p, function (r) {
    if (r.canceled || !r.formValues) return;
    var v = r.formValues,
      o = {},
      i = 0;
    for (var k of CB) o[k] = !!v[i++];
    for (var k2 of CN) {
      var n = parseFloat(v[i++]);
      o[k2] = isNaN(n) ? CFD[k2] : n;
    }
    for (var k3 of CJ) {
      try {
        o[k3] = JSON.parse(v[i++]);
      } catch (x) {
        o[k3] = CFD[k3];
      }
    }
    var ov = {};
    for (var k4 in o)
      if (JSON.stringify(o[k4]) != JSON.stringify(bs[k4])) ov[k4] = o[k4];
    w.setDynamicProperty("ia:cfg", JSON.stringify(ov));
    cc = null;
    say(p, { translate: "ia.msg.settings_saved" });
  });
}

function dvm(p) {
  var f = new ActionFormData(),
    a = ["cf", "rs", "pn", "ga", "gu", "x"];
  f.title({ translate: "ia.dev.title" });
  f.body({ rawtext: [{ translate: "ia.dev.body" }, { text: "\n§7v" + VER.v + " " + VER.n }] });
  f.button({ translate: "ia.dev.config" });
  f.button({ translate: "ia.dev.reset" });
  f.button({ translate: "ia.dev.panel" });
  f.button({ translate: "ia.dev.give_aircraft" });
  f.button({ translate: "ia.dev.give_parts" });
  f.button({ translate: "ia.panel.close" });
  shw(f, p, function (r) {
    if (r.canceled || r.selection === undefined) return;
    var x = a[r.selection],
      pc = p.getComponent("minecraft:inventory").container;
    if (x == "cf") cfg(p);
    else if (x == "rs") {
      w.setDynamicProperty("ia:cfg", undefined);
      cc = null;
      say(p, { translate: "ia.msg.settings_saved" });
    } else if (x == "pn") pan(p);
    else if (x == "ga" || x == "gu") {
      var ids =
        x == "ga"
          ? Object.keys(AC).map(function (k) {
            return "ia:" + k;
          })
          : Object.keys(UPG).concat(Object.keys(WPI));
      for (var id of ids) {
        var lf = pc.addItem(new IS(id, 1));
        if (lf) p.dimension.spawnItem(lf, p.location);
      }
    }
  });
}

function lor(it, n) {
  var id = it.typeId,
    k = id.slice(3),
    o = [];
  if (AC[k]) {
    o.push({
      rawtext: [
        { text: "§7§o" },
        { translate: "item.immersive_aircraft." + k + ".description" },
      ],
    });
    if (n)
      o.push({
        rawtext: [
          { text: "§7" },
          {
            translate: "immersive_aircraft.tooltip.inventory",
            with: [String(n)],
          },
        ],
      });
  } else if (WPI[id]) {
    o.push({
      rawtext: [
        { text: "§7" },
        { translate: "item.immersive_aircraft.item.weapon" },
      ],
    });
    o.push({
      rawtext: [
        { text: "§7§o" },
        { translate: "item.immersive_aircraft." + k + ".description" },
      ],
    });
  } else if (UPG[id]) {
    o.push({
      rawtext: [
        { text: "§7" },
        { translate: "item.immersive_aircraft.item.upgrade" },
      ],
    });
    for (var st in UPG[id]) {
      var v = UPG[id][st],
        pc = Math.round(v * 100);
      o.push({
        rawtext: [
          { text: v * (SPOS[st] ? 1 : -1) > 0 ? "§a" : "§c" },
          {
            translate: "immersive_aircraft.upgrade." + st.toLowerCase(),
            with: [(pc >= 0 ? "+" : "") + pc],
          },
        ],
      });
    }
  } else return false;
  it.setLore(o);
  return true;
}
function nn(it) {
  return it.maxAmount == 1 ? it.getDynamicProperty("ia:n") || 0 : 0;
}
function plc(p, pos, it) {
  var k = it.typeId.slice(3),
    d = AC[k],
    dm = p.dimension;
  var bl = frb(dm, pos, d.size[0], d.size[1]);
  if (bl) {
    var up = v3(pos.x, pos.y + 1, pos.z);
    if (!frb(dm, up, d.size[0], d.size[1])) pos = up;
    else {
      say(p, {
        rawtext: [
          { text: "§c" },
          { translate: "immersive_aircraft.tooltip.no_space" },
          {
            text:
              " §7(" +
              bl.typeId.replace("minecraft:", "") +
              " @ " +
              bl.location.x +
              " " +
              bl.location.y +
              " " +
              bl.location.z +
              ")",
          },
        ],
      });
      return;
    }
  }
  var e = dm.spawnEntity(it.typeId, pos),
    yw = p.getRotation().y;
  e.setRotation({ x: 0, y: yw });
  var s = gs(e);
  s.yaw = yw;
  if (it.nameTag) e.setDynamicProperty("ia:name", it.nameTag);
  var dc = idc(it);
  if (dc == 15517836) dc = -1;
  s.dye = dc;
  e.setDynamicProperty("ia:dye", dc);
  L.add(e.id);
  ust(e, s, it);
  if (p.getGameMode() != GameMode.Creative) {
    var pc = p.getComponent("minecraft:inventory").container,
      sl = p.selectedSlotIndex,
      x = pc.getItem(sl);
    if (x && x.typeId == it.typeId) {
      if (x.amount > 1) {
        x.amount--;
        pc.setItem(sl, x);
      } else pc.setItem(sl);
    }
  }
}
function stp(e, s, l) {
  var hv = Math.sqrt(s.lm.x * s.lm.x + s.lm.z * s.lm.z);
  if (hv < 0.02) return false;
  var dx = s.lm.x / hv,
    dz = s.lm.z / hv,
    r = s.d.size[0] / 2 + 0.35,
    dm = e.dimension,
    by = Math.floor(l.y + 0.01),
    fx = l.x + dx * r,
    fz = l.z + dz * r,
    b0 = dm.getBlock(v3(fx, by, fz)),
    b1 = dm.getBlock(v3(fx, by + 1, fz)),
    b2 = dm.getBlock(v3(fx, by + 2, fz));
  if (!b0 || b0.isAir || b0.isLiquid || pas(b0.typeId)) return false;
  if (!b1 || !(b1.isAir || b1.isLiquid || pas(b1.typeId))) return false;
  if (b2 && !(b2.isAir || b2.isLiquid || pas(b2.typeId))) return false;
  s.vy = Math.max(s.vy, 0.32);
  s.hop = 10;
  s.hpy = by + 1.05;
  return true;
}
function frb(dm, p, wd, ht) {
  var h = wd / 2;
  for (var x = Math.floor(p.x - h + 1e-3); x <= Math.floor(p.x + h - 1e-3); x++)
    for (var y = Math.floor(p.y + 1e-3); y <= Math.floor(p.y + ht - 1e-3); y++)
      for (
        var z = Math.floor(p.z - h + 1e-3);
        z <= Math.floor(p.z + h - 1e-3);
        z++
      ) {
        var b = dm.getBlock(v3(x, y, z));
        if (b && !b.isAir && !b.isLiquid && !pas(b.typeId)) return b;
      }
  return null;
}
var FO = {
  Up: [0, 1, 0],
  Down: [0, -1, 0],
  North: [0, 0, -1],
  South: [0, 0, 1],
  West: [-1, 0, 0],
  East: [1, 0, 0],
};
function hlp(b, f) {
  var l = b.location;
  if (Math.abs(f.x) <= 1.01 && Math.abs(f.y) <= 1.01 && Math.abs(f.z) <= 1.01)
    return v3(l.x + f.x, l.y + f.y, l.z + f.z);
  return v3(f.x, f.y, f.z);
}
function ppl(b, fc) {
  var o = FO[fc] || FO.Up,
    l = b.location;
  return v3(l.x + o[0] + 0.5, l.y + o[1], l.z + o[2] + 0.5);
}
function fre(dm, p, wd, ht) {
  var h = wd / 2;
  for (var x = Math.floor(p.x - h + 1e-3); x <= Math.floor(p.x + h - 1e-3); x++)
    for (var y = Math.floor(p.y + 1e-3); y <= Math.floor(p.y + ht - 1e-3); y++)
      for (
        var z = Math.floor(p.z - h + 1e-3);
        z <= Math.floor(p.z + h - 1e-3);
        z++
      ) {
        var b = dm.getBlock(v3(x, y, z));
        if (b && !b.isAir && !b.isLiquid && !pas(b.typeId)) return false;
      }
  return true;
}
function plr(p, it) {
  var h = p.getBlockFromViewDirection({
    maxDistance: 5,
    includeLiquidBlocks: true,
    includePassableBlocks: false,
  });
  if (!h) {
    say(p, {
      rawtext: [
        { text: "§c" },
        { translate: "immersive_aircraft.tooltip.no_target" },
      ],
    });
    return;
  }
  plc(p, ppl(h.block, h.face), it);
}
function vdm(e) {
  var v = gc().validDimensions || {},
    k = e.dimension.id;
  return v[k] === undefined ? true : !!v[k];
}
function scn() {
  for (var dn of ["overworld", "nether", "the_end"]) {
    var dm = w.getDimension(dn);
    for (var e of dm.getEntities({ families: ["ia_aircraft"] })) L.add(e.id);
    for (var b of dm.getEntities({ type: "ia:bullet" }))
      if (
        !BU.some(function (x) {
          return x.e.id == b.id;
        })
      )
        b.remove();
    for (var t of dm.getEntities({ type: "ia:tiny_tnt" }))
      if (
        !TN.some(function (x) {
          return x.e.id == t.id;
        })
      )
        TN.push({
          e: t,
          vx: 0,
          vy: 0,
          vz: 0,
          f: t.getProperty("ia:fuse") || 80,
          pl: null,
        });
  }
}

w.beforeEvents.itemUse.subscribe(function (ev) {
  var it = ev.itemStack,
    p = ev.source;
  if (!it) return;
  if (it.typeId.startsWith("ia:") && AC[it.typeId.slice(3)]) {
    ev.cancel = true;
    var q = pst(p);
    if (q.lp == T) return;
    q.lp = T;
    var c2 = it.clone();
    sy.run(function () {
      plr(p, c2);
    });
    return;
  }
  if (it.typeId == "minecraft:firework_rocket") {
    var rc = p.getComponent("minecraft:riding"),
      r = rc ? rc.entityRidingOn : undefined;
    if (r && isA(r)) {
      ev.cancel = true;
      sy.run(function () {
        if (!r.isValid) return;
        var s = gs(r);
        if (cbo(r, s)) {
          bst(r, s);
          p.dimension.playSound("firework.launch", p.location);
        } else say(p, { translate: "immersive_aircraft.slot.booster" });
      });
    }
  }
});
w.beforeEvents.playerInteractWithBlock.subscribe(function (ev) {
  var it = ev.itemStack,
    p = ev.player;
  if (!it || !it.typeId.startsWith("ia:") || !AC[it.typeId.slice(3)]) return;
  ev.cancel = true;
  if (!ev.isFirstEvent) return;
  var q = pst(p);
  if (q.lp == T) return;
  q.lp = T;
  var pos = ppl(ev.block, ev.blockFace),
    c2 = it.clone();
  sy.run(function () {
    plc(p, pos, c2);
  });
});
w.beforeEvents.playerInteractWithEntity.subscribe(function (ev) {
  var e = ev.target,
    p = ev.player;
  if (!isA(e)) return;
  var s = gs(e),
    c = gc(),
    rs = rdr(e),
    me = rs.some(function (x) {
      return x.id == p.id;
    });
  if (me) return;
  var it = ev.itemStack;
  if (it && cani(e, s, it, !p.isSneaking)) {
    ev.cancel = true;
    sy.run(function () {
      if (e.isValid) ins(e, s, p);
    });
    return;
  }
  if (s.hp >= 1 && p.isSneaking) {
    if (rs.length) {
      ev.cancel = true;
      var x = rs[0];
      sy.run(function () {
        var rr = e.getComponent("minecraft:rideable");
        if (rr) rr.ejectRider(x);
      });
    }
    return;
  }
  if (s.hp < 1 && (p.isSneaking || !c.requireShiftForRepair) && !me) {
    ev.cancel = true;
    sy.run(function () {
      rep(e, s, p);
    });
    return;
  }
  if (!vdm(e)) {
    ev.cancel = true;
    sy.run(function () {
      say(p, { translate: "immersive_aircraft.invalid_dimension" });
    });
  }
});
w.beforeEvents.entityHurt.subscribe(function (ev) {
  var e = ev.hurtEntity;
  if (!isA(e)) return;
  ev.cancel = true;
  var ds = ev.damageSource,
    cs = ds.cause,
    hp = ds.damagingEntity;
  if (isP(hp) && hp.isSneaking) {
    var q = pst(hp);
    if (q.lp == T) return;
    q.lp = T;
    sy.run(function () {
      if (e.isValid && hp.isValid) pan(hp, e);
    });
    return;
  }
  if (
    cs == EDC.lava ||
    cs == EDC.fall ||
    cs == EDC.flyIntoWall ||
    cs == EDC.suffocation ||
    cs == EDC.drowning
  )
    return;
  var src = {
    cause: cs,
    damagingEntity: ds.damagingEntity,
    damagingProjectile: ds.damagingProjectile,
  },
    a = ev.damage;
  sy.run(function () {
    if (e.isValid) hrt(e, gs(e), a, src);
  });
});
w.afterEvents.playerSwingStart.subscribe(function (ev) {
  var p = ev.player,
    rc = p.getComponent("minecraft:riding");
  if (!rc || !isA(rc.entityRidingOn)) return;
  var sw = ev.swingSource;
  if (
    sw == EntitySwingSource.UseItem ||
    sw == EntitySwingSource.Interact ||
    sw == EntitySwingSource.Build ||
    sw == EntitySwingSource.DropItem ||
    sw == EntitySwingSource.ThrowItem
  )
    return;
  pst(p).fu = T + 6;
});
w.afterEvents.entityContainerClosed.subscribe(function (ev) {
  var e = ev.entity;
  if (isA(e)) vld(e, gs(e));
});
w.afterEvents.entitySpawn.subscribe(function (ev) {
  if (isA(ev.entity)) L.add(ev.entity.id);
});
w.afterEvents.entityLoad.subscribe(function (ev) {
  if (isA(ev.entity)) L.add(ev.entity.id);
});
w.afterEvents.entityRemove.subscribe(function (ev) {
  M.delete(ev.removedEntityId);
  L.delete(ev.removedEntityId);
});
w.afterEvents.weatherChange.subscribe(function (ev) {
  WX[ev.dimension] = ev.newWeather;
});
w.afterEvents.playerSpawn.subscribe(function (ev) {
  var p = ev.player,
    q = pst(p);
  p.inputPermissions.setPermissionCategory(IPC.Dismount, true);
  q.rid = null;
  if (q.cam || q.sc) {
    p.camera.clear();
    q.cam = false;
    q.sc = false;
  }
});
w.afterEvents.playerInventoryItemChange.subscribe(function (ev) {
  var it = ev.itemStack;
  if (!it || !it.typeId.startsWith("ia:") || it.getRawLore().length) return;
  var c = ev.player.getComponent("minecraft:inventory").container,
    x = c.getItem(ev.slot);
  if (!x || x.typeId != it.typeId || x.getRawLore().length) return;
  if (lor(x, nn(x))) c.setItem(ev.slot, x);
});
sy.beforeEvents.startup.subscribe(function (ev) {
  var r = ev.customCommandRegistry;
  r.registerCommand(
    {
      name: "ia:dev",
      description: "Immersive Aircraft developer tools",
      permissionLevel: CommandPermissionLevel.GameDirectors,
      cheatsRequired: true,
    },
    function (o) {
      var p = o.sourceEntity;
      if (isP(p))
        sy.run(function () {
          dvm(p);
        });
      return { status: CustomCommandStatus.Success };
    },
  );
});
sy.runInterval(function () {
  T++;
  if (T == 2) {
    sob();
    console.warn("[Immersive Aircraft] v" + VER.v + " " + VER.n + " running");
  }
  if (T % 40 == 0) cc = null;
  if (T % 20 == 1) scn();
  for (var id of Array.from(L)) {
    var e = w.getEntity(id);
    if (!e || !e.isValid) {
      L.delete(id);
      continue;
    }
    try {
      var s0 = gs(e);
      pkt(e, s0);
      tk(e, s0);
    } catch (x) {
      if (T % 200 == 0) console.warn("[ia] " + x);
    }
  }
  tbu();
  ttn();
  for (var p of w.getAllPlayers()) ptk(p);
}, 1);
