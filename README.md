# FE-screening

First of all, thanks for taking the time working on this task.

We have multiple problems in our Frontend Application that need to be fixed. Feel free to write down your thoughts or approach below the task description if you can't come up with a solution.

# 1. Fix our Layout:

Please fix our layout at [fix-layout](http://localhost:3000/fix-layout) page. The red module box should be placed right beside the two title boxes, somehow it slipped down for us. Maybe you can even explain to us why this did happen?

Notes -

By default in the CSS box model, the width and height you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box that's rendered on the screen. This means that when you set width and height, you have to adjust the value you give to allow for any border or padding that may be added. For example, if you have four boxes with width: 25%;, if any has left or right padding or a left or right border, they will not by default fit on one line within the constraints of the parent container.

The box-sizing property can be used to adjust this behavior:

content-box gives you the default CSS box-sizing behavior. If you set an element's width to 100 pixels, then the element's content box will be 100 pixels wide, and the width of any border or padding will be added to the final rendered width, making the element wider than 100px.
border-box tells the browser to account for any border and padding in the values you specify for an element's width and height. If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. This typically makes it much easier to size elements.

box-sizing: border-box was set on html but not a universal selector so I added it. This is recommended by Josh Comeau to be applied to all styles in global styles or the more intuitive box sizing model.

# 2. Make our page responsive:

Please make our page ([fix-responsive](http://localhost:3000/fix-responsive)) responsive while maintaining the hierachy of importance. Do your best at making it fit the screen more appropriately at any screen size.

Notes -

I used a flex layout for the sub stories. You could also use a css grid for the whole page.

# 3. Replace the markup with an image:

Please change the markup on the [replace-image](http://localhost:3000/replace-image) page to an image by just using CSS. We would appreciate if you could demonstrate us multiple ways of how one can achieve this.

Notes -

See https://css-tricks.com/the-image-replacement-museum/

# 4. Introducing state to our Application:

We now want to add interaction to our table on our Index page ([localhost:3000/](http://localhost:3000/)). Please complete the feature that we can add and remove persons from the table. Ideally we want to do this using the Vuex Store to manage the state.

Notes -

I used decorator functions for accessing the store.

# Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
