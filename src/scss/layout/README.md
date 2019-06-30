
Change the default document flow with these display, float, and other utilities.

## Display

To adjust the display of an element, use the `.block`, `.inline`, `.inline-block`, `.table`, and `.table-cell` utilities.

```html
<div class="inline">inline</div>
<div class="inline-block">inline-block</div>
<a href="#" class="block">block</a>
<div class="table">
  <div class="table-cell">table-cell</div>
  <div class="table-cell">table-cell</div>
</div>
```

## Responsive Display

To adjust the display of an element for responsive widths, use the prefixed classes

```html
<div class="tl-block">block on tablet landscape</div>
<div class="tl-inline-block">inline-block on tablet landscape</div>

<div class="tp-block">block on tablet portrait</div>
<div class="tp-inline-block">inline-block on tablet portrait</div>

<div class="p-block">block on phone</div>
<div class="p-inline-block">inline-block on phone</div>
```

## Overflow

To adjust element overflow, use `.overflow-hidden`, `.overflow-scroll`, and `.overflow-auto`.
`.overflow-hidden` can also be used to create a new block formatting context or clear floats.

## Floats

Use `.clearfix`, `.left`, and `.right` to clear and set floats.

```html
<div class="clearfix border">
  <div class="left border">.left</div>
  <div class="right border">.right</div>
</div>
```
