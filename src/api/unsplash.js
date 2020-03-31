import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID HR1Yow3xv0XDdP8MIEfu_GTdkCDZfLgcwr-unWACxnk'
    }
});