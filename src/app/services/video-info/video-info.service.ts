import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from '../../models/video.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const YOUTUBE_API_URL = environment.youtubeApiUrl;
const YOUTUBE_API_KEY = environment.youtubeApiKey;

@Injectable({
  providedIn: 'root'
})
export class VideoInfoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private parseVideoIdFromUrl(url: string): string {
    return url.split('/')[3];
  }

  getVideoInfoFromYoutubeAPI(url: string): Observable<any> {
    console.log(YOUTUBE_API_KEY, YOUTUBE_API_URL);
    const videoId = this.parseVideoIdFromUrl(url);
    const httpHeaders: HttpHeaders = new HttpHeaders({
      key: YOUTUBE_API_KEY,
      id: videoId,
      part: 'snippet'
    });
    return this.httpClient.get(YOUTUBE_API_URL, {headers: httpHeaders});
    // return null;
  }
}
