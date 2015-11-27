// https://davidwalsh.name/rss-express

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var rssSchema = new Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, lowercase: true, trim: true, index: { unique: true } },
    body: { type: String, required: true },
    teaser: { type: String, required: true },
    author: { type: String, required: true, trim: true },
    published: { type: Boolean, required: true, default: false },
    createdAt: { type: Number },
    updatedAt: { type: Number }
});

// update timestamps on save
rssSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    if (this.isNew) this.createdAt = this.updatedAt;
    next();
});

// create and export our model
module.exports = mongoose.model('BlogPost', BlogPostSchema);