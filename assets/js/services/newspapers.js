import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5555/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default {
    read(id = null) {
        const url = id ? '/newspapers?id=' + id : '/newspapers';
        return apiClient.get(url);
    },
    readLatest() {
        return apiClient.get('/latest');
    },
    write(newspaper) {
        return apiClient.post('/newspapers', newspaper);
    },
    edit(id, updatedNewspaper) {
        return apiClient.put(`/newspapers/${id}`, updatedNewspaper);
    },
    throwAway(id) {
        return apiClient.delete(`/newspapers/${id}`);
    }
};
