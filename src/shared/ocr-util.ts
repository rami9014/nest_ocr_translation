import { Injectable } from '@nestjs/common';
import axios from 'axios'

export interface IocrBody {
  images: Iimages[],
  lang: string,
  requestId: string,
  resultType: string,
  timestamp: Date,
  version: string
}
interface Iimages{
  format: string,
  name: string,
  data: string,
  url: string
}

@Injectable()
export class OcrUtil{
  async ocrInterlock(msg: string) {
    axios.post(process.env.NAVER_OCR_URL).then(
      // result parsing 
      // reulst > images[] > name, inferResult, message 리턴 값 validation 
      // images [] > fields[] > inferText , inferConfidence 로 validation
    ).catch(err=>{

    })
  }
}
