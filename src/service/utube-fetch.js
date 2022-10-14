class UtubeFetch {
  constructor(key) {
    this.key = key;

    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular() {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}&q=bts&type=video`, this.getRequestOptions);
    const result = await response.json();
    return result.items;
  };

  async search(query) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&q=${query}&maxResults=25&key=${this.key}&type=video`, this.getRequestOptions);
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default UtubeFetch;