# `destination.png`

[![Deploy To Netlify](https://www.netlify.com/img/deploy/button.svg)][deploy-to-netlify]

You need a single URL that provides an image when embedded and a link when
clicked. Pass your `link` and your `image` to the `/image` endpoint.

```
/image?link=absolute-page-link&image=absolute-image-link
```

## Example

```
https://destinationpng.netlify.app/image?link=https://www.example.com&image=https://picsum.photos/536/354
```

Rendered with:

```
<a href="$link">
  <img src="$link"/>
</a>
```

Produces:

[![Example Image](https://picsum.photos/536/354)][example]

[deploy-to-netlify]: https://app.netlify.com/start/deploy?repository=https://github.com/shrink/destination.png
[example]: https://example.com
