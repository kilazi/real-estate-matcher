import * as mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
  location_address: String,
  location_x: String,
  location_y: String,
  rooms: String,
  size: String,
  price: String,
  creator: String,
  description: String,
  level: String,
  buy_location_address1: String,
  buy_location_address2: String,
  buy_location_address3: String,
  buy_rooms_from: String,
  buy_rooms_to: String,
  buy_size_from: String,
  buy_size_to: String,
  buy_price_from: String,
  buy_price_to: String,
  buy_level_from: String,
  buy_level_to: String,
  buy_description: String,
  type: String,
  location_address_x: String,
  location_address_y: String,
  buy_location_address1_y: String,
  buy_location_address1_x: String,
  buy_location_address2_y: String,
  buy_location_address2_x: String,
  buy_location_address3_y: String,
  buy_location_address3_x: String
});

const Cat = mongoose.model('Cat', catSchema);

export default Cat;
