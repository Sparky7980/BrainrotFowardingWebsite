// netlify/functions/redirect-roblox.js

exports.handler = async function(event, context) {
  // Extract placeId and gameInstanceId from the query parameters
  const { placeId, gameInstanceId } = event.queryStringParameters;

  // Check if both parameters are provided
  if (!placeId || !gameInstanceId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing placeId or gameInstanceId" })
    };
  }

  // Construct the roblox:// link
  const robloxLink = `roblox://experiences/start?placeId=${placeId}&gameInstanceId=${gameInstanceId}`;

  // Redirect the user to the roblox:// link
  return {
    statusCode: 302,  // HTTP redirect status code
    headers: {
      Location: robloxLink  // This will trigger the redirect
    },
    body: "Redirecting..."  // Optional: a message in case the redirect fails
  };
};
