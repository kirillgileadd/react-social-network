import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        // "API-KEY": '09ac5eea-6ade-41a8-8070-2ec021213784' // sokil
        "API-KEY": '4ebd39ab-09b4-42db-8bc5-0c1a6481ce32'
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
    searchUsers(pageSize = 5, currentPage = 1, searchValue) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${searchValue}`)
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    putStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    isFollow(userId) {
        return instance.get(`/follow/${userId}`)
    },
    savePhoto(photo) {
        const formData = new FormData();
        formData.append("image", photo);
        return instance.put(`/profile/photo`, formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
    }
}

export const dialogsAPI = {
    getDialogs() {
        return  instance.get(`dialogs`)
    },
    getUserDialog(userId) {
        return  instance.post(`dialogs/${userId}`)
    }
}