export const getRandomInt = (x: number) => Math.floor(Math.random() * x);
export const getRandomBool = () => Math.random() > 0.5;
export const pickOneRandomly = <T>(items: T[]): T => items[getRandomInt(items.length)];
