import * as _ from 'lodash';

const text: string[] = ['Coucou', 'webpack'];

const component = () => {
  const element: Element = document.createElement('div');
  element.innerHTML = _.join(text, ' ');

  return element;
};

document.body.appendChild(component());
