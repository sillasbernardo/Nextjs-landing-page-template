const IMAGES = [];

export const loadReviewImages = async () => {
  for (let i = 1; i < 4; i++) {
    const img = await import(
      `../../../Assets/Img/ReviewsImages/review_image_${i}.jpg`
      );
      IMAGES.push(img.default);
    }

  return IMAGES;
};
