import { Animated, Easing } from 'react-native';

const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[0] ? scenes[0] : undefined;
  const nextScene = scenes[1] ? scenes[1] : undefined;

  // Custom transitions go there
  if (prevScene && nextScene) {
    if (prevScene.route.routeName === 'Home' &&
      nextScene.route.routeName === 'Bills') {
      return fromLeft(700);
    } else if (prevScene.route.routeName === 'Home' &&
      nextScene.route.routeName === 'Counter') {
      return fromRight(700);
    }
  } else {
    return fromRight(700);
  }
}

function fromLeft(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ layout, position, scene }) => {
      const { index } = scene;
      const { initWidth } = layout;

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [-initWidth, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  };
}

function fromRight(duration = 300) {
  return {
    transitionSpec: {
      duration,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: ({ layout, position, scene }) => {
      const { index } = scene;
      const { initWidth } = layout;

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [initWidth, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  };
}

export default handleCustomTransition