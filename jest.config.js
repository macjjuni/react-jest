export default {
  roots: ['<rootDir>/src/__tests__/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|svg)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1', // @ <= alias path
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  rootDir: '.',
}
