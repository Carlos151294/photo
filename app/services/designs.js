const designsPage1 = {
  latest: [
    {
      id: '1',
      uri: require('../assets/discover1.png'),
      avatar: {
        uri: require('../assets/avatar1.png'),
        name: 'Ridhwan Nordin',
        user: '@ridzjcob',
      },
    },
    {
      id: '2',
      uri: require('../assets/discover2.png'),
      avatar: {
        uri: require('../assets/avatar2.png'),
        name: 'Ridhwan Nordin',
        user: '@ridzjcob',
      },
    },
    {
      id: '3',
      uri: require('../assets/discover3.png'),
      avatar: {
        uri: require('../assets/avatar3.png'),
        name: 'Ridhwan Nordin',
        user: '@ridzjcob',
      },
    },
    {
      id: '4',
      uri: require('../assets/discover4.png'),
      avatar: {
        uri: require('../assets/avatar4.png'),
        name: 'Ridhwan Nordin',
        user: '@ridzjcob',
      },
    },
  ],
  all: [
    {
      uri: require('../assets/browse1.png'),
      size: 'sm'
    },
    {
      uri: require('../assets/browse2.png'),
      size: 'md'
    },
    {
      uri: require('../assets/browse3.png'),
      size: 'md'
    },
    {
      uri: require('../assets/browse4.png'),
      size: 'md'
    },
    {
      uri: require('../assets/browse5.png'),
      size: 'sm'
    },
    {
      uri: require('../assets/browse6.png'),
      size: 'sm'
    }
  ]
};

const designsPage2 = [
  {
    uri: require('../assets/browse7.png'),
    size: 'md'
  },
  {
    uri: require('../assets/browse8.png'),
    size: 'md'
  },
  {
    uri: require('../assets/browse9.png'),
    size: 'md'
  },
  {
    uri: require('../assets/browse10.png'),
    size: 'sm'
  },
];

export const getDesigns = (page) => {
  return new Promise((resolve) => {
    setTimeout(() => page === 1 ? resolve(designsPage1) : resolve(designsPage2), 2000)
  });
};