import { fromLeft, fromRight, zoomIn, zoomOut } from 'react-navigation-transitions';

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

export default handleCustomTransition