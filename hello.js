module.exports = function (ctx, cb) {
   cb(null, 'Hello ' + ctx.data.name);
}
