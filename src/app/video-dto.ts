export interface VideoDto{//here we are taking care of response of video data coming from backend


     id: string;
     title: string;
     description:string
     tags: Array<string>
     videoUrl:string
     VideoStatus: string
     thumbnailUrl: string
     LikeCount: number;
     dislikeCount: number;
     viewCount: number;


}