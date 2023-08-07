import Card from '../components/card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Loader from '../components/helpers/Loader';
import useFetchData from '../hooks/useFetchData';
import { USE_FETCH_VALUE } from '../utils/constant';

const Home = () => {
  const { isLoading } = useSelector((state: RootState) => state.general);
  const { data: imagesData } = useFetchData(USE_FETCH_VALUE.IMAGES);

  return (
    <div
      id="home-main"
      className="relative flex h-full w-full items-center justify-center bg-sidebar"
    >
      {imagesData.length ? (
        <div
          className={`grid ${getInitialGridColumns(
            imagesData.length
          )} max-h-90 gap-x-1 gap-y-4 overflow-y-auto rounded border-custom-slate bg-images-container p-5 max-[1090px]:grid-cols-four  max-[910px]:grid-cols-three max-[715px]:grid-cols-two max-[505px]:grid-cols-one`}
        >
          {imagesData?.map((image: ImageInfo, index) => {
            return (
              <div key={index} className="flex justify-center">
                <Card
                  name={image.name.slice(0, 7)}
                  size={image.size}
                  date={image.date}
                  imageLink={image.imageLink}
                  bgColor={getColor(index)}
                />
              </div>
            );
          })}
        </div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <p className="text-white">Nothing found.</p>
      )}
    </div>
  );
};

type ImageInfo = {
  name: string;
  size: string;
  date: string;
  imageLink: string;
};

const colorsArray = [
  'bg-card-one',
  'bg-card-two',
  'bg-card-three',
  'bg-card-four',
];

function getColor(index: number) {
  return colorsArray[index % colorsArray.length];
}

const getInitialGridColumns = (length: number) => {
  switch (length) {
    case 4:
      return 'grid-cols-four';
    case 3:
      return 'grid-cols-three';
    case 2:
      return 'grid-cols-two';
    case 1:
      return 'grid-cols-one';

    default:
      return 'grid-cols-five';
  }
};

export default Home;
