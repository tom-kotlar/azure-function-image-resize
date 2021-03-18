var Jimp = require("jimp");

module.exports = async function (context, myBlob) {
  context.log(
    "JavaScript blob trigger function processed blob \n Blob:",
    context.bindingData.blobTrigger,
    "\n Blob Size:",
    myBlob.length,
    "Bytes",
    "\n Context:",
    context,
    "<<<<<"
  );
  
  try {
    const image = await Jimp.read(myBlob);
    const thumbnail = image.resize(100, Jimp.AUTO);
    const thumbnailBuffer = await thumbnail.getBufferAsync(Jimp.AUTO);
    context.bindings.outputBlob = thumbnailBuffer;
    context.log("Image:", context.bindingData.name, "re-size was successful");
  } catch (err) {
    context.log(err.message);
  } finally {
    context.done();
  }
};
