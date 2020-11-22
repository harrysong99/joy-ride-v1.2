const User = require("../models/userModel");

module.exports = {
  getUserById: async (userID) => {
    const createRes = await User.findOne({ _id: userID }).then((user) => {
      if (!user) {
        return { success: false, errmsg: "id not found in users" };
      } else {
        console.log("user found!");
        return { success: true, userData: user };
      }
    });
    return createRes;
  },
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
  getDidSurvey: async (userID) => {
    const createRes = await User.findOne({ _id: userID }).then((user) => {
      if (!user) {
        return { success: false, errmsg: "email not found in users" };
      } else {
        console.log("success!");
        return { success: true, didSurvey: user.didSurvey };
      }
    });
    return createRes;
  },

  updateUser: async (userData) => {
    const user = await User.findOneAndUpdate(
      { _id: userData._id },
      {
        name: userData.name,
        email: userData.email,
        location: userData.location,
        driver: userData.driver,
        serviceTime: userData.serviceTime,
      },
      { useFindAndModify: false, returnOriginal: false }
    );
    if (user) {
      return { success: true, userData: user };
    } else {
      return { success: false, errmsg: "update not valid!" };
    }
  },
  updateUserLocation: async (userID, userLocation) => {
    // find user and update location
    const user = await User.findOneAndUpdate(
      { _id: userID },
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
  updateUserServiceTime: async (userID, userServiceTime) => {
    const user = await User.findOneAndUpdate(
      { _id: userID },
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
  updateUserDriver: async (userID, userDriver) => {
    // find user and update location
    const user = await User.findOneAndUpdate(
      { _id: userID },
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
  deleteUser: async (userID) => {
    const user = await User.findOneAndDelete({ _id: userID });
    if (user) {
      return { success: true };
    } else {
      return { success: false, errmsg: "delete not successful!" };
    }
  },
  updateDidSurvey: async (userID, userSurvey) => {
    const user = await User.findOneAndUpdate(
      { _id: userID },
      { didSurvey: userSurvey },
      { useFindAndModify: false, returnOriginal: false }
    );
    // if successful, create response
    if (user) {
      return {
        success: true,
        userData: user,
        msg: "Thank you for completing this week's survey!",
      };
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
      };
    } else {
      return { success: false, errmsg: "update failed!" };
    }
  },
};
