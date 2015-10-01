/*
* size hitbox with xD
* viewDistance with xD
* all data is temp , need more stable
*/

var Data = {
  agent : {
    unit : {
      soldier : {
        cost : {
          plant : 5,
          mineral : 10
        },
        health : 15,
        armor : 25,
        hitbox : {
          width : 1,
          height : 1
        },
        viewDistance : 2
      },

      picker : {
        cost : {
          plant : 10,
          mineral : 5
        },
        health : 25,
        armor : 10,
        hitbox : {
          width : 1,
          height : 1
        },
        viewDistance : 2
      }
    },

    building : {
      base : {
        armor : 100,
        hitbox : {
          width : 2,
          height : 2
        },
        bag : {
          plant : 50,
          mineral : 50,
        }
      }
    },

    resource : {
      plant : {
        hitbox : {
          width : 0.5,
          height : 0.5
        }
      },

      mineral : {
        hitbox : {
          width : 0.5,
          height : 0.5
        }
      }
    },

    deposit  : {
      field : {
        hitbox : {
          width : 1.5,
          height : 1.5
        },
        pop : 5
      },

      mine : {
        hitbox : {
          width : 1.5,
          height : 1.5
        },
        pop : 10
      }
    },

    projectile : {
      hitbox : {
        width : 1.5,
        height : 1.5
      },
    },
  },

  map : {
    default : {
      width : 600,
      height : 600
    }
  }
};

module.exports = Data;
