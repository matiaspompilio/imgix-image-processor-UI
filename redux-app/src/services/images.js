import axios from 'axios';

const imagesUrl = 'https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json';

export const fetchImages = async () => {
  const response = await axios({
    method: 'get',
    url: imagesUrl,
  });
  return response;
};

export default fetchImages;
