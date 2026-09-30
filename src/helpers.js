const getSKDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Month is zero-based
  const year = date.getFullYear();

  // Ensure two digits for day and month
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  // Construct the Slovak date string
  return `${formattedDay}.${formattedMonth}.${year}`;
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
    if (checkImagesLoaded(images)) {
      resolve();
      return;
    }

    let timeoutId;
    const removeListeners = [];
    const finish = () => {
      clearTimeout(timeoutId);
      removeListeners.forEach((remove) => remove());
      resolve();
    };
    const onImageSettled = () => {
      if (checkImagesLoaded(images)) {
        finish();
      }
    };

    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', onImageSettled);
        img.addEventListener('error', onImageSettled);
        removeListeners.push(() => {
          img.removeEventListener('load', onImageSettled);
          img.removeEventListener('error', onImageSettled);
        });
      }
    });
    timeoutId = setTimeout(finish, 10000);
    onImageSettled();
  });
export { getSKDate, checkImagesLoaded, waitForImages };
