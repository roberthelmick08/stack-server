const TRAITS = require('../../data/traits');
const UserTable = require('./table');
const DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  generationId: undefined,

  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach((TRAIT) => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;

      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];

      traits.push({ traitType, traitValue });
    });

    return traits;
  },
};

class User {
  constructor({ birthdate, generationId, nickname, traits } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }

  buildNewUser() {
    const user = new User();

    UserTable.storeUser(user)
      .then(({ id, birthdate, generationId, nickname, traits }) => {
        this.user = {
          ...user,
          id,
          birthdate,
          generationId,
          nickname,
          traits,
        };

        console.log('new user', this.user);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

module.exports = User;
