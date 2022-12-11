import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const tags = [
  {
    _id: uuid(),
    tagTitle: 'Work',
  },
  {
    _id: uuid(),
    tagTitle: 'Personal',
  },
  {
    _id: uuid(),
    tagTitle: 'College',
  },
  {
    _id: uuid(),
    tagTitle: 'Teams',
  },
  {
    _id: uuid(),
    tagTitle: 'Home',
  },
];
