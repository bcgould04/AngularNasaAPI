export interface MarsRover {
photos: [{
  id: number,
  sol: number,
  camera: {
    full_name: string
    id: number,
    name: string,
    rover_id: number
  },
  earth_date: string,
  img_src: string,
  rover: {
    id: number,
    name: string,
    landing_date: string,
    launch_date: string,
    status: string
  }
}];
}


