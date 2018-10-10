const isBrowser = () => !(typeof window === 'undefined')

export default function actionTiming(enable = true) {
  if (!enable || !isBrowser()) return () => next => action => next(action)

  return () => next => action => {
    performance.mark(`${action.type}_start`);
    const result = next(action);
    performance.mark(`${action.type}_end`);
    performance.measure(
      `\uD83D\uDD25 ${action.type}`,
      `${action.type}_start`,
      `${action.type}_end`
    );
    return result
  }
}
