export const containerVariants = (delay = 0) => ({
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2,
      delay,
    },
  },
});

export const tagVariants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.8,
      delay: 0.4,
    },
  },
};

export const titleVariants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.2,
    },
  },
};

export const desVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.6,
      delay: 0.2,
    },
  },
};

export const FadeUp = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

export const FadeRight = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};
