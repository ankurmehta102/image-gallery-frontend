import { useEffect, useState } from 'react';
import Card from '../components/card/Card';
import { getImages } from '../utils/http-common';
import { isUserAndToken } from '../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import Loader from '../components/helpers/Loader';
import { setLoading } from '../slices/generalSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.general);

  const [imagesData, setImagesData] = useState<ImageInfo[]>([]);

  const getAllImages = async () => {
    try {
      dispatch(setLoading(true));
      const user = isUserAndToken();
      if (!user) {
        navigate('/login');
        return;
      }
      const response = await getImages(user?.id);
      const data = imagesDataAdapter(response.data);
      setImagesData(data);
    } catch (err) {
      console.log('getAllimages--->', err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);

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

export default Home;

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

export const imagesDataAdapter = (data: any[]) => {
  const formatedData = data.map((imageInfo) => {
    return {
      name: imageInfo.title,
      size: imageInfo.size,
      date: '8-11-23',
      imageLink: imageInfo.path,
    };
  });
  return formatedData;
};
