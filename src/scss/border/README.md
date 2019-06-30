This module controls borders and border radii.

## Borders

Add borders with these border utilities.

```html
<div class="p1 m1 border">.border</div>
<div class="p1 m1 border-top">.border-top</div>
<div class="p1 m1 border-right">.border-right</div>
<div class="p1 m1 border-bottom">.border-bottom</div>
<div class="p1 m1 border-left">.border-left</div>
<div class="p1 m1 border border-red">.border .border-red</div>
```

Remove borders with the `.border-none` utility.

```html
<input type="text" class="border-none" placeholder=".border-none" />
```

## Border Radii

Utility styles for border radii can be used to style images and other elements.

```html
<img class="rounded" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
<img class="circle" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
<img class="rounded-top" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
<img class="rounded-right" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
<img class="rounded-bottom" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
<img class="rounded-left" src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg" width="64" height="64" />
```

The `.not-rounded` utility can be used to override default radii.
This is useful for things like input and button groups.

```html
<button class="btn not-rounded">Not Rounded</button>
```
## Border colors

The color classes can be used to give color to a border class

```html
<button class="border border-washout">Border with washout color</button>
```

## Border inset

The border-inset will give a border to the element with out adding to the size of the box model

```html
<button class="border-inset">border inset</button>
<button class="border-inset-top">border inset top</button>
<button class="border-inset-bottom">border inset bottom</button>
```

## Shadows

The `shadow` will give shadows of different strengths to the element

```html
<button class="component-shadow">shadow 1</button>
<button class="element-shadow">shadow 2</button>
<button class="shadow-3">shadow 3</button>
<button class="shadow-4">shadow 4</button>
<button class="shadow-5">shadow 5</button>
<button class="shadow-6">shadow 6</button>
```
