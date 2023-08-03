import Card from '../components/card/Card';

const Home = () => {
  const ImagesData = [
    {
      name: 'Goku.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink:
        'https://wallpapers-clan.com/wp-content/uploads/2023/01/dragon-ball-goku-art-wallpaper.jpg',
    },
    {
      name: 'Vegeta.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink:
        'https://a-static.besthdwallpaper.com/super-saiyan-blue-vegeta-from-dragon-ball-super-resurrection-f-saga-dragon-ball-legends-art-wallpaper-1440x960-100962_37.jpg',
    },
    {
      name: 'Goku.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink:
        'https://i.pinimg.com/550x/76/98/30/7698308b33bfa7f170814f0a6c08b8fb.jpg',
    },
    {
      name: 'Goku.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink: 'https://sm.ign.com/ign_in/screenshot/default/24_dgxy.png',
    },
    {
      name: 'Goku.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink:
        'https://m.media-amazon.com/images/M/MV5BNDYyNTJkNmItYjgxNC00ODliLTg2MGMtZjkxNjEwYzdjNjUxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    },
    {
      name: 'Vegeta.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink:
        'https://cdn.pixabay.com/photo/2020/01/02/06/29/goku-4735092_1280.jpg',
    },
    {
      name: 'Goku.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink:
        'https://img.asmedia.epimg.net/resizer/hsKEh8tm6LkOWe90u-htEuqzQws=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HQPMVB4ZQNNPFDQGF3OUQW26JY.jpg',
    },
    {
      name: 'Goku.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink:
        'https://i.pinimg.com/236x/b8/24/6c/b8246c0d80a648ba5dce6c76010bc5ac.jpg',
    },
    {
      name: 'Goku.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink: 'https://images7.alphacoders.com/593/593278.jpg',
    },
    {
      name: 'Vegeta.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink:
        'https://a-static.besthdwallpaper.com/super-saiyan-blue-vegeta-from-dragon-ball-super-resurrection-f-saga-dragon-ball-legends-art-wallpaper-1440x960-100962_37.jpg',
    },
    {
      name: 'Goku.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink:
        'https://i.pinimg.com/550x/76/98/30/7698308b33bfa7f170814f0a6c08b8fb.jpg',
    },
    {
      name: 'Goku.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink: 'https://sm.ign.com/ign_in/screenshot/default/24_dgxy.png',
    },
    {
      name: 'Goku.jpg',
      size: '40.0 mb',
      date: '8-1-23',
      imageLink:
        'https://m.media-amazon.com/images/M/MV5BNDYyNTJkNmItYjgxNC00ODliLTg2MGMtZjkxNjEwYzdjNjUxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
    },
  ];
  const colorsArray = [
    'bg-card-purple',
    'bg-card-gray',
    'bg-card-red',
    'bg-card-blue',
  ];
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    console.log();
    return colorsArray[randomIndex];
  }

  return (
    <div
      id="home-main"
      className="flex h-full w-full flex-col items-center justify-center"
    >
      <div className="grid h-5/6 grid-cols-five gap-y-4 overflow-y-scroll bg-sidebar  p-5 max-[1090px]:grid-cols-four max-[910px]:grid-cols-three max-[715px]:grid-cols-two  max-[505px]:grid-cols-one ">
        {ImagesData.map((image) => {
          return (
            <div className="flex justify-center">
              <Card
                name={image.name}
                size={image.size}
                date={image.date}
                imageLink={image.imageLink}
                bgColor={getRandomColor()}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
