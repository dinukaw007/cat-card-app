'use strict'
const axios = require('axios');

class CatService {
  constructor(greeting, width, height, color, size) {
    this.greeting = greeting;
    this.width = width;
    this.height = height;
    this.color = color;
    this.size = size;

  }
  set_greeting(greeting) {
    this.greeting = greeting;
  }
  set_width(width) {
    this.width = width;
  }
  set_height(height) {
    this.height = height;
  }
  set_color(color) {
    this.color = color;
  }
  set_size(size) {
    this.size = size;
  }

  async generate_new_cat() {
    // Handle Null Errors
    if (this.greeting && this.width && this.height && this.color && this.size) {
      this.url = `${process.env.CAT_API}${this.greeting}?width=${this.width}&height=${this.height}&color=${this.color}&size=${this.size}`
      return await axios.get(this.url, { responseType: 'arraybuffer' }).then((resp) => {
        console.log('Received response with status:' + resp.status)
        return resp.data
      }).catch(err => {

        console.error(err.message);
        return null;
      });
    } else {
      throw new Error("Insufficient Cat Attributes");
    }

  }
}
module.exports = CatService;


