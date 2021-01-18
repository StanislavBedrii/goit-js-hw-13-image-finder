const baseUrl = 'https://pixabay.com/api/';
const token = '19919645-b27c01b595c623758347e40df';

const apiService = async (value, page) => {
    const result = await fetch(`${baseUrl}?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${token}`);
    return result.json();;
}

export default apiService;