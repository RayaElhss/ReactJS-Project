import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/destinations';

export const getAll = () => request.get(baseUrl);