import axios from 'axios'
import { axiosInstance } from "./config";
export const getIdeaRequest = () => 
axiosInstance.get("/idea-item")
// axios.get('https://www.fastmock.site/mock/ddcffb78b7166d4307e2cb22af2b93b3/idea/idea-item')
export const getOldSearchRequest = () => 
axiosInstance.get("/search/oldsearch")
// axios.get('https://www.fastmock.site/mock/ddcffb78b7166d4307e2cb22af2b93b3/idea/oldsearch')
export const getSearchFindRequest = () => 
axiosInstance.get("/search/find")
// axios.get('https://www.fastmock.site/mock/ddcffb78b7166d4307e2cb22af2b93b3/idea/search/find')
export const getHotSearchVedioRequest = () => 
axiosInstance.get("/search/vedio")
// axios.get('https://www.fastmock.site/mock/ddcffb78b7166d4307e2cb22af2b93b3/idea/search/vedio')
export const getHotSearchGameRequest = () => 
axiosInstance.get("/search/game")
export const getSearchItemRequest = () => 
axiosInstance.get("/search/item")

  
  