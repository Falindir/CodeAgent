/*
* size hitbox with xD
* viewDistance with xD
*
*/

var Data = {
  agent : {
    unit : {
      observer  : {
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
        viewDistance : 6
      },

      builder   : {
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
        viewDistance : 3
      },

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

      healer    : {
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
        viewDistance : 3
      },

      defender  : {
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
        viewDistance : 4
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
      },

      darkmatter : {
        hitbox : {
          width : 0.5
          height : 0.5
        }
      },
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
    },

    small : {
      width : 600,
      height : 600
    },

    big : {
      width : 1000,
      height : 1000
    }
  }
};

module.exports = Data;
