import 'jest';
import { render } from '@testing-library/angular';
import { CounterComponent } from './counter.component';

describe('Counter', () => {
  test('should render counter', async () => {
    const { getByText } = await render(CounterComponent, {
      componentProperties: { counter: 5 },
    });

    expect(getByText('Current Count: 5'));
  });

  test('should increment the counter on + button click', async () => {
    const { getByText, click } = await render(CounterComponent, {
      componentProperties: { counter: 5 },
    });

    click(getByText('+'));

    expect(getByText('Current Count: 6'));
  });

  test('should decrement the counter on - button click', async () => {
    const { getByText, click } = await render(CounterComponent, {
      componentProperties: { counter: 5 },
    });

    click(getByText('-'));

    expect(getByText('Current Count: 4'));
  });

})