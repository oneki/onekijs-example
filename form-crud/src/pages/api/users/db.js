export default {
  1: {
    id: 1,
    name: 'Franki',
    firstname: 'Bruno'
  },
  2: {
    id: 2,
    name: 'Franki',
    firstname: 'Olivier'
  }
}

let currentId = 2;
export const nextId = () => {
  currentId++;
  return currentId;
}