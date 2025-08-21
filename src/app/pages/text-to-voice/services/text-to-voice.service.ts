import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextToVoiceService {
  http=inject(HttpClient)
  baseUrl = "http://testtts.xb.uz";

  postText(text: string) {
    return this.http.post(`${this.baseUrl}/tts/synthesis`,{text}, { responseType: 'blob' });
  }


}
