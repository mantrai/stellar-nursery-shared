import DefaultRandomizer from '../default-randomizer';

test('Default Randomizer', () => {
    let random = new DefaultRandomizer();
    random.setSeed('1234567890');
    expect(random.getSeed()).toBe('1234567890');
});
