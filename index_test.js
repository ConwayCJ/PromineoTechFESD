const {expect} = chai

describe('MyFunctions', function() {
  describe('#CreateDeck', function() {
    it('should contain 52 items', function() {
      
      let deck = createDeck()
      expect(deck.length).to.equal(52)
    })
  })
});
