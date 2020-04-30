import { Component, Input } from '@angular/core';

@Component({template: ''})
export class ImageAttributeAbstract {
	/**
	 * __`optional`__
	 *
	 * Holds a text description of the image
	 */
	@Input()
	public alt = '';

	/**
	 * __`optional`__
	 *
	 * Indicates if the fetching of the image must be done using CORS.
	 *
	 * If the attribute is not present, the resource is fetched without a CORS request.
	 *
	 * Allowed values:
	 *
	 * `<blank>` (defautl): The resource is fetched without a CORS request.
	 *
	 * `anonymous`: A cross-origin request (i.e., with Origin HTTP header) is performed,
	 * but no credentials are sent (i.e., no cookie, X.509 certificate, or HTTP Basic authentication).
	 * If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin HTTP header),
	 * the image will be tainted and its usage restricted.
	 *
	 * `use-credentials`: A cross-origin request (i.e., with the Origin HTTP header) performed along with credentials sent
	 * (i.e., a cookie, certificate, or HTTP Basic authentication).
	 * If the server does not give credentials to the origin site (through the Access-Control-Allow-Credentials HTTP header),
	 * the image will be tainted and its usage restricted.
	 */
	@Input()
	public crossorigin: 'anonymous' | 'use-credentials' | '' = '';

	/**
	 * __`optional`__
	 *
	 * Provides an image decoding hint to the browser.
	 *
	 * If the attribute is not present, the browser decides what is best for the user
	 *
	 * Allowed values:
	 *
	 * `auto` (Default): No preference for the decoding mode. The browser decides what is best for the user.
	 *
	 * `sync`: Decode the image synchronously, for atomic presentation with other content.
	 *
	 * `async` Decode the image asynchronously, to reduce delay in presenting other content.
	 */
	@Input()
	public decoding: 'auto' | 'sync' | 'async' = 'auto';

	/**
	 * __`optional`__
	 *
	 * The intrinsic height of the image, in pixels. Must be an integer without a unit.
	 */
	@Input()
	public height: number = null;

	/**
	 * __`optional`__ __`experimental`__
	 *
	 * Indicates the relative download importance of the resource. Priority hints allow the values:
	 *
	 * Allowed values:
	 *
	 * `auto` (Default): No preference. The browser may use its own heuristics to prioritize the image.
	 *
	 * `high`: The image is of high priority.
	 *
	 * `low`: The image is of low priority.
	 */
	@Input()
	public importance: 'auto' | 'high' | 'low' = 'auto';

	/**
	 * __`optional`__
	 *
	 * This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it’s
	 * the size specified in the attribute. Specifically, the image would raster at these dimensions and
	 * naturalWidth/naturalHeight on images would return the values specified in this attribute.
	 *
	 * @see Explainer {@link https://github.com/WICG/intrinsicsize-attribute}
	 * @see Examples {@link https://googlechrome.github.io/samples/intrinsic-size/index.html}
	 */
	@Input()
	public intrinsicsize: string = null;

	/**
	 * __`optional`__
	 *
	 * This Boolean attribute indicates that the image is part of a server-side map.
	 * If so, the coordinates where the user clicked on the image are sent to the server.
	 *
	 * @see server-size map {@link https://en.wikipedia.org/wiki/Image_map#Server-side}
	 *
	 * Note: This attribute is allowed only if the <img> element is a descendant of an <a> element with a valid href attribute.
	 * This gives users without pointing devices a fallback destination.
	 */
	@Input()
	public ismap = false;

	/**
	 * __`optional`__
	 *
	 * Indicates how the browser should load the image.
	 *
	 * Allowed values:
	 *
	 * `eager` (Default): Loads the image immediately, regardless of whether or not the image is currently within the visible viewport.
	 *
	 * `lazy`: Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser.
	 * The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed.
	 * This generally improves the performance of the content in most typical use cases.
	 */
	@Input()
	public loading: 'eager' | 'lazy' = 'eager';

	/**
	 * __`optional`__ __`experimental`__
	 *
	 * A string indicating which referrer to use when fetching the resource.
	 *
	 * Allowed values:
	 *
	 * `no-referrer-when-downgrade` (Default): No Referer header is sent when navigating to an origin without HTTPS.
	 *
	 * `no-referrer`: The Referer header will not be sent.
	 *
	 * `origin`: The Referer header will include the page's origin (scheme, host, and port).
	 *
	 * `origin-when-cross-origin`: Navigating to other origins will limit the included referral data to the scheme, host, and port,
	 * while navigating from the same origin will include the full path and query string.
	 *
	 * `unsafe-url`: The Referer header will always include the origin, path and query string, but not the fragment, password, or username.
	 * This is unsafe because it can leak information from TLS-protected resources to insecure origins.
	 */
	@Input()
	public referrerpolicy:
		| 'no-referrer'
		| 'no-referrer-when-downgrade'
		| 'origin'
		| 'origin-when-cross-origin'
		| 'unsafe-url' = 'no-referrer-when-downgrade';

	/**
	 * __`optional`__
	 *
	 * One or more strings separated by commas, indicating a set of source sizes. Each source size consists of:
	 * 1. A media condition. This must be omtted for the last item in the list.
	 * 2. A source size value.
	 *
	 * Media Conditions describe properties of the viewport, not of the image.
	 * e.g.: `(max-height: 500px) 1000px` proposes to use a source of 1000px width, if the viewport is not higher than 500px.
	 */
	@Input()
	public sizes = '';

	/**
	 * __`optional`__
	 *
	 * The image URL. Mandatory for the <img> element.
	 * On browsers supporting srcset, src is treated like a candidate image with a pixel density descriptor 1x,
	 * unless an image with this pixel density descriptor is already defined in srcset, or unless srcset contains w descriptors.
	 */
	@Input()
	public src: string;

	/**
	 * __`optional`__
	 *
	 * One or more strings separated by commas, indicating possible image sources for the user agent to use. Each string is composed of:
	 * 1. A URL to an image
	 * 2. Optionally, whitespace followed by one of:
	 * - A width descriptor (a positive integer directly followed by w). The width descriptor is divided by the source size given in the
	 * sizes attribute to calculate the effective pixel density.
	 * - A pixel density descriptor (a positive floating point number directly followed by `x`).
	 *
	 * If no descriptor is specified, the source is assigned the default descriptor of 1x.
	 *
	 * It is incorrect to mix width descriptors and pixel density descriptors in the same `srcset` attribute.
	 * Duplicate descriptors (for instance, two sources in the same `srcset` which are both described with `2x`) are also invalid.
	 *
	 * The user agent selects any of the available sources at its discretion.
	 * This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions.
	 * See this Responsive images tutorial for an example.
	 *
	 * @see Responsive image tutorial {@link https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images}
	 */
	@Input()
	public srcset = '';

	/**
	 * __`optional`__
	 *
	 * The intrinsic width of the image in pixels. Must be an integer without a unit.
	 */
	@Input()
	public width: number = null;

	/**
	 * __`optional`__
	 *
	 * The partial URL (starting with #) of an image map associated with the element.
	 *
	 * Note: You cannot use this attribute if the <img> element is inside an <a> or <button> element.
	 */
	@Input()
	public usemap: string = null;
}
