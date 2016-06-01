var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * QiniuImages Model
 * ==========
 */
var QiniuImages = new keystone.List('QiniuImages');

QiniuImages.add({
  name: { type: String, required: true, index: true },
  heroImage: {
    type: Types.QiniuImage,
    autoCleanup: true,
    bucket: 'imgbed'
  }
});

/**
 * Registration
 */
QiniuImages.register();
