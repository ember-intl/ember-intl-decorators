# @ember-intl/decorators

[![CI](https://github.com/ember-intl/decorators/workflows/CI/badge.svg)](https://github.com/ember-intl/decorators/actions)
[![npm version](https://badge.fury.io/js/@ember-intl%2Fdecorators.svg)](http://badge.fury.io/js/@ember-intl%2Fdecorators)
[![Download Total](https://img.shields.io/npm/dt/@ember-intl%2Fdecorators.svg)](http://badge.fury.io/js/@ember-intl%2Fdecorators)
[![Ember Observer Score](https://emberobserver.com/badges/-ember-intl-decorators.svg)](https://emberobserver.com/addons/@ember-intl/decorators)
[![Ember Versions](https://img.shields.io/badge/Ember.js Versions-^3.12-brightgreen.svg)](https://travis-ci.com/ember-intl/decorators)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies](https://img.shields.io/david/ember-intl/decorators.svg)](https://david-dm.org/ember-intl/decorators)
[![devDependencies](https://img.shields.io/david/dev/ember-intl/decorators.svg)](https://david-dm.org/ember-intl/decorators)

This addon provides utility [decorators](https://github.com/tc39/proposal-decorators)
to use [ember-intl] with ES6 class syntax.

[ember-intl]: https://github.com/ember-intl/ember-intl

## Installation

Install [ember-intl][ember-intl] and @ember-intl/decorators:

```
ember install ember-intl @ember-intl/decorators
```

## Usage

### `@t`

Decorator version of the [ember-intl `translationMacro`](https://github.com/ember-intl/ember-intl/blob/master/docs/translating-text.md#computed-property-macro).
Implicitly injects the `intl` service. Creates a computed property that depends
on the current locale and any keys that you pass as the second parameter.

```js
import Component from '@ember/component';
import { t } from '@ember-intl/decorators';

class ExampleComponent extends Component {
  name = 'Tom';

  @t('messages.welcome', { firstName: 'name' }) message; // => 'Welcome, Tom!'
}
```

Using the `raw` helper you can pass static values as well:

```js
import Component from '@ember/component';
import { t, raw } from '@ember-intl/decorators';

class ExampleComponent extends Component {
  name = 'Tom';

  @t('messages.greeting', {
    firstName: 'name',
    timeOfDay: raw('morning')
  })
  message; // => 'Good morning, Tom!'
}
```

### `@intl`

A generic decorator that implicitly injects the `intl` service and creates a
computed property that depends on the current locale and any further optional
dependent keys passed to the decorator.

The decorated method or (arrow) function is bound to the class instance the
decorator is used on and invoked with two parameters:

- `intl`: the `intl` service, that you can use to call any method on
- `propertyKey`: the name of the decorated property

The return value is used as the value of the computed property.

```js
import Component from '@ember/component';
import { intl } from '@ember-intl/decorators';

class ExampleComponent extends Component {
  amount = 1.23;
  currency = 'EUR';

  @intl('amount', 'currency')
  formatted = intl =>
    intl.formatNumber(this.amount, {
      style: 'currency',
      currency: this.currency
    });
}
```
