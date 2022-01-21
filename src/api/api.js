import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": 'f11fe5e8-5f83-4b9e-a227-00d1e35aae93'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(pageSize = 5, currentPage = 1) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    auth() {
        return instance.get(`auth/me`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
}