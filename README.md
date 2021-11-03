# vue3-copy

> This is fork from [egoist/v-copy](https://github.com/egoist/v-copy) and now support Vue 3.

Vue directive to copy to clipboard.

## Install

```bash
yarn add vue3-copy
```

## Usage

First register the directive globally:

```js
import Copy from "vue3-copy";

const app = createApp(App);
app.use(Copy);
app.mount("#app");
```

Then use it in template:

```vue
<template>
  <button v-copy="`some text`">Copy!</button>
</template>
```

**`v-copy:callback`**: executed after text is copied to clipboard.

```vue
<template>
  <button v-copy="`some text`" v-copy:callback="handleCopied">Copy!</button>
</template>

<script>
export default {
  setup() {
    function handleCopied(text = "") {
      alert(`Copied: ${text}`)
    }
    return {
      handleCopied
    }
  }
}
</script>
```

## Browser support

This supports what [copy-text-to-clipboard](https://github.com/sindresorhus/copy-text-to-clipboard) supports, namely ever-green browsers and IE9+. (Not all are carefully tested though :P)

## License

MIT &copy; [EGOIST](https://github.com/egoist)
