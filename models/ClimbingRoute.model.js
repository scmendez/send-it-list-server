const mongoose = require('mongoose');

let ClimbingRouteSchema = new mongoose.Schema(
  {
    savedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'climber'
    },
    routeId: String,
    routeName: String,
    routeType: String,
    routeRating: String,
    routePitches: String,
    routeLocation: [String],
    routeURL: String,
    routeImg: String,
    personalNotes: String,
    dateAccomplished: Date,
    listType: {
      type: String,
      enum: ['current', 'future', 'sent']
    }
  }
)

let ClimbingRouteModel = mongoose.model('climbingRoute', ClimbingRouteSchema)

module.exports = ClimbingRouteModel