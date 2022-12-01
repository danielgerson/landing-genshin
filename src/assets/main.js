const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCiS882YPwZt1NfaM0gR0D9Q&part=snippet%2Cid&order=date&maxResults=10";

const $content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "42b7a88c88msh1dbd0d19bf7e8c2p17650ejsn1916e733f635",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = fetchData(API);
    let view = `
    ${videos.items.map(
      (video) => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
    >
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>
    `
    )}
    `;
    $content.innerHTML =  view;
  } catch (error) {
    console.error(error);
    prompt("Ocurrió un error en la conexión")
  }
})();
