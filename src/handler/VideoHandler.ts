
const MEDIA_SETTINGS:MediaStreamConstraints = {
  video: {width:{
      min: 1280,
      ideal: 3840
    },
    height: {
      min: 720,
      ideal: 2160
    }
  }
}
export type MediaCallback = (media:MediaStream) => void;

export default class VideoHandler {
  private mediaStream!: MediaStream;
  private onMediaCallback!: MediaCallback;

  constructor(onMediaCallback?: MediaCallback, requestMedia = false){
    if(onMediaCallback)
      this.onMediaCallback = onMediaCallback;
    if(requestMedia)
      this.requestMedia();
  }

  public requestMedia(onMediaCallback?: MediaCallback): void{
    navigator.mediaDevices.getUserMedia(MEDIA_SETTINGS).then((media: MediaStream)=>{
      this.mediaStream = media;
      this.initMediaListeners();
      if(onMediaCallback)
        onMediaCallback(this.mediaStream);
      else if(this.onMediaCallback)
        this.onMediaCallback(this.mediaStream);
    }).catch(()=>{
      console.error("Failed to load camera");
    })
  }

  private initMediaListeners(){
    this.mediaStream.getVideoTracks()[0].addEventListener("ended", (event: Event)=>{
      console.error("The camera track is closed");
    })
  }

  public captureImage(){
    // Prevent capturing black image.
    if(!this.mediaStream || this.mediaStream.getVideoTracks().length == 0)
      return;
  }
}