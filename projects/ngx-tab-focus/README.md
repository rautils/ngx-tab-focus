<h1 align="center">@rautils/ngx-focus-tab</h1>

<h3 align="center">Library to style focused elements only by keyboard</h3>

# This is a work in progress

# Demo

[You cann see the demo here](https://rautils.github.io/rautils/?library=ngx-tab-focus)

# Installation

First, install the npm module:

```sh
npm install @rautils/ngx-tab-focus --save
```

or

```sh
yarn add @rautils/ngx-tab-focus
```

# Usage

## Import the module

```ts
import {NgModule} from '@angular/core';
import {NgxTabFocusModule} from '@rautils/ngx-tab-focus';

@NgModule({
    imports: [
        NgxTabFocusModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## Place the component

```html
<tab-focus>
	<p>I can be focused only by keyboard</p>
</tab-focus>
```

# API reference

<!-- Work in progress -->
