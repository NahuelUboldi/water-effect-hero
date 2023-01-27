$('.ripple-ef').ripples({
  resolution: 512,
  dropRadius: 20,
  perturbance: 0.04,
});

$('.rotate').textrotator({
  animation: 'flipUp', // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ',', // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 3000, // How many milliseconds until the next word show.
});

setTimeout(() => {
  const svgImg = document.querySelector('.wave-img');
  if (svgImg)
    svgImg.innerHTML = `<img src="./assets/img/waves.svg" width="100%" class="wave-img" />`;
}, 0);
