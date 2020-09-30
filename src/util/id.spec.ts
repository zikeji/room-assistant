import { makeId } from './id';

describe('makeId', () => {
  const idRegex = /^[a-zA-Z0-9_-]+$/;

  it('should convert inputs to lower case', () => {
    expect(makeId('ABC-def123')).toMatch(idRegex);
  });

  it('should convert colons to dashes', () => {
    expect(makeId('ble-84:87:ad:ef')).toMatch(idRegex);
  });

  it('should convert apostrophes to dashes', () => {
    expect(makeId("parent's-room")).toMatch(idRegex);
  });

  it('should remove foreign characters', () => {
    expect(makeId('测试-房间')).toMatch(idRegex);
  });
});
