import turnDown from 'turn-down-for-what';

export default (() => {
  const timeout = 0;

  return {
    action: () => {
      turnDown(['*']);
    },
    timeout
  };
})();
