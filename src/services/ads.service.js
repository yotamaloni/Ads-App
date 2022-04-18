import { httpService } from "./http.service";

export const boardService = {
  query,
};

async function query(filterBy = null) {
  return httpService.get(`board`, { filterBy });
}
