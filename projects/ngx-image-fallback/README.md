<h1 align="center">@rautils/ngx-image-fallback</h1>

<h3 align="center">Library to give a fallback element to an image</h3>

<h4 align="center">

<a href="https://rautils.github.io/rautils/?library=ngx-image-fallback"><img alt="Github Pages" src="https://github.com/rautils/ngx-image-fallback/workflows/Deploy%20to%20GitHub%20Pages/badge.svg?branch=master"></a>

</h4>

# This is a work in progress

# Demo

[You cann see the demo here](https://rautils.github.io/rautils/?library=ngx-image-fallback)

# Installation

First, install the npm module:

```sh
npm install @rautils/ngx-image-fallback --save
```

or

```sh
yarn add @rautils/ngx-image-fallback
```

# Usage

## Import the module

```ts
import { NgModule } from '@angular/core';
import { NgxImageFallbackModule } from '@rautils/ngx-image-fallback';

@NgModule({
	imports: [NgxImageFallbackModule],
	bootstrap: [AppComponent],
})
export class AppModule {}
```

## Place the component

```html
<image-fallback [imageSrc]="<source of the image>" [imageAlt]="<alternative text>">
    Anything inside this component will be rendered if the image fails
</image-fallback>
```

# API reference

<!-- Work in progress -->
