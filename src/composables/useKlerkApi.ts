// import type { CataasModel, CatModel } from '@/models/CataasModel'

export default function useKlerkApi(): any {
  const getRubrics = async (
    allowEmpty: boolean = false
  ): Promise<any | undefined> => {
    try {
      const url: string = allowEmpty
        ? `/src/api/json/klerk-rubrics-allow-empty.json`
        : `/src/api/json/klerk-rubrics.json`;

      let response: Response = await fetch(url);
      return response.json();
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return {
    getRubrics,
  };
}
