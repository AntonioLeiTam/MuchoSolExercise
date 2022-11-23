export class EndPointConstants {
  public static WebService = {
    newsEndPointById: (newId: any) =>
      `https://challenge.avantio.pro/v1/trends/${newId}`,
    newsEndPoint: (): string => 'https://challenge.avantio.pro/v1/trends',
  };
}
