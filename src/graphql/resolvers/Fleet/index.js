import Fleet from "../../../models/fleet.model";

export default {
  Query: {
    fleet: async (parent, { _id }, context, info) => {
      return await Fleet.find({ _id });
    },
    fleets: async (parent, args, context, info) => {
      const res = await Fleet.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        fleetname: u.fleetname,
        fleetinfo: u.fleetinfo,
        contactname: u.contactname,
        longitude: u.longitude,
        latitude: u.latitude,
        mobile: u.longitude,
        category: u.latitude,

      }));
    }
  },
  Mutation: {
    createFleet: async (parent, { fleet }, context, info) => {
      const newFleet = await new Fleet({
        fleetname: fleet.fleetname,
        fleetinfo: fleet.fleetinfo,
        contactname: fleet.contactname,
        longitude: fleet.longitude,
        latitude: fleet.latitude,
        mobile: fleet.longitude,
        category: fleet.latitude
      });

      return new Promise((resolve, reject) => {
        newFleet.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateFleet: async (parent, { _id, fleet }, context, info) => {
      return new Promise((resolve, reject) => {
        Fleet.findByIdAndUpdate(
          _id,
          { $set: { ...fleet } },
          { new: true }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteFleet: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Fleet.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  Subscription: {
    fleet: {
      subscribe: (parent, args, { pubsub }) => {
        //return pubsub.asyncIterator(channel)
      }
    }
  },
};
