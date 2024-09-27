import * as request from "../utils/HttpRequest";
export const GetCategoriesService = async () => {
    try {
      const res = await request.GET(`category/all`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  export const GetCategoryById = async (id:number,params:string) => {
    try {
      const res = await request.GET(`category/get_child/`+id+params);
      return res;
    } catch (error) {
      console.log(error);
    }
  };