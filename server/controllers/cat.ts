import Cat from '../models/cat';
import BaseCtrl from './base';

export default class CatCtrl extends BaseCtrl {
  model = Cat;
  constructor() {
    super()
  }
  _insert = (req, res) => {
    console.log('insert extended', req, req.body);
    // const obj = new this.model(req.body);
    // obj.save((err, item) => {
    //   // 11000 is the code for duplicate key error
    //   if (err && err.code === 11000) {
    //     res.sendStatus(400);
    //   }
    //   if (err) {
    //     return console.error(err);
    //   }
      // res.status(200).json(item);
    // });
    res.status(200).json({});
  }
}
