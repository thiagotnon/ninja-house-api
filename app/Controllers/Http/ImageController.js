"use strict";
const Helpers = use("Helpers");
const Image = use("App/Models/Image");
const LeisureSpace = use("App/Models/LeisureSpace");

/**
 * Resourceful controller for interacting with images
 */
class ImageController {
  async show({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`));
  }
  /**
   * Create/save a new image.
   * POST images
   */
  async store({ params, request }) {
    try {
      const leisureSpace = await LeisureSpace.findOrFail(params.id);
      const images = request.file("image", {
        types: ["image"],
        size: "2mb",
      });
      console.log(images);
      await images.moveAll(Helpers.tmpPath("uploads"), (file) => ({
        name: `${Date.now()}-${file.clientName}`,
      }));

      if (!images.movedAll()) {
        return images.errors();
      }

      await Promise.all(
        images
          .movedList()
          .map((image) =>
            leisureSpace.images().create({ path: image.fileName })
          )
      );
    } catch (error) {
      console.log(`Erro de criação de imagem: ${error}`);
    }
  }
}

module.exports = ImageController;
