const sequelize = require('../../config/database');

const Sequelize = require("sequelize")


const order = sequelize.define('orders',{
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  wigName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"wig name cannot be null",
      },
      notEmpty:{
        msg:"wig name cannot be empty"
      }
    }
  },
  customerName:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"customer name cannot be null",
      },
      notEmpty:{
        msg:"customer name cannot be empty"
      }
    }
  },
  location:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"location cannot be null",
      },
      notEmpty:{
        msg:"location cannot be empty"
      }
    }
  },
 length:{
    type:Sequelize.INTEGER,
    allowNull: false,
    validate:{
      notNull:{
        msg:"length cannot be null",
      },
      notEmpty:{
        msg:"length cannot be empty"
      }
    }
  },
  color:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"color cannot be null",
      },
      notEmpty:{
        msg:"color cannot be empty"
      }
    }
  },
  styleType:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"style type cannot be null",
      },
      notEmpty:{
        msg:"style type cannot be empty"
      }
    }
  },
  frontalType:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"hair front type cannot be null",
      },
      notEmpty:{
        msg:"hair front type cannot be empty"
      }
    }
  },
  wigType:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"wig type cannot be null",
      },
      notEmpty:{
        msg:"wig type cannot be empty"
      }
    }
  },
  serviceType:{
    type:Sequelize.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"service type cannot be null",
      },
      notEmpty:{
        msg:"service type cannot be empty"
      }
    }
  },
  orderDate:{
    type:Sequelize.DATE,
    allowNull: false,
    validate:{
      notNull:{
        msg:"date cannot be null",
      },
      notEmpty:{
        msg:"date cannot be empty"
      }
    }
  },
  deliveryDate:{
    type:Sequelize.DATE,
    allowNull: false,
    validate:{
      notNull:{
        msg:"date cannot be null",
      },
      notEmpty:{
        msg:"date cannot be empty"
      }
    }
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

module.exports = order