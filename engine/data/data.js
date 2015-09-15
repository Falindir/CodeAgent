/*
* size hitbox with xD
* viewDistance with xD
*
*/

var Data = {
  agent : {
    unit : {
      soldier   : {
        cost : {
          plant :
          mineral :
        },
        health : ,
        armor : ,
        hitbox : {
          width : 1,
          height : 1
        },
        viewDistance : 2
      },

      picker    : {
        cost : {
          plant :
          mineral :
        },
        health : ,
        armor : ,
        hitbox : {
          width : 1,
          height : 1
        },
        viewDistance : 2
      }
    },

    building : {

    },

    resource : {
      plant : {
        hitbox : {
          width : 0.5
          height : 0.5
        }
      },

      mineral : {
        hitbox : {
          width : 0.5
          height : 0.5
        }
      }
    },

    deposit  : {

    },

    projectile : {

    },
  },

  map : {
    default : {
      width : 800,
      height : 800
    }
  }
};

module.exports = Data;
