import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/catalog';

export const getAll = () => request.get(baseUrl);

export const getOne = (id) => request.get(`${baseUrl}/${id}`);

export const create = (equipmentData) => request.post(baseUrl, equipmentData);

export const edit = (id, equipmentData) => request.put(`${baseUrl}/${id}`, equipmentData);