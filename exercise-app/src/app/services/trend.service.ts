import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthConstant } from '../constants/auth.constants';
import { EndPointConstants } from '../constants/endpoint.constants';
import { Trend } from '../models/trend.model';

@Injectable({
  providedIn: 'root',
})
export class TrendService {
  constructor(private httpClient: HttpClient) {}

  public getAllTrends(): Observable<Trend[]> {
    const headers = new HttpHeaders({
      'X-Avantio-Auth': AuthConstant.token,
    });

    this.httpClient
      .get<Trend[]>(EndPointConstants.WebService.newsEndPoint(), {
        headers: headers,
      })
      .subscribe((trend) => console.log(trend));

    return this.httpClient.get<Trend[]>(
      EndPointConstants.WebService.newsEndPoint(),
      {
        headers: headers,
      }
    );
  }

  public createNewTrend(newTrend: Trend): Observable<Trend> {
    const headers = new HttpHeaders({
      'X-Avantio-Auth': AuthConstant.token,
    });

    return this.httpClient.post<Trend>(
      EndPointConstants.WebService.newsEndPoint(),
      newTrend,
      {
        headers: headers,
      }
    );
  }

  public updateNewTrend(title: string, trendId: string): Observable<any> {
    const body = {
      title: title,
    };
    const headers = new HttpHeaders({
      'X-Avantio-Auth': AuthConstant.token,
    });

    return this.httpClient.put<any>(
      EndPointConstants.WebService.newsEndPointById(trendId),
      body,
      {
        headers: headers,
      }
    );
  }

  public deleteTrend(trendId: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Avantio-Auth': AuthConstant.token,
    });

    return this.httpClient.delete<any>(
      EndPointConstants.WebService.newsEndPointById(trendId),
      {
        headers: headers,
      }
    );
  }

  public getTrendById(trendId: string): Observable<Trend> {
    const headers = new HttpHeaders({
      'X-Avantio-Auth': AuthConstant.token,
    });

    return this.httpClient.get<Trend>(
      EndPointConstants.WebService.newsEndPointById(trendId),
      {
        headers: headers,
      }
    );
  }

  public getAllTrendsByProvider(provider: string, trends: Trend[]): Trend[] {
    return trends.filter((trend) => trend.provider === provider);
  }
}
