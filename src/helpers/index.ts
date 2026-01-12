export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, (error) => {
      reject(new Error(error.message));
    });
  });
};
