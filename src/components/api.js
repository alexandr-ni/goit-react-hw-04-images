import axios from 'axios';

export const fetchImages = async () => {
  const resp = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '37083329-36222d9a5ab659cb9784863e4',
      q: `${localStorage.getItem('currentText')}`,
      image_type: 'photo',
      orientation: 'horizontal',
      page: `${localStorage.getItem('currentPage')}`,
      per_page: 12,
    },
  });

  return resp.data;
};
