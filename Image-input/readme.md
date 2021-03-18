# BlobTrigger - JavaScript

The `BlobTrigger` makes it incredibly easy to react to new Blobs inside of Azure Blob Storage. This sample demonstrates a simple use case of processing data from a given Blob using JavaScript.

## How it works

For a `BlobTrigger` to work, you provide a path which dictates where the blobs are located inside your container, and can also help restrict the types of blobs you wish to return. For instance, you can set the path to `samples/{name}.png` to restrict the trigger to only the samples path and only blobs with ".png" at the end of their name.

## Learn more

 ### [Azure Functions triggers and bindings concepts](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings?tabs=csharp)

### [Jimp](https://www.npmjs.com/package/jimp)

### [Azure Storage Explorer](https://azure.microsoft.com/en-gb/features/storage-explorer/)


<TODO> Map 

![Image of Yaktocat](/img/function-map.png)