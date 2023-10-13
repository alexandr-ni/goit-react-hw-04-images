import axios from 'axios';

const key = '37083329-36222d9a5ab659cb9784863e4';

export const fetchImages = async () => {
  const resp = await axios.get('https://pixabay.com/api/', {
    params: {
      key: `${key}`,
      q: `${localStorage.getItem('currentText')}`,
      image_type: 'photo',
      orientation: 'horizontal',
      page: `${localStorage.getItem('currentPage')}`,
      per_page: 12,
    },
  });

  return resp.data;
};
