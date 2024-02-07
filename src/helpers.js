const getSKDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based
  const year = date.getFullYear();

  // Ensure two digits for day and month
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Construct the Slovak date string
  const slovakDateString = `${formattedDay}.${formattedMonth}.${year}`;
  return slovakDateString;
};

const checkImagesLoaded = (images) => {
  let allLoaded = true;

  images.forEach((img) => {
    if (!img.complete) {
      allLoaded = false;
    }
  });

  return allLoaded;
};

const waitForImages = (images) =>
  new Promise((resolve) => {
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', () => {
          if (checkImagesLoaded(images)) {
            resolve();
          }
        });
        return;
      }
      if (checkImagesLoaded(images)) {
        resolve();
      }
    });
  });
export { getSKDate, checkImagesLoaded, waitForImages };
