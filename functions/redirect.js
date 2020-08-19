exports.handler = function(event, context, callback) {
  let headers = {
    'Location': event.queryStringParameters.image
  };

  if (! event.headers.accept.startsWith('image')) {
    headers = {
      'Location': event.queryStringParameters.link,
      // Do not cache the text request response because the browser will use
      // this cached response for the next embed request (e.g: if the user
      // clicks the link and then returns to the page with the embed)
      'Cache-Control': 'max-age=0, no-cache, no-store, must-revalidate'
    };
  }

  callback(
    null,
    Object.assign({
      'statusCode': 302
    }, {
      'headers': headers
    })
  );
};
