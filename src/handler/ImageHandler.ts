
export default class ImageHandler{
  private canvas: HTMLCanvasElement = document.createElement("canvas");
  private videoElement: HTMLVideoElement = document.createElement("video");
  private stream: MediaStream;
  private video: MediaStreamTrack;
  private lastImage!: string; 

  constructor(stream:MediaStream){
    this.stream = stream;
    this.video = this.stream.getVideoTracks()[0];
  }

  public captureImage(): Promise<string> {
    return new Promise<string>((resolve, error)=>{
      this.videoElement.srcObject = this.stream;
      this.videoElement.play();
      this.videoElement.addEventListener("canplay", (event) => {
        const videoSettings = this.video.getSettings();
        this.canvas.width = videoSettings.width || 0;
        this.canvas.height = videoSettings.height || 0;
        this.clearPhoto();
        const context = this.canvas.getContext("2d");
        if(!context){
          error("Failed to capture canvas context");
          return;
        }
        context.drawImage(this.videoElement, 0, 0, this.canvas.width, this.canvas.height);
        this.lastImage = this.canvas.toDataURL('image/png');
        this.videoElement.srcObject = null;
        resolve(this.lastImage);
      });
    });
  }
  
  private clearPhoto(): void{
    const context = this.canvas.getContext('2d');
    if(!context)
      return;
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

}