import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  first_name: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide your First Name'],
    maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  last_name: {
    /* The owner of this pet */

    type: String,
    required: [true, "Please provide your Last name"],
    maxlength: [20, "Last Name cannot be more than 60 characters"],
  },
  emailId: {
    /* The species of your pet */

    type: String,
    required: [true, 'Please provide your last name.'],
    maxlength: [30, 'Please provide a valid Email Id'],
  },
  ph_number: {
    /* Pet's age, if applicable */

    type:Number,
  },
  feedback:{
    type:String,
  }

})

export default mongoose.models.User || mongoose.model('User', UserSchema)
