navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    const { latitude, longtitude } = position.coords
    console.log('Географические координаты устройства', latitude, longtitude);
});

