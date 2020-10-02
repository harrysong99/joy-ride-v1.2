const User = require("../models/userModel");

module.exports = {
  getUserByEmail: async (userEmail) => {
    const createRes = await User.findOne({ email: userEmail }).then((user) => {
      if (!user) {
        return { success: false, errmsg: "email not found in users" };
      } else {
        console.log("success!");
        return { success: true, userData: user };
      }
    });
    return createRes;
  },

  getUserByName: async (userName) => {
    const createRes = await User.findOne({ name: userName }).then((user) => {
      if (!user) {
        return { success: false, errmsg: "name not found in users" };
      } else {
        console.log("success!");
        return { success: true, userData: user };
      }
    });
    return createRes;
  },

  getDidSurvey: async (userEmail) => {
    const createRes = await User.findOne({ email: userEmail }).then((user) => {
      if (!user) {
        return { success: false, errmsg: "email not found in users" };
      } else {
        console.log("success!");
        return { success: true, didSurvey: user.didSurvey };
      }
    });
    return createRes;
  },

  updateUserLocation: async (userEmail, userLocation) => {
    // find user and update location
    const user = await User.findOneAndUpdate(
      { email: userEmail },
      { location: userLocation },
      { useFindAndModify: false, returnOriginal: false }
    );
    // if successful, create response
    if (user) {
      return { success: true, userData: user };
    } else {
      return { success: false, errmsg: "update not valid!" };
    }
  },

  updateUserServiceTime: async (userEmail, userServiceTime) => {
    const user = await User.findOneAndUpdate(
      { email: userEmail },
      { serviceTime: userServiceTime },
      { useFindAndModify: false, returnOriginal: false }
    );
    // if successful, create response
    if (user) {
      return { success: true, userData: user };
    } else {
      return { success: false, errmsg: "update not valid!" };
    }
  },

  updateUserDriver: async (userEmail, userDriver) => {
    // find user and update location
    const user = await User.findOneAndUpdate(
      { email: userEmail },
      { driver: userDriver },
      { useFindAndModify: false, returnOriginal: false }
    );
    // if successful, create response
    if (user) {
      return { success: true, userData: user };
    } else {
      return { success: false, errmsg: "update not valid!" };
    }
  },

  deleteUser: async (userEmail) => {
    const user = await User.findOneAndDelete({ email: userEmail });
    if (user) {
      return { success: true };
    } else {
      return { success: false, errmsg: "delete not successful!" };
    }
  },

  updateDidSurvey: async (userEmail, userSurvey) => {
    const user = await User.findOneAndUpdate(
      { email: userEmail },
      { didSurvey: userSurvey },
      { useFindAndModify: false, returnOriginal: false }
    );
    // if successful, create response
    if (user) {
      return { success: true, userData: user };
    } else {
      return { success: false, errmsg: "update not valid!" };
    }
  },

  updateEveryDidSurvey: async () => {
    const user = await User.update(
      {},
      { $set: { didSurvey: false } },
      {
        multi: true,
      }
    );
    if (user) {
      return {
        success: true,
        msg: "Thank you for completing this week's survey!",
      };
    } else {
      return { success: false, errmsg: "update failed!" };
    }
  },
};
