Feature('Counter');

Scenario('Counter increment button works fine', (I) => {
    I.amOnPage('/');
    I.seeElement('.counter');
    I.say('Now 3 clicks to increment button');
    I.click('+');
    I.click('+');
    I.click('+');
    I.see('3');
    pause();
});
