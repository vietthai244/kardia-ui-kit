const isTouchDevice = (): boolean => {
  const _navigator: any = navigator
  return "ontouchstart" in window || _navigator.maxTouchPoints > 0 || _navigator.msMaxTouchPoints > 0;
};

export default isTouchDevice;
