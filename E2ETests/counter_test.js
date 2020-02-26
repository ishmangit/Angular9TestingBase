Feature('Counter');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.seeElement('.counter');
    I.click('+');
    I.click('+');
    I.click('+');
    pause();
});
