import { getLevel } from '../app';
import fetchData from '../http';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});

test('responseTrue', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 'top' });
  const result = getLevel(1);
  expect(result).toBe('Ваш текущий уровень: top');
});

test('responseFalse', () => {
  fetchData.mockReturnValue({ status: 'false', level: 'top' });
  const result = getLevel(1);
  expect(result).toBe('Информация об уровне временно недоступна');
});
