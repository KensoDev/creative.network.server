import casual from 'casual';

const mocks = {
  Query: () => ({
    allTopics: (root, args) => {
      let topics = [];
      for (var i = 0, len = 20; i < len; i++) {
        topics.push(
          {
            id: casual.uuid,
            title: casual.title,
            description: casual.sentences(3),
            thumbnail: 'http://assets.avi.io/screen-shot-2017-04-24-wsh2r.png',
            tags: [
              {
                id: 'tag1',
                name: 'Film',
              },
              {
                id: 'tag2',
                name: 'Creative',
              },
            ],
          }
        );
      }
      return topics;
    },
  }),
};

export default mocks;
